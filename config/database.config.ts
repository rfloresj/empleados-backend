import { Sequelize } from 'sequelize'
import dotenv from 'dotenv'

dotenv.config()

const database = process.env.DB_NAME as string
const username = process.env.DB_USER as string
const password = process.env.DB_PASS as string
const host = process.env.DB_HOST as string
const dialect = process.env.DB_DIALECT as any

const sequelize = new Sequelize(database, username, password, {
  host,
  dialect,
  logging: console.log,
})

export default sequelize
