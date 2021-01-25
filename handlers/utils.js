//in this file, we will put all the functions that are reusable, like generating token :)
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const SECRET = "dsknfasdnlkvda";

const tokenGenerator = (obj) => {
  const token = jwt.sign(obj, SECRET);
  return token;
};

module.exports = { tokenGenerator };
