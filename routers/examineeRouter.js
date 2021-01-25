const router = require("express").Router();

//examinee handlers imports
const verifyUser = require("../middlewares/auth");
const signup = require("../handlers/examinee/signup");

//routes
router.post("/examinee/signup", signup);
module.exports = router;
