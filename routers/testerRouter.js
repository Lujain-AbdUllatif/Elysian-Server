const express = require("express");
const router = express.Router();

//tester handlers imports;
const signup = require("../handlers/tester/signup");
const addTest = require("../handlers/tester/addTest");
const getTests = require("../handlers/tester/getTests");
const signIn = require("../handlers/tester/signin");
const getExaminees = require("../handlers/tester/getExaminees");
const getAllQuestions = require("../handlers/tester/getAllQuestions");
const signIn = require("../handlers/tester/signin");
const addQuestions = require("../handlers/tester/addQuestions");
const addExercise = require("../handlers/tester/addExercise");
const getExercises = require("../handlers/tester/getExercises");

//routes
router.post("/tester/signup", signup);
router.post("/tester/signin", signIn);
router.post("/tester/test", addTest);
router.get("/tester/test", getTests);
router.get("/tester/examinees", getExaminees);
router.get("/tester/questions/:exerciseid", getAllQuestions);
router.post("/tester/addExercise", addQuestions, addExercise);
router.get("/tester/getExercises", getExercises);

module.exports = router;
