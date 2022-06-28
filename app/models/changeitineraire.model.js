module.exports = function (sequelize, Sequelize) {
	const ChangeItineraire = sequelize.define(
		'changeitineraire',
		{
			//added this
			idChangementItineraire: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				autoIncrement: true,
			},
			
			idTrajet: {
				type: Sequelize.INTEGER,
                allowNull: false,

			},

			motifChangement: {
				type: Sequelize.STRING,
				allowNull: true,
			},

            heureDemande: {
				type: Sequelize.DATE,
				allowNull: false,
			},

            approuve:{
                type: Sequelize.BOOLEAN,
            },
            
		},
		{
			freezeTableName: true,
			tableName: 'changeitineraire',
			createdAt: true,
			updatedAt: false,
		}
	);

    ChangeItineraire.associate = models => {
        ChangeItineraire.belongsTo(models.trajet, {
            foreignKey: 'idTrajet',

        });
    };

	
	return ChangeItineraire;
};