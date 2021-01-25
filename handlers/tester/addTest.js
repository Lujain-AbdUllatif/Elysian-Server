const Test = require("../../database/models/test");
const addTest = async (req, res, next) => {
  console.log("body:", req.body);

  const saveTest = new Test({
    name: req.body.name,
    time: req.body.time,
    // exercises: req.body.exercises,
  });

  try {
    test = await saveTest.save();
    console.log("test1:", test);
    res.status(200).json(test);
  } catch (err) {
    err.status = 400;
    // return next(err);
    console.log(err);
  }
};
module.exports = addTest;
