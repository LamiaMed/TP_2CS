const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");
const { Pool } = require("pg");

const pool = new Pool({
  connectionString: process.env.DATABASE_URL || 'postgresql://postgres:root1234@localhost:5432/EQ10A:openpgpwd',
  ssl: process.env.DATABASE_URL? true : false
})

db.sequelize.sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

// // drop the table if it already exists
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome" });
});

require("./app/routes/turorial.routes")(app);
require("./app/routes/trajet.routes")(app);
require("./app/routes/patient.routes")(app);
require("./app/routes/operateur.routes")(app);
require("./app/routes/itineraire.routes")(app);
require("./app/routes/changeitineraire.routes")(app);
require("./app/routes/structure.routes")(app);
require("./app/routes/chauffeur.routes")(app);
require("./app/routes/demandepc.routes")(app);
//require("./app/routes/evaluation.routes")(app);
//require("./app/routes/reclamation.routes")(app);
//require("./app/routes/controle.routes")(app);






// set port, listen for requests
const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});


