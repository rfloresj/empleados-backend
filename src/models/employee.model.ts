import { DataTypes, Model, Optional } from 'sequelize'
import sequelize from '../config/database.config'
import Area from './area.model'

interface EmployeeAttributes {
	id: number
	name: string
	email: string
	phone: string
	areaId: number
	createdAt?: Date
	updatedAt?: Date
}

interface EmployeeCreationAttributes
	extends Optional<EmployeeAttributes, 'id'> {}

class Employee
	extends Model<EmployeeAttributes, EmployeeCreationAttributes>
	implements EmployeeAttributes
{
	public id!: number
	public name!: string
	public email!: string
	public phone!: string
	public areaId!: number

	public readonly createdAt!: Date
	public readonly updatedAt!: Date

	public static associate() {
		Employee.belongsTo(Area, {
			foreignKey: 'areaId',
			as: 'area',
			onDelete: 'RESTRICT',
			onUpdate: 'CASCADE',
		})
	}
}

Employee.init(
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		name: {
			type: DataTypes.STRING(128),
			allowNull: false,
		},
		phone: {
			type: DataTypes.STRING(128),
			allowNull: false,
		},
		email: {
			type: DataTypes.STRING(128),
			allowNull: false,
			unique: true,
		},
		areaId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'areas',
				key: 'id',
			},
			onDelete: 'RESTRICT',
			onUpdate: 'CASCADE',
		},
	},
	{
		sequelize,
		tableName: 'employees',
	},
)

export default Employee
