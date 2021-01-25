//in this file, we will put all the functions that are reusable, like generating token :)
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
<<<<<<< HEAD
=======
const SECRET = process.env.SECRET;
>>>>>>> 56cfe08f12c206c4f0968ced71c8ba7c1d437cc9

const tokenGenerator = (obj) => {
  const token = jwt.sign(obj, SECRET);
  return token;
};

module.exports = { tokenGenerator };
