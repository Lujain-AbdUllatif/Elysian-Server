const Test = require("../../database/models/test");
const getAllTests = (req, res, next) => {
  Test.find()
    .then((tests) => {
      res.status(201).json({
        confirmation: "success",
        data: tests,
      });
    })
    .catch((err) => {
      res.status(400).json({
        confirmation: "fail",
        message: err.message,
      });
    });
};

module.exports = getAllTests;
