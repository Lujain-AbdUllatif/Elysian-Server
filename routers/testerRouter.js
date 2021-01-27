const express = require("express");
const router = express.Router();

//tester handlers imports;
const signup = require("../handlers/tester/signup");

const addTest = require("../handlers/tester/addTest");

const signIn = require("../handlers/tester/signin");
// const addTest = require("../handlers/tester/addTest");

const getTests = require("../handlers/tester/getTests");
const getAllExaminees = require("../handlers/tester/getAllExaminees");
const getAllQuestions = require("../handlers/tester/getAllQuestions");
const addQuestions = require("../handlers/tester/addQuestions");
const addExercise = require("../handlers/tester/addExercise");
const getExercises = require("../handlers/tester/getExercises");

//routes
router.post("/tester/signup", signup);

router.post("/tester/maketest", addTest);
router.post("/tester/signin", handleSignIn);

router.post("/tester/signin", signIn);
// router.post("/tester/test", addTest);

router.get("/tester/test", getTests);
// router.post("/tester/questions", getAllQuestions);
router.post("/tester/examinees", getAllExaminees);
router.get("/tester/questions/:exerciseid", getAllQuestions);
router.post("/tester/addExercise", addQuestions, addExercise);
router.get("/tester/getExercises", getExercises);

module.exports = router;
