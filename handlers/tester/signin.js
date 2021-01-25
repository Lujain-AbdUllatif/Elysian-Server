require("dotenv").config();
const SECRET = process.env.SECRET;
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const TesterModel = require("../../database/models/tester");
const { tokenGenerator } = require("../utils");

const handleSignIn = (req, res, next) => {
  const { email, password } = req.body;
  if (email && password) {
    TesterModel.findOne({ email })
      .then((response) => {
        if (response) {
          const id = response._id;
          const dbPassword = response.password;
          bcrypt.compare(password, dbPassword).then((match) => {
            if (!match) res.status(403).send("Passwords DON'T match");
            const access_token = tokenGenerator({ id, role: "tester" });
            res.status(200).send(access_token);
          });
        } else {
          const error = new Error("Email not found");
          error.status = 403;
          next(error);
        }
      })
      .catch((err) => {
        const error = new Error("Server Error");
        error.status = 500;
        next(error);
      });
  } else {
    const error = new Error("Missing email or password");
    error.status = 400;
    next(error);
  }
};

module.exports = handleSignIn;
