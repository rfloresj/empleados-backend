import db from './models'
import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import employeeRoutes from './routes/employee.routes'
import areaRoutes from './routes/area.routes'
import authRoutes from './routes/auth.routes'
import { verifyToken } from './middlewares/auth.middleware'

const app = express()

app.use(cors())
app.use(bodyParser.json())

app.use('/api', authRoutes)

app.use('/api', verifyToken, employeeRoutes)
app.use('/api', verifyToken, areaRoutes)

const PORT = 3000
db.sequelize.sync({ alter: true }).then(() => {
	app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
})
