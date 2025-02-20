import { Request, Response, NextFunction } from "express";

const STATIC_USER = { username: "admin", password: "password" };

export const authenticateUser = (req: Request, res: Response, next: NextFunction) => {
    const { username, password } = req.body;
    if (username === STATIC_USER.username && password === STATIC_USER.password) {
        next();
    } else {
        res.status(401).json({ success: false, message: "Invalid credentials" });
    }
};
