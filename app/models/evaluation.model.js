module.exports = function(sequelize, Sequelize) {
    const Evaluation = sequelize.define("evaluation", {
        
        idEvaluation: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement:true,
        },
        
        idTrajet: {
            type: Sequelize.INTEGER,
			allowNull: false,
        },

        note: {
            type: Sequelize.FLOAT,
        },

        description:{
            type: Sequelize.STRING,
        },

        heureEvaluation: {
            type: Sequelize.DATE,
        },


    }, {
        freezeTableName: true,
        tableName: 'evaluation',
        createdAt: false,
        updatedAt: false
    });


    Evaluation.associate = models => {
        Trajet.belongsTo(models.trajet, {
            foreignKey: 'idTrajet',
        });

        
    };
    return Evaluation;
};