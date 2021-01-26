//requiring models
const Exercise = require("../../database/models/exercise");
const Question = require("../../database/models/question");

const getAllQuestions = async (req, res) => {
  const { exerciseid } = req.params;
  try {
    const exercise = await Exercise.findOne({ _id: exerciseid });
    const questions = exercies.questions.map(async (questionId) => {
      return await Question.findOne({ _id: questionId });
    });
    res.status(200).json(questions);
  } catch (err) {
    res.status(500).json("server error");
  }
};

module.exports = getAllQuestions;
