const Exercise = require("../../database/models/exercise");

const addExercise = async (req, res, next) => {
  const data = req.body.data;
  console.log("im hereee");
  const exercise = new Exercise({
    name: data.name,
    images: data.images,
    questions: req.idsArray,
  });

  try {
    const newExercise = await exercise.save();
    console.log("woooohooo", newExercise);
    res.status(200).json({ msg: "exercise added succesfuly!" });
  } catch (err) {
    console.log(err);
  }
};

module.exports = addExercise;
