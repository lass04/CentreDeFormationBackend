import rateLimit from "express-rate-limit";

export const authLimiter = rateLimit({
    WindowMs: 15 * 60 * 1000,
    max : 100,
    message : {
        message : "Too Many requests" 
    }
});

export const aiLimiter = rateLimit({
    WindowMs: 1000 * 60,
    max : 3,
    message: { message : "Too Many Requests"}
});