import express from "express";
import { createQuiz, getQuizzes, getQuizById, updateQuiz, deleteQuiz } from "../controllers/quizController";

const router = express.Router();

router.post("/", createQuiz);
router.get("/", getQuizzes);
router.get("/:id", getQuizById);
router.put("/:id", updateQuiz);
router.delete("/:id", deleteQuiz);

export default router;
