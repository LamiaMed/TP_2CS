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

        longSiege:{
            type: Sequelize.FLOAT,
        },

        latSiege : {
            type: Sequelize.FLOAT,
        },

        longDomicilePatient:{
            type: Sequelize.FLOAT,
        },

        latDomicilePAtient:{
            type: Sequelize.FLOAT,
        },

        longStruct:{
            type: Sequelize.FLOAT,
        },

        latStruct:{
            type: Sequelize.FLOAT,
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