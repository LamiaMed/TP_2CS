module.exports = function(sequelize, Sequelize) {
    const Itineraire = sequelize.define("itineraire", {
        idItineraire: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement:true,
        },
        
        heureDebut: {
            type: Sequelize.DATE,
        },

        tempsEstime: {
            type: Sequelize.INTEGER,

        },
        nbKilometres: {
            type: Sequelize.FLOAT,
        },

        idTrajet: {
            type: Sequelize.INTEGER,
        }
    }, {
        freezeTableName: true,
        tableName: 'itineraire',
        createdAt: false,
        updatedAt: false
    });


    Itineraire.associate = models => {
        Trajet.belongsTo(models.trajet, {
            foreignKey: 'idTrajet',

        });
    };
    return Itineraire;
};