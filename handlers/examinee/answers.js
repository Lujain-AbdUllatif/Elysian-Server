const { errorGenerator } = require("../utils");
// Requiring models
const questionAnswer = require("../../database/models/questionAnswers");

const answersHandler = (req, res, next) => {
  const { test_status, id: examinee_id } = req.body;
  /**********PART ONE UN-DONE TEST**********/
  // First we need to post the answer to the questionAnswers model
  if (test_status === "undone") {
    var { test_id, exercise_id, question_id, answers, final_status } = req.body;
    if (test_id && exercise_id && question_id && answers && final_status) {
      console.log("ANSWERSSSS>>>", typeof answers[0][0]);
      const recordSchema = new questionAnswer({
        examinee_id,
        test_id,
        exercise_id,
        question_id,
        answers,
        final_status,
      });
      console.log(recordSchema);
    } else {
      return next(
        errorGenerator(
          400,
          "missing field; inorder to post a question answer all [test_id && exercise_id && question_id && answers && final_status] shold be included in the request!"
        )
      );
    }
  }
  // Then; we need to take the ID of the questionAnswer Record and put it in examineeTestDetailsSchema in the answers push it to the array UPDATE ??
  //   PersonModel.update(
  // { _id: person._id },
  // { $push: { friends: friend } },
  // done
  // );
  /**********PART ONE DONE TEST**********/
  //Then; when the test_status is done, we need to fill the date, score and overall_time in the examineeTestDetails Schema
  else if (test_status === "done") {
    console.log("test_status>", test_status);
  }
  //Finally we need to place the DONE_examineeTestDetails ID in the done_tests in the examinee model
  else {
    return next(errorGenerator(400, "test_status is missing"));
  }

  return res.status(200).send({ msg: "EVERYTHING WILL BE GREAT :)" });
};

module.exports = answersHandler;
