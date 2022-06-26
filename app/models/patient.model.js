module.exports = function (sequelize, Sequelize) {
	const Patient = sequelize.define(
		'patient',
		{
			//added this
			idPatient: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				autoIncrement: true,
			},
			NSS: {
				type: Sequelize.INTEGER,
                allowNull: false,

			},
			nom: {
				type: Sequelize.STRING,
				allowNull: false,
			},
            prenom:{
                type: Sequelize.STRING,
				allowNull: false,
            },
            date_de_naissance: {
                type : Sequelize.DATE,
            },
            adresse:{
                type: Sequelize.STRING,
            }
		},
		{
			freezeTableName: true,
			tableName: 'patient',
			createdAt: true,
			updatedAt: false,
		}
	);

	
	return Patient;
};