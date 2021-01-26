const express = require("express");
const router = express.Router();

//tester handlers imports
const signup = require("../handlers/tester/signup");
const addTest = require("../handlers/tester/addTest");
const getTests = require("../handlers/tester/getTests");
const getAllQuestions = require("../handlers/tester/getAllQuestions");
//routes
router.post("/tester/signup", signup);
router.post("/tester/test", addTest);
router.get("/tester/test", getTests);
router.get("/tester/questions/:exerciseid", getAllQuestions);
module.exports = router;
