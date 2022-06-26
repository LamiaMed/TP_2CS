module.exports = function (sequelize, Sequelize) {
	const Assure = sequelize.define(
		'assure',
		{
			//added this
			idAssure: {
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
            }
		},
		{
			freezeTableName: true,
			tableName: 'assure',
			createdAt: true,
			updatedAt: false,
		}
	);

	
	return Assure;
};