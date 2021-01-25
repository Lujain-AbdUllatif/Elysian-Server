const Test = require("../../database/models/test");
const getTests = (req, res, next) => {
  Test.find()
    .then((tests) => {
      res.json({
        confirmation: "success",
        data: tests,
      });
    })
    .catch((err) => {
      res.json({
        confirmation: "fail",
        message: err.message,
      });
    });
};

module.exports = getTests;
