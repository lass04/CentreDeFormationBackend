import express from "express";
import formationRouter from "./routes/formation.route.js";
import formateurRouter from "./routes/formateur.route.js";
import sessionRouter from "./routes/session.route.js";
import candidatRouter from "./routes/candidat.route.js";
import cookieParser from "cookie-parser";
import authRouter from "./routes/auth.route.js";
import aiRouter from "./routes/ai.route.js";
import cors from "cors";
import helmet from "helmet";

const app = express();

// Express Middlewares

app.use(express.json());
app.use(cookieParser());
app.use(helmet());

app.use(cors({
 origin:"http://localhost:4200",
 methods: ["GET","POST","PUT","DELETE"],
 allowHeaders: ["Content-Type","Authorization"],
 credentials: true
}) );

// Routes Declarations 

app.use("/api/v2/candidats",candidatRouter);
app.use("/api/v2/formations",formationRouter);
app.use("/api/v2/formateurs",formateurRouter);
app.use("/api/v2/sessions",sessionRouter);
app.use("/auth",authRouter);
app.use("/ai",aiRouter);

export default app;