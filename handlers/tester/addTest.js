const Test = require("../../database/models/test");

const addTest = async (req, res, next) => {
  const { name, time, exercises } = req.body;
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
    res.status(400).send("missing fields");
  }
};
module.exports = addTest;
