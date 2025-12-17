import mongoose, { Schema } from "mongoose";

const sessionSchema = new Schema({

    date_debut:{
        type: String,
        required: true
    },
    date_fin:{
        type: String,
        required: true
    },
    formateur:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Formateur",
        required: true
    },
    formation:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Formation",
        required: true
    },
    candidats_inscrits:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Candidat"
        }
    ],
    description:{
        type: String,
        trim: true,
        required: true
    },
    complet:{
        type: Boolean,
        required: true
    }
    },
{
    timestamps: true
}
);

export const Session = mongoose.model("Session",sessionSchema);