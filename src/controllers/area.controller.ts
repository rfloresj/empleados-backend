import { Request, Response } from 'express'
import { Op } from 'sequelize'
import Area from '../models/area.model'

export const getAreaById = async (req: Request, res: Response) => {
	const { id } = req.params
	const area = await Area.findByPk(id)

	if (!area) {
		res.status(404).json({ message: 'Area not found' })
		return
	}
	res.status(200).json(area)
}

export const getAreas = async (_req: Request, res: Response) => {
	const areas = await Area.findAll()

	res.status(200).json(areas)
}

export const createArea = async (req: Request, res: Response) => {
	const { description } = req.body

	if (!description) {
		res.status(400).json({ message: 'Description required' })
		return
	}

	const existingArea = await Area.findOne({ where: { description } })
	if (existingArea) {
		res.status(409).json({ message: 'Area already exists' })
		return
	}

	try {
		await Area.create({ description })
		res.sendStatus(204)
	} catch (error) {
		res.status(500).json({ message: 'Error creating area' })
	}
}

export const updateArea = async (req: Request, res: Response) => {
	const { id } = req.params
	const { description } = req.body
	const area = await Area.findByPk(id)

	if (!area) {
		res.status(404).json({ message: 'Area not found' })
		return
	}

	const duplicateArea = await Area.findOne({
		where: {
			description,
			id: { [Op.ne]: id },
		},
	})

	if (duplicateArea) {
		res.status(409).json({ message: 'Area already exists' })
		return
	}

	try {
		await area.update(req.body)
		res.sendStatus(204)
	} catch (error: any) {
		res
			.status(500)
			.json({ message: 'Error updating area', error: error.message })
	}
}

export const deleteArea = async (req: Request, res: Response) => {
	const { id } = req.params
	try {
		const area = await Area.findByPk(id)

		if (!area) {
			res.status(404).json({ message: 'Area not found' })
			return
		}
		await area.destroy()
		res.sendStatus(204)
	} catch (error: any) {
		if (error.name === 'SequelizeForeignKeyConstraintError') {
			res.status(409).json({
				message: 'The area cannot be deleted because there are employees assigned to it.',
			})
			return
		}
		res.status(500).json({
			message: 'Error deleting area',
			error: error.message,
		})
		return
	}
}
