import "dotenv/config";
import { GoogleGenAI } from "@google/genai";
import { Session } from "../models/session.model.js";

const gemini = new GoogleGenAI({
    apiKey: process.env.GEMINI_KEY
});



const getAIStatsForFormations = async (req,res) => {

    function extractJSON(text) {
  return text
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();
     }

    try{
    var prompt = 
"You are a statistics expert ,You will output statistics in JSON format which is readable by humans and browser of Formations based on the following : ";

    const sessions = await Session.find()
        .populate("formateur")
        .populate("formation")
        .populate("candidats_inscrits");

        if(!sessions) 
            return res.status(500).json({message:"Failed to Access Sessions in MongoDB"});

    sessions.forEach(
        s => {
           prompt+=`\n Nom de Formation:${s.formation.titre},ID de Session:${s._id},Nombre de candidats:${s.candidats_inscrits.length}`;
        }
    );

const response = await gemini.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt
  });

  console.log(response.text);
  let final_res = extractJSON(response.text);
  final_res = JSON.parse(final_res);

  return res.status(200).json({
    response: final_res
  })

}catch(error){
    return res.status(500).json({error:error.message});
}

}

export {
    getAIStatsForFormations
}
