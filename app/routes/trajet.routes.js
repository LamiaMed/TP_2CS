module.exports = app => {
    const trajet = require("../controllers/trajet.controller.js");
    var router = require("express").Router();
    // Create a new Tutorial
    router.post("/", trajet.createTrajet);
    app.use('/api/trajet', router);
  };