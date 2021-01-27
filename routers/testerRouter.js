const express = require("express");
const router = express.Router();

//tester handlers imports;
const signup = require("../handlers/tester/signup");
const addTest = require("../handlers/tester/addTest");
const getTests = require("../handlers/tester/getTests");
const signIn = require("../handlers/tester/signin");
const getExaminees = require("../handlers/tester/getExaminees");

//routes
router.post("/tester/signup", signup);
router.post("/tester/signin", signIn);
router.post("/tester/test", addTest);
router.get("/tester/test", getTests);
router.get("/tester/examinees", getExaminees);

module.exports = router;
