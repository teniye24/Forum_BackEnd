const express = require("express");
const router = express.Router();
// const authMiddleware = require("../midleware/auth");
const {
  createAnswer,
  getAnswersForQuestion,
  getAllAnswer
} = require("./answer.controller");

// Create a new answer for a question
router.post("/create", createAnswer);
//Get all answer 
router.get("/", getAllAnswer)
// Get  answer for a specific question
router.get("/:questionId", getAnswersForQuestion);

module.exports = router;

