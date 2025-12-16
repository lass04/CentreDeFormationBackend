import { Formateur } from "../models/formateur.model.js";

const createFormateur = async (req,res) => {
    try{

        const { nom, prenom, telephone, cin, photo, specialite } = req.body;

        if(!nom || !prenom || !telephone || !cin || !specialite )
            return res.status(400).json({
              message: "All fields are required"});

        const findFormateur = await Formateur.findOne({cin:cin});
        if(findFormateur)
            return res.status(400).json({message: "Formateur already exists"});

        const createFormateur = await Formateur.create({
            nom:nom,
            prenom:prenom,
            telephone:telephone,
            cin:cin,
            photo:photo,
            specialite: specialite
        });

        res.status(201).json({
            message:"Formateur created successfully",
            createFormateur
        });

    }catch(error){
        return res.status(500).json({
            message: "Internal Server Error",
            error: error.message
        });
    }
}

const updateFormateur = async (req,res) => {
    try{

        if(Object.keys(req).length===0)
            return res.status(400).json({
              message: "No data provided"});

        const updateFormateur = await Formateur.findByIdAndUpdate(req.params.id,req.body,{new:true});
        if(!updateFormateur)
            return res.status(404).json({message: "Formateur not found"});


        res.status(200).json({
            message:"Formateur updated successfully",
            updateFormateur
        });
        
    }catch(error){
        return res.status(500).json({
            message: "Internal Server Error",
            error: error.message
        });
    }
}

const deleteFormateur = async (req,res) => {
    try{

        const { cin } = req.body;

        if(!cin)
            return res.status(400).json({
              message: "No data about Formateur"});

        const deleteFormateur = await Formateur.findByIdAndDelete(req.params.id,req.body,{new:true});
        if(!deleteFormateur)
            return res.status(404).json({message: "Formateur Not found"});

    
        res.status(200).json({
            message:"Formateur deleted successfully",
            createFormateur
        });
        
    }catch(error){
        return res.status(500).json({
            message: "Internal Server Error",
            error: error.message
        });
    }
}

const getFormateurs = async (req,res) => {
    try{

        
        const formateurs = await Formateur.find();
        if(!formateurs)
            return res.status(404).json({message: "Cannot get Formateurs"})

        res.status(200).json({
            message:"All Formateurs",
            formateurs
        });
        
    }catch(error){
        return res.status(500).json({
            message: "Internal Server Error",
            error: error.message
        });
    }
}

export {
    createFormateur,
    updateFormateur,
    getFormateurs,
    deleteFormateur
}