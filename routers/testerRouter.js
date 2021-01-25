const express = require("express");
const router = express.Router();

//tester handlers imports
const auth = require("../handlers/tester/auth");
const signup = require("../handlers/tester/signup");
const addTest = require("../handlers/tester/addTest");

//routes
router.post("/tester/signup", signup);
router.post("/tester/test", addTest);

module.exports = router;
