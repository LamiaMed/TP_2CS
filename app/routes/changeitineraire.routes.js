module.exports = app => {
    const changeItineraire = require("../controllers/changeitineraire.controller.js");
    var ciRouter = require("express").Router();
    // Créer une nouvelle demande de changement d'itineraire 
    ciRouter.post("/", changeItineraire.createChangeItineraire);

    //Récupérer un changement d'itineraire par son ID
    ciRouter.get("/:id", changeItineraire.getChangeItineraireByID);

    //Approuver un changement d'itineraire
    ciRouter.get("/approuverChange/:id", changeItineraire.approuverChange);

    app.use('/api/changeitineraire', ciRouter);
    
  };