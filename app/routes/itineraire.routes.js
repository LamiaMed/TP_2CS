module.exports = app => {
    const itineraire = require("../controllers/itineraire.controller.js");
  
    var routerItineraire = require("express").Router();
  
    //créer un itinéraire
    routerItineraire.post("/", itineraire.createItineraire);
  
    //mettre à jour un itinéraire
    routerItineraire.post("/", itineraire.updateItineraireByID);

    //récupérer un itineraire par son id
    routerItineraire.get("/", itineraire.getItineraireByID);

    app.use('/api/itineraire', routerItineraire);
  };
  