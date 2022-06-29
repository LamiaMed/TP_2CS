module.exports = function(sequelize, Sequelize) {
    const Reclamation = sequelize.define("reclamation", {
        
        idReclamation: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement:true,
        },
        
        type: {
            type: Sequelize.BOOLEAN,
        },

        reclamateur: {
            type: Sequelize.ENUM,
            values: ['patient', 'operateur', 'structure sanitaire'],
        },

        nomReclamateur:{
            type: Sequelize.STRING,
        },

        email: {
            type: Sequelize.STRING,
        },

        tel: {
            type: Sequelize.INTEGER,
        },

        description: {
            type: Sequelize.STRING,
        },

        typeProbleme: {
            type: Sequelize.STRING,
        },

        dateHeureReclamation: {
            type: Sequelize.DATE,
        },


    }, {
        freezeTableName: true,
        tableName: 'reclamation',
        createdAt: false,
        updatedAt: false
    });


    return Reclamation;
};