module.exports = function (sequelize, Sequelize) {
	const Structure = sequelize.define(
		'structure',
		{
			//added this
			idStructure: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				autoIncrement: true,
			},
			nomStructure: {
				type: Sequelize.INTEGER,
                allowNull: false,

			},
            latStructure:{
                type: Sequelize.FLOAT,
				allowNull: false,
            },
			longStructure:{
                type: Sequelize.FLOAT,
				allowNull: false,
            }
		},
		{
			freezeTableName: true,
			tableName: 'patient',
			createdAt: true,
			updatedAt: false,
		}
	);
	
	return Structure;
};