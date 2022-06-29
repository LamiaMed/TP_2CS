module.exports = app => {
    const structure = require("../controllers/structure.controller.js");
  
    var router = require("express").Router();
  
    // récupérer un patient par son ID
    router.post("/createStruct/", structure.createStructure);
    
    // récupérer un patient par son ID
    router.get("/findStructureByID/:id", structure.findStructureByID);
  
    app.use('/api/structure', router);
  };
  