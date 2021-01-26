require("dotenv").config();
const bcrypt = require("bcryptjs");
const TesterModel = require("../../database/models/tester");
const { tokenGenerator } = require("../utils");

const signin = (req, res, next) => {
  const { email, password } = req.body;
  if (email && password) {
    TesterModel.findOne({ email })
      .then((response) => {
        if (response) {
          const { _id: id, password: dbPassword } = response;
          bcrypt.compare(password, dbPassword).then((match) => {
            if (!match) res.status(403).send("Passwords DON'T match");
            const access_token = tokenGenerator({ id, role: "tester" });
            res.status(200).send({ access_token });
          });
        } else {
          res.status(404).send("Email not found");
        }
      })
      .catch((err) => {
        console.log(err);
        const error = new Error("Server Error");
        error.status = 500;
        next(error);
      });
  } else {
    res.status(400).send("Missing email or password");
  }
};

module.exports = signin;
