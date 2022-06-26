module.exports = app => {
    const trajet = require("../controllers/trajet.controller.js");
    var trajetRouter = require("express").Router();
    // Create a new Tutorial
    trajetRouter.post("/", trajet.createTrajet);
    trajetRouter.get("/", trajet.getTrajetByOperateur);
    trajetRouter.get("/", trajet.getTrajetByPatient);
    trajetRouter.get("/", trajet.getTrajetDouteux);
    trajetRouter.get("/", trajet.getTrajetValide);
    trajetRouter.post("/", trajet.updateTrajetByID);
    trajetRouter.get("/", trajet.getAllTrajets);
    trajetRouter.get("/", trajet.findTrajetByID);

    app.use('/api/trajet', router);
    
  };