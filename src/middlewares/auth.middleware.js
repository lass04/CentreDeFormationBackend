import jwt from "jsonwebtoken";

export const authenticate = (req, res, next) => {
  const auth = req.headers.authorization;
  if (!auth) return res.status(401).json({message:"You are not authorized "});

  const token = auth.split(" ")[1];

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, payload) => {
    if (err) return res.status(403).json({message:"Server refused to process request"});
    req.user = payload;
    next();
  });
};
