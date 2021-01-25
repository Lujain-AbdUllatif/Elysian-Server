const Test = require("../../database/models/test");
const addTest = async (req, res, next) => {
  let test;
  const saveTest = new Test({
    name: req.body.name,
    time: req.body.time,
    exercises: req.body.exerciseId,
  });
  try {
    test = await saveTest.save();
  } catch (err) {
    err.status = 400;
    return next(err);
  }
  res.test = test;
};
module.exports = addTest;
