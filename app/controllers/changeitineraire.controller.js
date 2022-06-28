const db = require('../models');
const ChangeItineraire = db.changeitineraire;

var sequelize = require("sequelize");
const { changeitineraire } = require('../models');

exports.createChangeItineraire = async(req, res) =>{
    
    if (!req.body.heureDemande || !req.body.motifChangement || !req.body.idTrajet) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    const changeitineraire = {
        heureDemande: req.body.heureDemande,
        approuve: false,
        motifChangement: req.body.motifChangement,
        idTrajet: req.body.idTrajet,
    };

    try {

        let data;
        data = await ChangeItineraire.create(changeitineraire)
        res.send(data)

    } catch (err) {
        res.status(500).send({
            error: err.message || "Some error occurred while creating Change Itinerary."
        });
    }

};

exports.getChangeItineraireByID = async(req, res) =>{
    try{
        const changeitineraire = await changeitineraire.findOne({
            where:{
                idChangementItineraire: +req.params.id,
            },
        });
        res.status(200).send(changeitineraire);
    } catch(err){
        res.status(500).send({
            error: err.message || 
            'Some error occured while retrieving changement itineraire' + 
            req.params.id,
        });
    }
  };

exports.approuverChange = async(req, res) => {
    const id = req.params.id;
    req.body = {
        approuve: true,
    }
  
    ChangeItineraire.update(req.body, {
            where: { idChangementItineraire: id }
        })
        .then(num => {
            if (num == 1) {
                res.status(200).send({
                    message: "Changement d'itineraire approuvé."
                });
            } else {
                res.send({
                    message: `impossible d'approuver changement itineraire avec idChangementItineraire=${id}. Maybe ChangeItineraire was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error rendering changeItineraire with idChangementItineraire=" + id
            });
        });
  };