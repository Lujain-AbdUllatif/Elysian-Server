const getExercise = (req, res, next) => {
  res.json(res.exercise);
};
module.exports = getExercise;
