const express = require("express");
const router = express.Router();
// const auth = require("../midleware/auth");
const { createQuestion, getQuestions } = require("./question.controller");


// Create a new question
router.post("/create", createQuestion);

// Get a question by ID
// router.get("/getbyid", auth, getQuestionById);

// Get all questions
router.get("/all", getQuestions);

module.exports = router;
