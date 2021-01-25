const bcrypt = require("bcryptjs");
const tokenGenerator = require("../utils").tokenGenerator;
//models imports
const Examinee = require("../../database/models/examinee");

const signup = async (req, res) => {
  const { name, email, pass } = req.body;

  //now I will check if the email is already taken or not
  const found = await Examinee.findOne({ email });
  if (found) {
    return res.status(400).json("email not valid");
  }
  bcrypt
    .genSalt(10)
    .then((salt) => bcrypt.hash(pass, salt))
    .then((hash) => {
      const newExaminee = new Examinee({
        name,
        email,
        password: hash,
      });
      newExaminee.save().then((record) => {
        const token = tokenGenerator({ id: record._id, role: "examinee" });
        const objToSend = {
          token,
          msg: "email created successfully",
        };
        return res.status(200).json(objToSend);

  try {
    const found = await Examinee.findOne({ email });
    if (found) {
      return res.status(400).json("email not valid");
    }
    bcrypt
      .genSalt(10)
      .then((salt) => bcrypt.hash(pass, salt))
      .then((hash) => {
        const newExaminee = new Examinee({
          name,
          email,
          password: hash,
        });
        newExaminee.save().then((record) => {
          const token = tokenGenerator({ id: record._id, role: "examinee" });
          const objToSend = {
            token,
            msg: "email created successfully",
          };
          return res.status(200).json(objToSend);
        });

      });
  } catch (err) {
    res.status(500).json("server error");
  }
};

module.exports = signup;
