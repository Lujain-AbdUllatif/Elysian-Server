const bcrypt = require("bcryptjs");
const tokenGenerator = require("../utils").tokenGenerator;
//models imports
const Tester = require("../../database/models/tester");

const signup = async (req, res) => {
  const { name, email, pass } = req.body;
  try {
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
            access_token: token,
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
