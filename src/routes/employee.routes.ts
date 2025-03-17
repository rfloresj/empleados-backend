import express from 'express'
import {
	getEmployeeById,
	getEmployees,
	createEmployee,
	updateEmployee,
	deleteEmployee,
} from '../controllers/employee.controller'


const router = express.Router()

router.get('/employee/:id', getEmployeeById)
router.get('/employees', getEmployees)
router.post('/employee', createEmployee)
router.put('/employee/:id', updateEmployee)
router.delete('/employee/:id', deleteEmployee)

export default router