const db = require("../models");
const Operateur = db.operateur;

const findOperateurByID = async(req, res) =>{
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

// Retrieve all Tutorials from the database.
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
  