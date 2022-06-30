module.exports = app => {
    const reclamation = require("../controllers/reclamation.controller.js");
  
    var router = require("express").Router();
  
    //créer un itinéraire
    router.post("/", reclamation.createReclamation);
  
    //mettre à jour un itinéraire
    router.post("/getReclamationByID/:id", reclamation.findReclamationByID);

    //récupérer un itineraire par son id
    router.get("/getAllReclamations/", reclamation.getAllReclamations);

    router.get("/getTodayReclamations/", reclamation.findTodayReclamations);


    app.use('/api/reclamation', router);
  };
  