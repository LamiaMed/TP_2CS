import { where } from 'sequelize';

const db = require("../models");
const Trajet = db.trajet;
const Operateur = db.operateur;
const Patient = db.patient;

var sequelize = require("sequelize");

const createTrajet = async(req, res) =>{

    const trajet = {

        dateDebut: req.body.dateDebut,
        heureDebut: req.body.heureDebut,
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

const getTrajetByOperateur = async(req, res) => {
    try {
        const trajet = await Trajet.findOne({
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
}


