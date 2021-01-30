const router = require("express").Router();

//examinee handlers imports
const verifyUser = require("../middlewares/auth");
const signup = require("../handlers/examinee/signup");
const signin = require("../handlers/examinee/signin");
const getTest = require("../handlers/examinee/getTest");
const getExercise = require("../handlers/examinee/getExercise");
const getTestMiddleware = require("../middlewares/getTestMiddleware");

//routes
router.post("/examinee/signup", signup);
router.post("/examinee/signin", signin);
router.get("/examinee/getTest", getTest);
router.get("/examinee/getExercise", getExercise);
router.post("/examinee/test", verifyUser("examinee"), getTestMiddleware);

//routes

module.exports = router;
