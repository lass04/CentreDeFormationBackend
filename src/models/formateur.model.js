import mongoose, { Schema } from "mongoose";
import bcrypt  from "bcrypt";

const formateurSchema = new Schema({
      
    nom:{
        type: String,
        required: true,
        trim: true,
        min: 3,
        max: 15
    },
    prenom:{
        type: String,
        required: true,
        trim: true
    },
    telephone:{
        type: Number,
        required: true,
        maxlength: 8,
        minlength: 8
    },
    cin:{
        type: Number,
        required: true,
        minlength:8,
        maxlength:8,
        trim: true,
        unique: true
    },

    photo:{
        type: String,
        required: false
    },
    specialite:{
        type: Array,
        required: true,
        minlength: 8,
        maxlength: 15
    }
    
},
    {
        timestamps :true
    }
)


export const Formateur = mongoose.model("Formateur",formateurSchema);