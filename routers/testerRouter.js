const express = require("express");
const router = express.Router();

//tester handlers imports;
const signup = require("../handlers/tester/signup");
const addTest = require("../handlers/tester/addTest");
const getTests = require("../handlers/tester/getTests");
const handleSignIn = require("../handlers/tester/signin");

//routes
router.post("/tester/signup", signup);
router.post("/tester/test", addTest);
router.post("/tester/signin", handleSignIn);
router.get("/tester/test", getTests);

module.exports = router;
