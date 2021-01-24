const bcrypt = require("bcryptjs");
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
      console.log("HAAAAAAAAAAASH: ", hash);
      const newTester = new Tester({
        name,
        email,
        pass: hash,
      });
      newTester.save().then(() => {
        return res.status(200).json("email created successfully");
      });
    });
};

module.exports = signup;
