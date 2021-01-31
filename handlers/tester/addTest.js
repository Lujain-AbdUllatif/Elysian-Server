const Exercise = require("../../database/models/exercise");
const Test = require("../../database/models/test");

const addTest = async (req, res, next) => {
  console.log("hereeeeee: ", req.body);
  const { name, time, exercises } = req.body;
  console.log(name);
  console.log(time);
  console.log(exercises);

  if (name && time && exercises) {
    const saveTest = new Test({
      name,
      time,
      exercises,
    });

    try {
      test = await saveTest.save();
      console.log(test);

      res.status(200).json(test);
    } catch (err) {
      err.status = 400;
      return next(err);
    }
  } else {
    console.log("here here here: ", req.body);
    res.status(400).send("missing fields");
  }
};
module.exports = addTest;
