require("dotenv").config();
const SECRET = process.env.SECRET;
const jwt = require("jsonwebtoken");

const verifyUser = (userRole) => {
  return (req, res, next) => {
    const { access_token } = req.headers;
    console.log(access_token);
    if (access_token) {
      try {
        const { id, role } = jwt.verify(access_token, SECRET);
        if (role === userRole) {
          req.body.id = id;
          next();
        } else {
          const error = new Error(
            `Not a ${userRole}, you don't have permission`
          );
          error.status = 403;
          next(error);
        }
      } catch (error) {
        error.message = "Invalid access_token";
        error.status = 403;
        next(error);
      }
    } else {
      const error = new Error("access_token should be included in the headers");
      error.status = 400;
      next(error);
    }
  };
};

module.exports = verifyUser;
