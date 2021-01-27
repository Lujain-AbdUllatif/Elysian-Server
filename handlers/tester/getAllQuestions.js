//requiring models
const Exercise = require("../../database/models/exercise");
const Question = require("../../database/models/question");

const getAllQuestions = async (req, res) => {
  const { exerciseid } = req.params;

  try {
    const exercise = await Exercise.findOne({ _id: exerciseid });
    const questionsIdsArr = exercise.questions;
    const questionsRecords = await Question.find({
      _id: {
        $in: questionsIdsArr,
      },
    });
    res.status(200).json(questionsRecords);
  } catch (err) {
    res.status(500).json("server error");
  }
};

module.exports = getAllQuestions;
