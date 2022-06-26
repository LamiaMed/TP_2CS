module.exports = app => {
    const operateur = require("../controllers/operateur.controller.js");
  
    var routerOperateur = require("express").Router();
  
    routerOperateur.post("/createOperateur/", operateur.createOperateur);

    // récupérer un opérateur par son ID
    routerOperateur.get("/findOperateurByID/:id", operateur.findOperateurByID);
  
    //récupérer la liste de tous les opérateurs
    routerOperateur.get("/getAllOperateurs/", operateur.getAllOperateurs);

    app.use('/api/operateur', routerOperateur);
  };
  