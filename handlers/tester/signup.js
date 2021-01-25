const bcrypt = require("bcryptjs");
const tokenGenerator = require("../utils").tokenGenerator;
//models imports
const Tester = require("../../database/models/tester");

const signup = async (req, res) => {
  const { name, email, pass } = req.body;
  //now I will check if the email is already taken or not
  const found = await Tester.findOne({ email });
  if (found) {
    return res.status(400).json("email not valid");
  }
  bcrypt
    .genSalt(10)
    .then((salt) => bcrypt.hash(pass, salt))
    .then((hash) => {
      const newTester = new Tester({
        name,
        email,
        password: hash,
      });
      newTester.save().then((record) => {
        const token = tokenGenerator({ id: record._id, role: "tester" });
        const objToSend = {
          token,
          msg: "email created successfully",
        };
        return res.status(200).json(objToSend);
      });
    });
};

module.exports = signup;
