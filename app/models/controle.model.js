module.exports = function(sequelize, Sequelize) {
    const Controle = sequelize.define("controle", {
        
        idControle: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement:true,
        },
        
        type: {
            type: Sequelize.ENUM,
			values: ['régulier', 'conformité', 'enquête inopinée'],
			allowNull: false,
        },

        dateControle: {
            type: Sequelize.DATE,
        },

        etat:{
            type: Sequelize.BOOLEAN,
        },

        idOperateur: {
            type: Sequelize.INTEGER,
        },

        idControleur : {
            type: Sequelize.INTEGER,
        },

    }, {
        freezeTableName: true,
        tableName: 'controle',
        createdAt: false,
        updatedAt: false
    });


    Controle.associate = models => {
        Operateur.belongsTo(models.operateur, {
            foreignKey: 'idOperateur',
        });

        
    };
    return Controle;
};