require("dotenv").config();
const bcrypt = require("bcryptjs");
const TesterModel = require("../../database/models/tester");
const { tokenGenerator, errorGenerator } = require("../utils");

const signin = (req, res, next) => {
  const { email, password } = req.body;
  if (email && password) {
    TesterModel.findOne({ email })
      .then((response) => {
        if (response) {
          const { _id: id, password: dbPassword, tests: tests_id } = response;
          bcrypt.compare(password, dbPassword).then((match) => {
            if (!match)
              return next(errorGenerator(403, "Passwords DON'T match"));
            const access_token = tokenGenerator({
              id,
              role: "tester",
              tests_id,
            });
            return res.status(200).send({ access_token });
          });
        } else {
          return next(errorGenerator(404, "Email not found"));
        }
      })
      .catch((err) => {
        return next(errorGenerator(500, "Server Error"));
      });
  } else {
    return next(errorGenerator(400, "Missing email or password"));
  }
};

module.exports = signin;
