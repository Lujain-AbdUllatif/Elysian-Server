const router = require("express").Router();

//examinee handlers imports
const signup = require("../handlers/examinee/signup");
const signin = require("../handlers/examinee/signin");
const getTestMiddleware = require("../middlewares/getTestMiddleware");
// Verification
const verifyUser = require("../middlewares/auth");

/*******ROUTES*******/
// Sign-up
router.post("/examinee/signup", signup);
// Sign-in
router.post("/examinee/signin", signin);
// Get Test
router.post("/examinee/test", verifyUser("examinee"), getTestMiddleware);

module.exports = router;
