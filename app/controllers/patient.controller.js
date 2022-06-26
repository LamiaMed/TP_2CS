const db = require("../models");
const Trajet = db.trajet;
const Operateur = db.operateur;
const Patient = db.patient;

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