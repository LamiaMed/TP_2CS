module.exports = app => {
    const operateur = require("../controllers/operateur.controller.js");
  
    var routerOperateur = require("express").Router();
  
    // récupérer un opérateur par son ID
    routerOperateur.get("/", operateur.findOperateurByID);
  
    //récupérer la liste de tous les opérateurs
    routerOperateur.get("/", operateur.getAllOperateurs);

    app.use('/api/operateur', routerOperateur);
  };
  