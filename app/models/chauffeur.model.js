module.exports = function (sequelize, Sequelize) {
	const Chauffeur = sequelize.define(
		'chauffeur',
		{
			//added this
			idChauffeur: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				autoIncrement: true,
			},

            idOperateur:{
                type: Sequelize.INTEGER,
            },
			
			nom: {
				type: Sequelize.STRING,
				allowNull: false,
			},

            prenom:{
                type: Sequelize.STRING,
				allowNull: false,
            }
		},
		{
			freezeTableName: true,
			tableName: 'chauffeur',
			createdAt: true,
			updatedAt: false,
		}
	);

        // Déclaration des clès étrangères
        Chauffeur.associate = (models) => {
            Chauffeur.belongsTo(models.Operateur, {
                foreignKey: 'idOperateur',
            });
        };
	
	return Chauffeur;
};