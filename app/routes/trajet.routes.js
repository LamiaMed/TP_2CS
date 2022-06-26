module.exports = app => {
    const trajet = require("../controllers/trajet.controller.js");
    var trajetRouter = require("express").Router();
    // Create a new Tutorial
    trajetRouter.post("/", trajet.createTrajet);
    trajetRouter.get("/getTrajetByOperateur/:id", trajet.getTrajetByOperateur);
    trajetRouter.get("/getTrajetByPatient/:id", trajet.getTrajetByPatient);
    trajetRouter.get("/getTrajetDouteux/", trajet.getTrajetDouteux);
    trajetRouter.get("/getTrajetValide/", trajet.getTrajetValide);
    trajetRouter.post("/updateTrajetByID/", trajet.updateTrajetByID);
    trajetRouter.get("/getAllTrajets/", trajet.getAllTrajets);
    trajetRouter.get("/:id", trajet.findTrajetByID);

    app.use('/api/trajet', trajetRouter);
    
  };