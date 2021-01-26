const Test = require("../../database/models/test");

const addTest = async (req, res, next) => {
  const saveTest = new Test({
    name: req.body.name,
    time: req.body.time,
    Upcoming_test: req.body.Upcoming_test,
    exercises: req.idsArray,
  });

  try {
    test = await saveTest.save();

    res.status(200).json(test);
  } catch (err) {
    err.status = 400;
    return next(err);
  }
};
module.exports = addTest;
