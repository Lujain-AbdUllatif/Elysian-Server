const Question = require("../../database/models/question");

const addQuestions = async (req, res, next) => {
  const questions = req.body.data.questions;
  //console.log("===>>>", questions);
  try {
    const newQuestions = await Promise.all(
      questions.map(async (q) => {
        const ques = new Question({
          question: q.question,
          keyword: q.keyword,
          answers: q.answers,
        });
        try {
          const newQuestion = await ques.save();
          // console.log("===>", newQuestion);
          return newQuestion;
        } catch (err) {
          console.log(err);
        }
      })
    );
    const id_arr = [];
    newQuestions.map((item) => id_arr.push(item._id));
    req.idsArray = id_arr;
    next();
  } catch (err) {
    console.log(err);
  }
};

module.exports = addQuestions;
