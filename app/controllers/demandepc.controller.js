const db = require("../models");
const DemandePC = db.DemandePC;

exports.createDemandePC = async(req, res) =>{
    
    if (!req.body.idAssure || !req.body.idOperateur || !req.body.idStructure) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    const demandepc = {
        idAssure: req.body.idAssure,
        dateSoumission: req.body.dateSoumission,
        etat: "à traiter",
        validite: false,
        motifRejet: "",
        idOperateur: req.body.idOperateur,
        idStructure: req.body.idStructure,
    };


    try {

        let data;
        data = await DemandePC.create(demandepc)
        res.send(data)

    } catch (err) {
        res.status(500).send({
            error: err.message || "Some error occurred while creating the Demande PC."
        });
    }

};

exports.findDemandeByID = async(req, res) =>{
    try{
        const demandepc = await DemandePC.findOne({
            where:{
                idDemande: +req.params.id,
            },
        });
        res.status(200).send(demandepc);
    } catch(err){
        res.status(500).send({
            error: err.message || 
            'Some error occured while retrieving the DemandePC' + 
            req.params.id,
        });
    }
};

exports.findDemandeByAssure = async(req, res) =>{
    try{
        const demandepc = await DemandePC.findALl({
            where:{
                idAssure: +req.params.id,
            },
        });
        res.status(200).send(demandepc);
    } catch(err){
        res.status(500).send({
            error: err.message || 
            'Some error occured while retrieving the DemandePC for Assure with id' + 
            req.params.id,
        });
    }
};

exports.getAllDemandesPC = (req, res) => {
    var condition = 1 === 1;
  
    DemandePC.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving DemandePC."
        });
      });
  };
  

exports.getDemandesATraiter = async(req, res) => {
    try {
        const demandepc = await DemandePC.findAll({
            where: {
                etat : "à traiter",
            },
        });
        res.status(200).send(demandepc);
    } catch (err) {
        res.status(500).send({
            error: err.message ||
                'Some error occured while retreiving the Demandes PC A Traiter'

        });
    }
};

exports.getDemandesEnCours = async(req, res) => {
    try {
        const demandepc = await DemandePC.findAll({
            where: {
                etat : "en cours",
            },
        });
        res.status(200).send(demandepc);
    } catch (err) {
        res.status(500).send({
            error: err.message ||
                'Some error occured while retreiving the Demandes PC En Cours'

        });
    }
};

exports.setDemandeValide = async(req, res) => {
const id = req.params.id;
req.body = {
    validite: true,
    motifRejet: ""
}

DemandePC.update(req.body, {
    where: { idDemande: id }
})
.then(num => {
    if (num == 1) {
        res.status(200).send({
            message: "Demande est maintenant considérée comme valide."
        });
    } else {
        res.send({
            message: `Cannot validate demandepc with idDemande=${id}. Maybe DemandePC was not found!`
        });
    }
})
.catch(err => {
    res.status(500).send({
        message: "Error validating demandepc with idDemande=" + id
    });
});
};

exports.setDemandeRejetee = async(req, res) => {
    const id = req.params.id;
    req.body = {
        validite: false,
        motifRejet: req.body.motifRejet,
    }
    
    DemandePC.update(req.body, {
        where: { idDemande: id }
    })
    .then(num => {
        if (num == 1) {
            res.status(200).send({
                message: "Demande est maintenant considérée comme rejetée."
            });
        } else {
            res.send({
                message: `Cannot reject demandepc with idDemande=${id}. Maybe DemandePC was not found!`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error rejecting demandepc with idDemande=" + id
        });
    });
    };