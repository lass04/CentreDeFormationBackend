import { Candidat } from "../models/candidat.model.js";

const createCandidat = async (req,res) => {

    try{

    const { nom, prenom, email, photo, cin , motdepasse } = req.body;

    if(!nom || !prenom || !email || !cin || !motdepasse )
        return res.status(400).json({
            message: "All fields are required"
        });

    const findCandidat = Candidat.findOne({cin:cin});
    if(findCandidat)
        return res.status(400).json({message: "Candidat already exists"});

    res.status(201).json({
        message: "Candidat successfully created",
        findCandidat
    });

    }catch(error) {
        return res.status(500).json({
            message: "Internal Server Error",
            error: error.message
        })
    }
}

export {
    createCandidat
}