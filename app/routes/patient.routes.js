module.exports = app => {
    const patient = require("../controllers/patient.controller.js");
  
    var routerPatient = require("express").Router();
  
    routerPatient.get("/createPatient/", patient.createPatient);
    
    // récupérer un patient par son ID
    routerPatient.get("/findPatientByID/:id", patient.findPatientByID);
  
    app.use('/api/patient', routerPatient);
  };
  