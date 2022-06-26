const db = require("../models");
const Trajet = db.trajet;
const Operateur = db.operateur;
const Patient = db.patient;

exports.createPatient = async(req, res) =>{
    
    if (!req.body.nss || !req.body.latDomicile || !req.body.longDomicile) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    const patient = {
        nss: req.body.nss,
        nom: req.body.nom,
        prenom: req.body.prenom,
        date_de_naissance: req.body.date_de_naissance,
        longDomicile: req.body.longDomicile,
        longDomicile: req.body.latDomicile,
    };

    try {

        let data;
        data = await Patient.create(patient)
        res.send(data)

    } catch (err) {
        res.status(500).send({
            error: err.message || "Some error occurred while creating the Patient."
        });
    }

};

exports.findPatientByID = async(req, res) =>{
    try{
        const trajet = await Patient.findOne({
            where:{
                idPatient : +req.params.id,
            },
        });
        res.status(200).send(patient);
    } catch(err){
        res.status(500).send({
            error: err.message || 
            'Some error occured while retrieving the patient' + 
            req.params.id,
        });
    }
};