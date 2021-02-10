const { errorGenerator, getAllTestsQuery } = require("../utils");

const getAllExercises = (req, res, next) => {
  const { tests_id } = req.body;

  if (tests_id) {
    getAllTestsQuery(tests_id)
      .then((response) => {
        let exercisesArr = [];
        response.map((test) => exercisesArr.push(...test.exercises));
        return exercisesArr;
      })
      .then((exercises) => {
        const ids = [];
        const filteredEx = exercises.filter((ex) => {
          if (ids.indexOf(ex._id) !== -1) return false;
          else {
            ids.push(ex._id);
            return true;
          }
        });
        console.log(filteredEx);
        return res.status(200).send(filteredEx);
      })
      .catch((err) => {
        console.log(err);
        return next(errorGenerator(500, "Server Error"));
      });
  } else {
    return next(errorGenerator(400, "Missing tests_id"));
  }
};

module.exports = getAllExercises;
