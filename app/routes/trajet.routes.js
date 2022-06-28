module.exports = app => {
    const trajet = require("../controllers/trajet.controller.js");
    var trajetRouter = require("express").Router();
    // Créer un nouveau trajet 
    trajetRouter.post("/", trajet.createTrajet);

    //Trajet douteux
    trajetRouter.get("/setTrajetDouteux/:id", trajet.setTrajetDouteux);

    //Trajet valide
    trajetRouter.get("/setTrajetValide/:id", trajet.setTrajetValide);

    //Récupérer un trajetà partir de l'ID d'un opérateur
    trajetRouter.get("/getTrajetByOperateur/:id", trajet.getTrajetByOperateur);

    //Récupérer un trajetà partir de l'ID d'un patient
    trajetRouter.get("/getTrajetByPatient/:id", trajet.getTrajetByPatient);

    //Récupérer tous les trajets douteux (dont le champs trajetDouteux est à TRUE)
    trajetRouter.get("/getTrajetDouteux/", trajet.getTrajetDouteux);

    //Récupérer tous les trajets valides (dont le champs trajetValide est à TRUE)
    trajetRouter.get("/getTrajetValide/", trajet.getTrajetValide);

    //Mettre à jour un trajet par son ID
    trajetRouter.post("/updateTrajetByID/", trajet.updateTrajetByID);

    //Récupérer la liste de tous les trajets
    trajetRouter.get("/getAllTrajets/", trajet.getAllTrajets);

    //Récupérer un trajet par son ID
    trajetRouter.get("/:id", trajet.findTrajetByID);

    app.use('/api/trajet', trajetRouter);
    
  };