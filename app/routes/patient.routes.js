module.exports = app => {
    const patient = require("../controllers/patient.controller.js");
  
    var routerPatient = require("express").Router();
  
    // récupérer un patient par son ID
    routerPatient.get("/", patient.findPatientByID);
  

    app.use('/api/patient', routerPatient);
  };
  