const db = require('../models');
const Chauffeur = db.chauffeur;

var sequelize = require("sequelize");

exports.createItineraire = async(req, res) =>{
    
    if (!req.body.heureDebut || !req.body.tempsEstime || !req.body.idTrajet) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    const itineraire = {

        heureDebut: req.body.heureDebut,
        tempsEstime: req.body.tempsEstime,
        longSiege: req.body.longSiege,
        latSiege: req.body.latSiege,
        longDomicilePatient: req.body.longDomicilePatient,
        latDomicilePatient: req.body.latDomicilePatient,
        longStruct: req.body.longStruct,
        latStruct: req.body.latStruct,
        nbKilometres: req.body.nbKilometres,
        idTrajet: req.body.idTrajet,
    };

    try {

        let data;
        data = await Itineraire.create(itineraire)
        res.send(data)

    } catch (err) {
        res.status(500).send({
            error: err.message || "Some error occurred while creating the Itinerary."
        });
    }

};

exports.getItineraireByID = async(req, res) =>{
  try{
      const itineraire = await Itineraire.findOne({
          where:{
              idItineraire: +req.params.id,
          },
      });
      res.status(200).send(itineraire);
  } catch(err){
      res.status(500).send({
          error: err.message || 
          'Some error occured while retrieving the itinerary' + 
          req.params.id,
      });
  }
};

exports.updateItineraireByID = (req, res) => {
    const id = req.params.id;
  
    Itineraire.update(req.body, {
      where: { idItineraire: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Itineraire was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Itineraire with id=${id}. Maybe Itineraire was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Itineraire with id=" + id
        });
      });
  };