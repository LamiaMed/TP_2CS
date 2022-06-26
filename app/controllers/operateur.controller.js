const db = require("../models");
const Operateur = db.operateur;

exports.createOperateur = async(req, res) =>{
    
    if (!req.body.nom || !req.body.longSiege || !req.body.latSiege || !req.body.wilaya) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    const operateur = {

        nom: req.body.nom,
        adresseSiege: req.body.adresseSiege,
        longSiege: req.body.longSiege,
        latSiege: req.body.latSiege,
        wilaya: req.body.wilaya,
        tel: req.body.tel,
        email: req.body.email,
        nbAvertissement: req.body.nbAvertissement,
        nbSignalement: req.body.nbSignalement,
        score: req.body.score,
        serv_jour_ferie: req.body.serv_jour_ferie,
        serv_soir: req.body.serv_soir,
    };


    try {

        let data;
        data = await Operateur.create(operateur)
        res.send(data)

    } catch (err) {
        res.status(500).send({
            error: err.message || "Some error occurred while creating the Operator."
        });
    }

};

exports.findOperateurByID = async(req, res) =>{
    try{
        const operateur = await Operateur.findOne({
            where:{
                idOperateur: +req.params.id,
            },
        });
        res.status(200).send(operateur);
    } catch(err){
        res.status(500).send({
            error: err.message || 
            'Some error occured while retrieving the operator' + 
            req.params.id,
        });
    }
};

exports.getAllOperateurs = (req, res) => {
    var condition = 1 === 1;
  
    Operateur.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Operateurs."
        });
      });
  };
  