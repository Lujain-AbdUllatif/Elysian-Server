const Exercise = require("../../database/models/exercise");

const getAllExercises = (req, res, next) => {
  Exercise.find()
    .then((exercises) => {
      res.json({
        confirmation: "success",
        data: exercises,
      });
    })
    .catch((err) => {
      res.status(400).json({
        confirmation: "fail",
        message: err.message,
      });
    });
};
module.exports = getAllExercises;
