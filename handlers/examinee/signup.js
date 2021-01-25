const bcrypt = require("bcryptjs");
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
      newExaminee.save().then(() => {
        return res.status(200).json("email created successfully");
      });
    });
};

module.exports = signup;
