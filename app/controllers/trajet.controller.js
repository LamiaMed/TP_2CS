
const db = require("../models");
const Trajet = db.trajet;
const Operateur = db.operateur;
const Patient = db.patient;

var sequelize = require("sequelize");

exports.createTrajet = async(req, res) =>{
    
    if (!req.body.dateDebut || !req.body.heureDebut || !req.body.tempsAttente) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
        return;
      }

    const trajet = {

        dateDebut: req.body.dateDebut,
        heureDebut: req.body.heureDebut,
        idItineraireEmprunte: req.body.idItineraireEmprunte,
        idItinerairePrevu: req.body.idITinerairePrevu,
        tempsAttente: req.body.tempsAttente,
        nbAvertissement: req.body.nbAvertissement,
        nbSignalement: req.body.nbSignalement,
        changementItineraire: req.body.changementItineraire,
        motifChangement: req.body.motifChangement,
        idOperateur: req.body.idOperateur,
        idPatient: req.body.idPatient,
        idChauffeur: req.body.idChauffeur,
        idVehicule: req.body.idVehicule,

    };
    console.log(trajet)

    try {

        let data;
        data = await Trajet.create(trajet)
        res.send(data)

    } catch (err) {
        res.status(500).send({
            error: err.message || "Some error occurred while creating the Trajet."
        });
    }

};

exports.setTrajetDouteux = async(req, res) => {
  const id = req.params.id;
  req.body = {
      trajetDouteux: true,
      trajetValide: false
  }

  Trajet.update(req.body, {
          where: { idTrajet: id }
      })
      .then(num => {
          if (num == 1) {
              res.status(200).send({
                  message: "Trajet est maintenant considéré comme douteux."
              });
          } else {
              res.send({
                  message: `Cannot render trajet douteux with idTrajet=${id}. Maybe Trajet was not found!`
              });
          }
      })
      .catch(err => {
          res.status(500).send({
              message: "Error rendering trajet douteux with idTrajet=" + id
          });
      });
};

exports.setTrajetValide = async(req, res) => {
  const id = req.params.id;

  req.body = {
      trajetDouteux: false,
      trajetValide: true
  }

  Trajet.update(req.body, {
          where: { idTrajet: id }
      })
      .then(num => {
          if (num == 1) {
              res.status(200).send({
                  message: "Trajet est maintenant considéré comme valide."
              });
          } else {
              res.send({
                  message: `Cannot validate trajet with idTrajet=${id}. Maybe Trajet was not found!`
              });
          }
      })
      .catch(err => {
          res.status(500).send({
              message: "Error validating trajet with idTrajet=" + id
          });
      });
};

exports.getTrajetByOperateur = async(req, res) => {
    try {
        const trajet = await Trajet.findAll({
            where: {
                idOperateur: req.params.id,
            },
        });
        res.status(200).send(trajet);
    } catch (err) {
        res.status(500).send({
            error: err.message ||
                'Some error occured while retreiving the trajet'

        });
    }
};

exports.getTrajetByPatient = async(req, res) => {
    try {
        const trajet = await Trajet.findOne({
            where: {
                idPatient: req.params.id,
            },
        });
        res.status(200).send(trajet);
    } catch (err) {
        res.status(500).send({
            error: err.message ||
                'Some error occured while retreiving the trajet'

        });
    }
};

exports.getTrajetDouteux = (req, res) => {
    const title = req.query.title;
    var condition = {trajetDouteux: true};
  
    Trajet.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving trajets douteux."
        });
      });
  };

  exports.getTrajetValide = (req, res) => {
    const title = req.query.title;
    var condition = {trajetValide: true};
  
    Trajet.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving trajets valides."
        });
      });
  };


exports.updateTrajetByID = (req, res) => {
    const id = req.params.id;
  
    Trajet.update(req.body, {
      where: { idTrajet: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Trajet was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Trajet with id=${id}. Maybe Trajet was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Trajet with id=" + id
        });
      });
  };

  exports.getAllTrajets = (req, res) => {
    var condition = 1 === 1
  
    Trajet.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving trajets."
        });
      });
  };

exports.findTrajetByID = async(req, res) =>{
    try{
        const trajet = await Trajet.findAll({
            where:{
                idTrajet: +req.params.id,
            },
        });
        res.status(200).send(trajet);
    } catch(err){
        res.status(500).send({
            error: err.message || 
            'Some error occured while retrieving the trajet' + 
            req.params.id,
        });
    }
};
