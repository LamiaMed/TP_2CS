module.exports = function(sequelize, Sequelize) {
    const Trajet = sequelize.define("trajet", {
        
        idTrajet: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement:true,
        },

        idItineraireEmprunte:{
            type: Sequelize.INTEGER,
        },

        idItinerairePrevu:{
            type: Sequelize.INTEGER,
        },

        dateDebut: {
            type: Sequelize.DATE,
        },

        heureDebut: {
            type: Sequelize.TIME,
        },
        
        tempsAttente: {
            type: Sequelize.INTEGER,

        },
        nbAvertissement:{
            type: Sequelize.INTEGER
        },
        nbSignalement:{
            type: Sequelize.INTEGER
        },
        
        changementItineraire:{
            type:Sequelize.INTEGER
        },

        motifChangement: {
            type: Sequelize.STRING,
        },

        trajetDouteux:{
            type: Sequelize.BOOLEAN,
        },

        trajetValide:{
            type: Sequelize.BOOLEAN,    
        },

        idOperateur: {
            type: Sequelize.INTEGER,
        },
        
        idPatient: {
            type: Sequelize.INTEGER,
        },

        idChauffeur: {
            type: Sequelize.INTEGER,
        },

        idVehicule: {
            type: Sequelize.INTEGER,
        },

    }, {
        freezeTableName: true,
        tableName: 'trajet',
        createdAt: false,
        updatedAt: false
    });


    Trajet.associate = models => {
        Trajet.hasOne(models.operateur, {
            foreignKey: 'idOperateur',
        });
        Trajet.hasOne(models.itineraire, {
            foreignKey: 'idItineraireEmprunte',
        });
        Trajet.hasOne(models.itineraire, {
            foreignKey: 'idItinerairePrevu',
        });
        Trajet.hasOne(models.patient, {
            foreignKey: 'idPatient',
        });
        Trajet.hasOne(models.vehicule, {
            foreignKey: 'idVehicule',
        });
        Trajet.hasOne(models.chauffeur, {
            foreignKey: 'idChauffeur',
        });
    };
    
    return Trajet;
};