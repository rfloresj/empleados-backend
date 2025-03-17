import { DataTypes, Model, Optional } from 'sequelize'
import sequelize from '../../config/database.config'
import Employee from './employee.model'

interface AreaAttributes {
	id: number
	description: string
	createdAt?: Date
	updatedAt?: Date
}

interface AreaCreationAttributes extends Optional<AreaAttributes, 'id'> {}

class Area
	extends Model<AreaAttributes, AreaCreationAttributes>
	implements AreaAttributes
{
	public id!: number
	public description!: string

	public readonly createdAt!: Date
	public readonly updatedAt!: Date

	public static associate() {
		Area.hasMany(Employee, {
			foreignKey: 'areaId',
			as: 'employees',
			onDelete: 'RESTRICT',
			onUpdate: 'CASCADE',
		})
	}
}

Area.init(
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		description: {
			type: DataTypes.STRING(128),
			allowNull: false,
			unique: true,
		},
	},
	{
		sequelize,
		tableName: 'areas',
	},
)

export default Area
