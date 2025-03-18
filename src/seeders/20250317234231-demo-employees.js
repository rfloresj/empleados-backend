'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			'employees',
			[
				{
					id: 1,
					name: 'Lorena Sanchez Pérez',
					phone: '+525556587767',
					email: 'lorena.perez@gmail.com',
					areaId: 1,
					createdAt: new Date('2025-03-16T15:25:11'),
					updatedAt: new Date('2025-03-17T21:23:49'),
				},
				{
					id: 2,
					name: 'Federico Jimenez Bautista',
					phone: '5658111155',
					email: 'fedejbau@gmail.com',
					areaId: 3,
					createdAt: new Date('2025-03-17T04:54:55'),
					updatedAt: new Date('2025-03-17T05:40:01'),
				},
				{
					id: 3,
					name: 'Pedro Fernandez Hinojosa',
					phone: '5658111211',
					email: 'pedro.fh@gnp.com.mx',
					areaId: 5,
					createdAt: new Date('2025-03-17T05:01:18'),
					updatedAt: new Date('2025-03-17T05:40:45'),
				},
			],
			{},
		)
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete('employees', null, {})
	},
}
