import { Session } from "../models/session.model.js";

const createSession = async (req,res) => {
    
    try{

        const { date_debut, date_fin, formateur, formation, candidats_inscrits, description, complet} = req.body;

        if(!date_debut || !date_fin || !formateur || !formation || !description || !complet )
            return res.status(400).json({message: "All fields are required"});

        const createSession = await Session.create({
            date_debut:date_debut,
            date_fin:date_fin,
            formateur:formateur,
            formation:formation,
            candidats_inscrits:candidats_inscrits,
            description:description,
            complet:complet
        })

        res.status(201).json({
            message: "Session created successfully",
            session: createSession
        })

    }catch(error){
        return res.status(500).json({
            message: "Internal Server error",
            error: error.message
        })
    }
}

const deleteSession = async (req,res) => {
    try{
        
        const deleteSession = await Session.findByIdAndDelete(req.params.id);

        if(!deleteSession)
            return res.status(404).json({message:"Session does not exist"});

        res.status(200).json({message:"Session deleted successfully"});

    }catch(error){
        return res.status(500).json({
            message: "Internal Server error",
            error: error.message
        })
    }
}

const updateSession = async (req,res) => {
    
    try{
        if(Object.keys(req).length===0)
            return res.status(400).json({message: "No data provided"});

        const updateSession = await Session.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new:true});

        if(!updateSession)
            return res.status(404).json({message:"Session does not exist"});

        res.status(200).json({
            message: "Session updated sccessfully",
            session: updateSession
        });

    }catch(error){
        return res.status(500).json({
            message: "Internal Server error",
            error: error.message
        })
    }
}

const getSessions = async (req,res) => {
    try{

        const sessions = await Session.find()
        .populate("formateur")
        .populate("formation")
        .populate("candidats_inscrits");

        if(!sessions)
            return res.status(404).json({message:"Cannot get Sessions"});

        res.status(200).json({
            message: "All sessions",
            sessions
        })

    }catch(error){
        return res.status(500).json({
            message: "Internal Server error",
            error: error.message
        })
    }
}

const insertManySessions = async (req,res) => {
    try{
        const insert = Session.insertMany(req.body);
        res.status(201).json({message:"Inserted successfully "});
    }catch(error){
        return res.sendStatus(500);
    }
}

export {
    createSession,
    deleteSession,
    updateSession,
    getSessions,
    insertManySessions
}