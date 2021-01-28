const Test = require("../../database/models/test");
const getAllTests = (req, res, next) => {
  // const { id } = req.body;
  Test.find()
    .populate({
      path: "exercises",
      populate: {
        path: "questions",
        model: "question",
      },
    })
    // .populate("exercises")
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
