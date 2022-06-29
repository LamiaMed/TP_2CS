const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  user : dbConfig.USER,
  password : dbConfig.PASSWORD,
  database : dbConfig.DATABASE,
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false // <<<<<<< YOU NEED THIS
    }
  },
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});
//const sequelize = new Sequelize('postgres://afqnaeywqmdzlm:58c7b307a45009295baa346a736e144cb44c7d68a83fd1594eb782630300be1c@ec2-3-226-163-72.compute-1.amazonaws.com:5432/d1s3crpo1vuf3b') 

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.tutorials = require("./tutorial.model.js")(sequelize, Sequelize);
db.assure = require("./assure.model.js")(sequelize, Sequelize);
db.operateur = require("./operateur.model.js")(sequelize, Sequelize);
db.patient = require("./patient.model.js")(sequelize, Sequelize);
db.trajet = require("./trajet.model.js")(sequelize, Sequelize);
db.itineraire = require("./itineraire.model.js")(sequelize, Sequelize);
db.vehicule = require("./vehicule.model.js")(sequelize, Sequelize);
db.chauffeur = require("./chauffeur.model.js")(sequelize, Sequelize);
db.changeitineraire = require("./changeitineraire.model.js")(sequelize, Sequelize);
db.structure = require("./structure.model.js")(sequelize, Sequelize);
db.demandepc = require("./demandepc.model.js")(sequelize, Sequelize);
db.reclamation = require("./reclamation.model.js")(sequelize, Sequelize);
db.evaluation = require("./evaluation.model.js")(sequelize, Sequelize);
db.controle = require("./controle.model.js")(sequelize, Sequelize);




module.exports = db;
