const router = require("express").Router();

//examinee handlers imports
const auth = require("../handlers/examinee/auth");
const signup = require("../handlers/examinee/signup");

//routes
router.post("/examinee/signup", signup);
module.exports = router;
