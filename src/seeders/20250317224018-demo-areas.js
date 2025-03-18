'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			'areas',
			[
				{
					id: 1,
					description: 'Recursos Humanos',
					createdAt: new Date('2025-03-16T15:25:33'),
					updatedAt: new Date('2025-03-16T15:25:34'),
				},
				{
					id: 2,
					description: 'Marketing',
					createdAt: new Date('2025-03-17T00:28:07'),
					updatedAt: new Date('2025-03-17T05:36:51'),
				},
				{
					id: 3,
					description: 'Finanzas',
					createdAt: new Date('2025-03-17T00:52:19'),
					updatedAt: new Date('2025-03-17T05:36:58'),
				},
				{
					id: 4,
					description: 'Desarrollo',
					createdAt: new Date('2025-03-17T01:03:53'),
					updatedAt: new Date('2025-03-17T05:37:13'),
				},
				{
					id: 5,
					description: 'Comunicación',
					createdAt: new Date('2025-03-17T02:18:08'),
					updatedAt: new Date('2025-03-17T05:37:22'),
				},
				{
					id: 6,
					description: 'Reclutamiento y Selección',
					createdAt: new Date('2025-03-17T02:21:46'),
					updatedAt: new Date('2025-03-17T05:38:28'),
				},
				{
					id: 7,
					description: 'Relaciones Laborales',
					createdAt: new Date('2025-03-17T04:46:06'),
					updatedAt: new Date('2025-03-17T05:38:41'),
				},
				{
					id: 8,
					description: 'Logística',
					createdAt: new Date('2025-03-17T04:50:50'),
					updatedAt: new Date('2025-03-17T05:39:02'),
				},
				{
					id: 9,
					description: 'Seguridad Informática',
					createdAt: new Date('2025-03-17T05:01:30'),
					updatedAt: new Date('2025-03-17T05:39:13'),
				},
				{
					id: 10,
					description: 'Contabilidad',
					createdAt: new Date('2025-03-17T05:17:20'),
					updatedAt: new Date('2025-03-17T05:39:32'),
				},
			],
			{},
		)
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete('areas', null, {})
	},
}
