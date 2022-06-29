module.exports = function(sequelize, Sequelize) {
    const DemandePC = sequelize.define("demandepc", {
        
        idDemande: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement:true,
        },
        
        idAssure: {
            type: Sequelize.INTEGER,
        },

        dateSoumission: {
            type: Sequelize.DATE,
        },

        etat:{
            type: Sequelize.ENUM,
            values: ["à traiter", "en cours", "traitée"],
        },

        validite: {
            type: Sequelize.BOOLEAN,
        },

        motifRejet: {
            type: Sequelize.STRING,
        },

        idOperateur: {
            type: Sequelize.INTEGER,
        },

        idStructure: {
            type: Sequelize.INTEGER,
        },

    }, {
        freezeTableName: true,
        tableName: 'demandepc',
        createdAt: false,
        updatedAt: false
    });


    DemandePC.associate = models => {
        DemandePC.hasOne(models.assure, {
            foreignKey: 'idAssure',
        });
        DemandePC.hasOne(models.operateur, {
            foreignKey: 'idOperateur',
        });
        DemandePC.hasOne(models.structure, {
            foreignKey: 'idStructure',
        });
    };

    return DemandePC;
};