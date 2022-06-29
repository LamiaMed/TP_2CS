module.exports = app => {
    const demandepc = require("../controllers/demandepc.controller.js");
  
    var router = require("express").Router();
  
    //créer une demande de prise en charge
    router.post("/", demandepc.createDemandePC);
  
    //récupérer une demande par son id
    router.get("/findDemandeByID/:id", demandepc.findDemandeByID);

    //récupérer une demande par son assuré
    router.get("/findDemandeByAssure/:id", demandepc.findDemandeByAssure);

    //récupérer toutes les demandes de prise en charge
    router.get("/getAllDemandesPC/", demandepc.getAllDemandesPC);

    //récupérer les demandes à traiter
    router.get("/getDemandesATraiter/", demandepc.getDemandesATraiter);
    
    //récupérer les demandes en cours
    router.get("/getDemandesEnCours/", demandepc.getDemandesEnCours);

    //valider une demande
    router.post("/setDemandeValide/:id", demandepc.setDemandeValide);

    //rejeter une demande
    router.post("/setDemandeRejetee/:id", demandepc.setDemandeRejetee);


    app.use('/api/demandepc', router);
  };
  