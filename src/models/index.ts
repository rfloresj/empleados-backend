import sequelize from '../../config/database.config';
import Area from './area.model';
import Employee from './employee.model';

Area.associate()
Employee.associate()

const db = {
  sequelize,
  Employee,
  Area
};

export default db;
