import { Candidat } from "../models/candidat.model.js";

const createCandidat = async (req,res) => {

    try{

    const { nom, prenom, email, photo, cin , motdepasse } = req.body;

    if(!nom || !prenom || !email || !cin || !motdepasse )
        return res.status(400).json({
            message: "All fields are required"
        });

    const findCandidat = await Candidat.findOne({cin:cin});
    if(findCandidat)
        return res.status(400).json({message: "Candidat already exists"});

    const createCandidat = await Candidat.create({
        nom:nom,
        prenom:prenom,
        email:email,
        photo:photo,
        cin:cin,
        motdepasse:motdepasse
    });

    res.status(201).json({
        message: "Candidat successfully created",
        createCandidat
    });

    }catch(error) {
        return res.status(500).json({
            message: "Internal Server Error",
            error: error.message
        })
    }
}

const updateCandidat = async (req,res) => {
    try{
        if(Object.keys(req).length===0)
                    return res.status(400).json({
                      message: "No data provided"});
        
                const updateCandidat = await Candidat.findByIdAndUpdate(req.params.id,req.body,{new:true});
                if(!updateCandidat)
                    return res.status(404).json({message: "Candidat not found"});
        
        
                res.status(200).json({
                    message:"Candidat updated successfully",
                    updateCandidat
                });
                
    }catch(error){
        return res.status(500).json({
            message: "Internal Server Error",
            error: error.message
        })
    }
}

const deleteCandidat = async (req,res) => {

        try{
        
                const deleteCandidat = await Candidat.findByIdAndDelete(req.params.id);
                if(!deleteCandidat)
                    return res.status(404).json({message: "Candidat Not found"});
        
            
                res.status(200).json({
                    message:"Candidat deleted successfully",
                    createCandidat
                });
                
    }catch(error){
        return res.status(500).json({
            message: "Internal Server Error",
            error: error.message
        })
    }
}

const getCandidats = async (req,res) => {
    
    try{
        const candidats = await Candidat.find();
        if(!candidats)
            return res.status(400).json({
        message:"Cannot get candidats"
    });

    res.status(200).json({
        message: "All Candidats",
        candidats
    });

    }catch(error){
        return res.status(500).json({
            message:"Internal Server Error",
            error:error.messsage
        })
    }
}

export {
    createCandidat,
    getCandidats,
    updateCandidat,
    deleteCandidat
}