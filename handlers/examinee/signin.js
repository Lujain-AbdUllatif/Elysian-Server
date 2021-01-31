require("dotenv").config();
const ExamineeModel = require("../../database/models/examinee");
const bcrypt = require("bcryptjs");
const { tokenGenerator, errorGenerator } = require("../utils");

const signin = (req, res, next) => {
  const { email, password } = req.body;
  if (email && password) {
    ExamineeModel.findOne({ email })
      .then((response) => {
        if (response) {
          const { _id: id, password: dbPassword, upcoming_test } = response;
          bcrypt.compare(password, dbPassword).then((match) => {
            if (!match)
              if (!match)
                return next(errorGenerator(403, "Passwords DON'T match"));
            const access_token = tokenGenerator({
              id,
              role: "examinee",
            });
            res.status(200).send({ access_token, upcoming_test });
          });
        } else {
          return next(errorGenerator(404, "Email not found"));
        }
      })
      .catch((err) => {
        console.log(err);
        return next(errorGenerator(500, "Server Error"));
      });
  } else {
    return next(errorGenerator(400, "Missing email or password"));
  }
};

module.exports = signin;
