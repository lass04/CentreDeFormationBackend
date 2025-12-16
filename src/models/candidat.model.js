import mongoose, { Schema } from "mongoose";
import bcrypt  from "bcrypt";

const candidatSchema = new Schema({
      
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
    email:{
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    cin:{
        type: Number,
        required: true,
        min:8,
        max:8,
        trim: true,
        unique: true
    },

    photo:{
        type: String,
        required: false
    },
    motdepasse:{
        type: String,
        required: true,
        minlength: 8,
        maxlength: 15
    }
    
},
    {
        timestamps :true
    }
)

candidatSchema.pre("save",async function(){
    if(!this.isModified('motdepasse'))
        return;
    this.motdepasse = await bcrypt.hash(this.motdepasse,10);
})

candidatSchema.methods.comparerMotdePasse = async function(password){
    return await bcrypt.compare(password,this.motdepasse);
}

export const Candidat = mongoose.model("Candidat",candidatSchema);