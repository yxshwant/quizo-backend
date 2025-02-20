import { Request, Response } from "express";
import db from "../config/db";
import { Quiz } from "../models/quizModel";

export const createQuiz = (req: Request, res: Response) => {
    const { title, description }: Quiz = req.body;
    db.query("INSERT INTO quizzes (title, description, teacher_id) VALUES (?, ?, 1)", 
             [title, description], (err) => {
        if (err) return res.status(500).json(err);
        res.json({ success: true, message: "Quiz created" });
    });
};

export const getQuizzes = (req: Request, res: Response) => {
    db.query("SELECT * FROM quizzes", (err, results) => {
        if (err) return res.status(500).json(err);
        res.json(results);
    });
};

export const getQuizById = (req: Request, res: Response) => {
    db.query("SELECT * FROM quizzes WHERE id = ?", [req.params.id], (err, results: any) => {
        if (err) return res.status(500).json(err);
        res.json(results[0]);
    });
};

export const updateQuiz = (req: Request, res: Response) => {
    const { title, description }: Quiz = req.body;
    db.query("UPDATE quizzes SET title = ?, description = ? WHERE id = ?", 
             [title, description, req.params.id], (err) => {
        if (err) return res.status(500).json(err);
        res.json({ success: true, message: "Quiz updated" });
    });
};

export const deleteQuiz = (req: Request, res: Response) => {
    db.query("DELETE FROM quizzes WHERE id = ?", [req.params.id], (err) => {
        if (err) return res.status(500).json(err);
        res.json({ success: true, message: "Quiz deleted" });
    });
};
