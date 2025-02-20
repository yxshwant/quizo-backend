import express, { Request, Response } from "express";
import { login } from "../controllers/authController";

const router = express.Router();

router.post("/login", async (req: Request, res: Response) => {
    await login(req, res);
});

export default router;
