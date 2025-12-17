import mongoose, { Schema } from "mongoose";

const formationSchema = new Schema({
    titre : {
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
        trim: true
    },
    chargeHoraire:{
        type: Number,
        required: true,
        min:5
    },
    difficulte:{
        type:String,
        required: true
    },
    motCles:{
        type: Array,
        required: true
    },
    pdf:{
        type: String
    }

},
{
    timestamps: true
})

export const Formation = mongoose.model("Formation",formationSchema);