const examineeRouter = require("express").Router();

//examinee handlers imports
const auth = require("../handlers/examinee/auth");
const signup = require("../handlers/tester/signup");

//routes
testerRouter.post("/examinee/signup", signup);
module.exports = testerRouter;
