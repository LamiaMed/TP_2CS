const db = require("../models");
const Structure = db.structure;

exports.createStructure = async(req, res) =>{
    
    if (!req.body.nomStructure || !req.body.latStructure || !req.body.longStructure) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    const structure = {
        nom: req.body.nom,
        longStructure: req.body.longStructure,
        latStructure: req.body.latStructure,
    };

    try {

        let data;
        data = await Structure.create(structure)
        res.send(data)

    } catch (err) {
        res.status(500).send({
            error: err.message || "Some error occurred while creating the Structure."
        });
    }

};

exports.findStructureByID = async(req, res) =>{
    try{
        const structure = await Structure.findOne({
            where:{
                idStructure : +req.params.id,
            },
        });
        res.status(200).send(structure);
    } catch(err){
        res.status(500).send({
            error: err.message || 
            'Some error occured while retrieving the structure' + 
            req.params.id,
        });
    }
};