import express from 'express'
import {
	getAreaById,
	getAreas,
	createArea,
	updateArea,
	deleteArea,
} from '../controllers/area.controller'

const router = express.Router()

router.get('/area/:id', getAreaById)
router.get('/areas', getAreas)
router.post('/area', createArea)
router.put('/area/:id', updateArea)
router.delete('/area/:id', deleteArea)

export default router
