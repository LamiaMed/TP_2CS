const db = require('../models');
const Chauffeur = db.chauffeur;

var sequelize = require("sequelize");

exports.createChauffeur = async(req, res) =>{
    
    if (!req.body.idOperateur || !req.body.nom || !req.body.prenom) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    const chauffeur = {

        nom: req.body.nom,
        prenom: req.body.prenom,
        idOperateur: req.body.idOperateur,
    };

    try {

        let data;
        data = await Chauffeur.create(chauffeur)
        res.send(data)

    } catch (err) {
        res.status(500).send({
            error: err.message || "Some error occurred while creating Chauffeur."
        });
    }

};

exports.getChauffeurByID = async(req, res) =>{
  try{
      const chauffeur = await Chauffeur.findOne({
          where:{
              idChauffeur: +req.params.id,
          },
      });
      res.status(200).send(chauffeur);
  } catch(err){
      res.status(500).send({
          error: err.message || 
          'Some error occured while retrieving the chauffeur with id' + 
          req.params.id,
      });
  }
};

exports.getChauffeurByOperateur = async(req, res) =>{
  try{
      const chauffeur = await Chauffeur.findAll({
          where:{
              idOperateur: +req.params.id,
          },
      });
      res.status(200).send(chauffeur);
  } catch(err){
      res.status(500).send({
          error: err.message || 
          'Some error occured while retrieving the chauffeur with idOperateur' + 
          req.params.id,
      });
  }
};
