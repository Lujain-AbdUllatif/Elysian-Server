const testerRouter = require("express").Router();

//tester handlers imports
const auth = require("../handlers/tester/auth");
const signup = require("../handlers/tester/signup");

//routes
testerRouter.post("/tester/signup", signup);
module.exports = testerRouter;
