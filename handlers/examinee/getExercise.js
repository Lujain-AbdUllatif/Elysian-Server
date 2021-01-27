const Exercise = require("../../database/models/exercise");
const getExercise = (req, res, next) => {
  Exercise.find()
    .then((exercises) => {
      res.json({
        confirmation: "success",
        data: exercises,
      });
    })
    .catch((err) => {
      res.json({
        confirmation: "fail",
        message: err.message,
      });
    });
};
module.exports = getExercise;
