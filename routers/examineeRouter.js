const router = require("express").Router();

//examinee handlers imports
const verifyUser = require("../middlewares/auth");
const signup = require("../handlers/examinee/signup");
const getTest = require("../handlers/examinee/getTest");
const getExercise = require("../handlers/examinee/getExercise");

//routes
router.post("/examinee/signup", signup);
router.get("/examinee/getTest", getTest);
router.get("/examinee/getExercise", getExercise);
const signin = require("../handlers/examinee/signin");

//routes

router.post("/examinee/signin", signin);

module.exports = router;
