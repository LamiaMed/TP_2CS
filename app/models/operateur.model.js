module.exports = function (sequelize, Sequelize) {
	const Operateur = sequelize.define(
		'operateur',
		{
			//added this
			idOperateur: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				autoIncrement: true,
			},
		
			nom: {
				type: Sequelize.STRING,
			},

            adresseSiege:{
                type: Sequelize.STRING,
            },

            longSiege:{
                type: Sequelize.FLOAT,
				allowNull: false,
            },

            latSiege:{
                type: Sequelize.FLOAT,
				allowNull: false,
            },

            wilaya:{
                type: Sequelize.INTEGER,
				allowNull: false,
            },

            tel: {
                type : Sequelize.INTEGER,
            },

            email:{
                type: Sequelize.STRING,
            },

            nbAvertissement:{
                type: Sequelize.INTEGER
            },

            nbSignalement:{
                type: Sequelize.INTEGER
            },

            score:{
                type: Sequelize.INTEGER
            },

            serv_jour_ferie:{
                type: Sequelize.INTEGER
            },

            serv_soir:{
                type: Sequelize.INTEGER
            }
		},
		{
			freezeTableName: true,
			tableName: 'operateur',
			createdAt: true,
			updatedAt: false,
		}
	);

	
	return Operateur;
};