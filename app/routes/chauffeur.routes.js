module.exports = app => {
    const chauffeur = require("../controllers/chauffeur.controller.js");
  
    var router = require("express").Router();
  
    //créer un itinéraire
    router.post("/", chauffeur.createChauffeur);
  
    //mettre à jour un itinéraire
    router.post("/getChauffeurByID/:id", chauffeur.getChauffeurByID);

    //récupérer un itineraire par son id
    router.get("/getChauffeurByOperateur/:id", chauffeur.getChauffeurByOperateur);

    app.use('/api/chauffeur', router);
  };
  