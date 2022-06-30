const db = require("../models");
const Reclamation = db.reclamation;

exports.createReclamation = async(req, res) =>{
    
    if (!req.body.description) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    const reclamation = {
        type: req.body.type,
        reclamateur: req.body.reclamateur,
        nomReclamateur: req.body.nomReclamateur,
        email: req.body.email,
        tel: req.body.tel,
        description: req.body.description,
        typeProbleme: req.body.typeProbleme,
        dateHeureReclamation: req.body.dateHeureReclamation,

    };

    try {

        let data;
        data = await Reclamation.create(reclamation)
        res.send(data)

    } catch (err) {
        res.status(500).send({
            error: err.message || "Some error occurred while creating the Reclamation."
        });
    }

};

exports.findReclamationByID = async(req, res) =>{
    try{
        const reclamation = await Reclamation.findOne({
            where:{
                idReclamation : +req.params.id,
            },
        });
        res.status(200).send(reclamation);
    } catch(err){
        res.status(500).send({
            error: err.message || 
            'Some error occured while retrieving the reclamation' + 
            req.params.id,
        });
    }
};

exports.getAllReclamations = (req, res) => {
    var condition = 1 === 1;
  
    Reclamation.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Reclamations."
        });
      });
  };