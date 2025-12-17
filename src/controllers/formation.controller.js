import { Formation } from "../models/formation.model.js";

const createFormation = async (req,res) => {
    try{
        
        const { titre, description, chargeHoraire, difficulte, motCles, pdf} = req.body;

        if(!titre || !description || !chargeHoraire || !difficulte || ! motCles)
            return res.status(400).json({message: "All fields are required"});

        const findFormation = await Formation.findOne({titre:titre});
        if(findFormation)
            return res.status(400).json({message: "Formation already exists"});
        
        const createFormation = await Formation.create({
            titre:titre,
            description:description,
            chargeHoraire:chargeHoraire,
            difficulte:difficulte,
            motCles:motCles,
            pdf:pdf
        });

        res.status(201).json({
            message: "Formation created successfully",
            formation: createFormation
        })

    }catch(error){
        return res.status(500).json({
            message: "Internal Server error",
            error: error.message
        })
    }
}

const deleteFormation = async (req,res) => {
    try{
        const deleteFormation = await Formation.findByIdAndDelete(req.params.id);
        if(!deleteFormation)
            return res.status(404).json({message:"Formation does not exist"});

        res.status(200).json({message: "Formation deleted successfully"});

    }catch(error){
        return res.status(500).json({
            message: "Internal Server error",
            error: error.message
        })
    }
}

const updateFormation = async (req,res) => {
    try{
        
        if(Object.keys(req).length===0)
            return res.status(400).json({message: "No data provided"});

        const updateFormation = await Formation.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new:true}
        );

        if(!updateFormation)
            return res.status(404).json({message:"Formation does not exist"});

        res.status(200).json({
            message: "Formation updated successfully",
            formation: updateFormation
        })

    }catch(error){
        return res.status(500).json({
            message: "Internal Server error",
            error: error.message
        })
    }
}

const getFormations = async (req,res) => {
    try{
        const formations = await Formation.find();
        if(!formations)
            return res.status(404).json({
        message: "Cannot get Formations"});

        res.status(200).json({
            message: "All formations",
            formations    
        })

    }catch(error){
        return res.status(500).json({
            message: "Internal Server error",
            error: error.message
        })
    }
}

export {
    createFormation,
    deleteFormation,
    updateFormation,
    getFormations
}