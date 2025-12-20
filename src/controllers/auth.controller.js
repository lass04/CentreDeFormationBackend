import { createAccessToken, createRefreshToken } from "../utils/jwt.js";
import jwt from "jsonwebtoken";
import { Candidat } from "../models/candidat.model.js";

const login = async (req,res) => {
    const { email, motdepasse } = req.body;

    const findCandidat = await Candidat.findOne({email:email});
    if(!findCandidat)
        return res.sendStatus(401);

    const match = await findCandidat.comparerMotDePasse(motdepasse);
    if(!match)
        return res.sendStatus(401);

    const accessToken = createAccessToken(findCandidat);
    const refreshToken = createRefreshToken(findCandidat);

    findCandidat.refreshToken = refreshToken;
    await findCandidat.save();

    res.cookie("refreshToken",refreshToken,{
        httpOnly:true,
        sameSite:"strict"
    });

    res.json({ accessToken })
}

const logout = async (req,res) => {
    
    const token = req.cookies.refreshToken;
    if(!token)
        return res.sendStatus(204);

    await Candidat.updateOne(
        {refreshToken: token},
        { $unset : {refreshToken : ""}}
    );

    res.clearCookie("refreshToken");
    res.sendStatus(204);
}

const refresh = async (req,res) => {
    
    const token = req.cookies.refreshToken;
    if(!token)
        return res.sendStatus(401);

    try{
        jwt.verify(token,process.env.REFRESH_TOKEN_SECRET);
    }catch(error){
        return res.sendStatus(403);
    }

    const findCandidat = await Candidat.findOne({refreshToken:token});
    if(!findCandidat)
        return res.sendStatus(401);

    const accessToken = createAccessToken(findCandidat);

    res.json({ accessToken });
}

export {
    login,
    logout,
    refresh
}


