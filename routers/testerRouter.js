const express = require("express");
const router = express.Router();
const addTest = require("../handlers/tester/addTest");
router.post("/tester/test", authTester, addTest);

module.exports = router;
