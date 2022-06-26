module.exports = function (sequelize, Sequelize) {
	const Vehicule = sequelize.define(
		'vehicule',
		{
			idVehicule: {
				type: Sequelize.INTEGER,
				primaryKey: true,
			},
			
            numImmatriculation: {
				type: Sequelize.INTEGER,
				allowNull: false,
			},

			categorieTransport:  {
				type: Sequelize.ENUM,
				values: ['A', 'B', 'C'],
				allowNull: false,
			},
			
			idChauffeur: {
				type: Sequelize.INTEGER,
			},
			
			id: {
				type: Sequelize.STRING(128),
				unique: true
			},

            idOperateur: {
				type: Sequelize.INTEGER,
			}, 

		},
		{
			freezeTableName: true,
			tableName: 'vehicule',
			createdAt: false,
			updatedAt: false,
		}
	);

    // Déclaration des clès étrangères
    Vehicule.associate = (models) => {
        Vehicule.hasOne(models.chauffeur, {
            foreignKey: 'idChauffeur',
        });
        Vehicule.belongsTo(models.Operateur, {
            foreignKey: 'idOperateur',
        });
    };

    return Vehicule;
};