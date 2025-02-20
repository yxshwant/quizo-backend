import { Request, Response } from "express";
import bcrypt from "bcryptjs";

const STATIC_USER = { username: "admin", password: bcrypt.hashSync("password", 10) };

export const login = async (req: Request, res: Response) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ success: false, message: "Username and password are required." });
    }

    if (username !== STATIC_USER.username) {
        return res.status(401).json({ success: false, message: "Invalid credentials." });
    }

    const isMatch = await bcrypt.compare(password, STATIC_USER.password);
    
    if (!isMatch) {
        return res.status(401).json({ success: false, message: "Invalid credentials." });
    }

    res.json({ success: true, message: "Login successful!" });
};
