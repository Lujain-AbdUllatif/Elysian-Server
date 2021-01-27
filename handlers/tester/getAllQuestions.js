//requiring models
const Exercise = require("../../database/models/exercise");
const Question = require("../../database/models/question");

const getAllQuestions = async (req, res, next) => {
  const { questionsIdsArr } = req.body;

  try {
    const questionsRecords = await Question.find({
      _id: {
        $in: questionsIdsArr,
      },
    });
    if (!questionsRecords) {
      const error = new Error({ msg: "not found" });
      error.status(404);
      next(error);
      return;
    }
    return res.status(200).json(questionsRecords);
  } catch (err) {
    next(err);
  }
};

module.exports = getAllQuestions;
