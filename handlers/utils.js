//in this file, we will put all the functions that are reusable, like generating token :)
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const SECRET = process.env.SECRET;

const tokenGenerator = (obj) => {
  const token = jwt.sign(obj, SECRET);
  return token;
};

const errorGenerator = (statusCode, msg) => {
  const err = new Error(msg);
  err.status = statusCode;
  return err;
};

module.exports = { tokenGenerator, errorGenerator };
