require("dotenv").config();
const SECRET = process.env.SECRET;
const jwt = require("jsonwebtoken");
const { errorGenerator } = require("../handlers/utils");

const verifyUser = (userRole) => {
  return (req, res, next) => {
    const { access_token } = req.headers;
    if (access_token) {
      try {
        const decrypt_access_token = jwt.verify(access_token, SECRET);
        // const { id, role, tests_id } = jwt.verify(access_token, SECRET);
        const { id, role } = jwt.verify(access_token, SECRET);
        if (decrypt_access_token.role === userRole) {
          req.body.id = id;
          req.body.role = role;
          // req.body.tests_id = tests_id;
          return next();
        } else {
          return next(
            errorGenerator(403, `Not ${userRole}, you don't have permission`)
          );
        }
      } catch (error) {
        console.log(error);
        return next(errorGenerator(403, "Invalid access_token"));
      }
    } else {
      return next(
        errorGenerator(400, "access_token should be included in the headers")
      );
    }
  };
};

module.exports = verifyUser;
