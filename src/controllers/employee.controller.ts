import { Request, Response } from 'express'
import { Op } from 'sequelize'
import Employee from '../models/employee.model'
import Area from '../models/area.model'

export const getEmployeeById = async (req: Request, res: Response) => {
	const { id } = req.params
	const employee = await Employee.findByPk(id)

	if (!employee) {
		res.status(404).json({ message: 'Employee not found' })
		return
	}

	res.status(200).json(employee)
}

export const getEmployees = async (_req: Request, res: Response) => {
	const employees = await Employee.findAll({
		include: [
			{
				model: Area,
				as: 'area',
				attributes: ['description'],
			},
		],
	})

	res.status(200).json(employees)
}

export const createEmployee = async (req: Request, res: Response) => {
	const { name, email, phone, areaId } = req.body ?? {}

	if (!name || !email || !phone || !areaId) {
		res.status(400).json({ message: 'Invalid request body' })
		return
	}

	const existingEmployee = await Employee.findOne({
		where: { email },
	})

	if (existingEmployee) {
		res.status(409).json({ message: 'Employee already exists' })
		return
	}

	try {
		await Employee.create({ name, email, phone, areaId })
		res.sendStatus(204)
	} catch (error) {
		res.status(500).json({ message: 'Error creating employee' })
	}
}

export const updateEmployee = async (req: Request, res: Response) => {
	const { id } = req.params
	const { email } = req.body
	const employee = await Employee.findByPk(id)

	if (!employee) {
		res.status(404).json({ message: 'Employee not found' })
		return
	}

	const duplicateEmployee = await Employee.findOne({
		where: {
			email,
			id: { [Op.ne]: id },
		},
	})

	if (duplicateEmployee) {
		res.status(409).json({ message: 'Employee already exists' })
		return
	}

	try {
		await employee.update(req.body)
		res.sendStatus(204)
	} catch (error: any) {
		res
			.status(500)
			.json({ message: 'Error updating Employee', error: error.message })
	}
}

export const deleteEmployee = async (req: Request, res: Response) => {
	const { id } = req.params
	try {
		const employee = await Employee.findByPk(id)

		if (!employee) {
			res.status(404).json({ message: 'Employee not found' })
			return
		}

		await employee.destroy()
		res.sendStatus(204)
	} catch (error: any) {
		res.status(500).json({
			message: 'Error deleting area',
			error: error.message,
		})
		return
	}
}
