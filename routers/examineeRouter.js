const router = require("express").Router();

//examinee handlers imports
const verifyUser = require("../middlewares/auth");
const signup = require("../handlers/examinee/signup");
const signin = require("../handlers/examinee/signin");

//routes
router.post("/examinee/signup", signup);
router.post("/examinee/signin", signin);

module.exports = router;
