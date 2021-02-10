const mongoose = require("mongoose");
const { errorGenerator } = require("../utils");
// Requiring models
const QuestionAnswer = require("../../database/models/questionAnswers");
const {
  examineTestDetail,
} = require("../../database/models/examineTestDetails");
const Examinee = require("../../database/models/examinee");

const answersHandler = (req, res, next) => {
  const { test_status, id: examinee_id } = req.body;
  /**********PART I : UN-DONE TEST**********/
  // First we need to post the answer to the QuestionAnswers model
  if (test_status === "undone") {
    var { test_id, exercise_id, question_id, answers, final_status } = req.body;

    if (test_id && exercise_id && question_id && answers && final_status) {
      const recordSchema = new QuestionAnswer({
        examinee_id,
        test_id,
        exercise_id,
        question_id,
        answers,
        final_status,
      });
      recordSchema
        .save()
        .then((result) => {
          // Then; we need to take the ID of the QuestionAnswer Record and put it in examineeTestDetailsSchema in the answers push it to the array
          const { _id: answer_id } = result;

          examineTestDetail
            .findOne({ test_id: test_id })
            .then((result) => {
              console.log("RESULT:::: ", result);

              result.answers.push(answer_id);
              console.log(result);
              result
                .save()
                .then((re) => {
                  console.log(re);
                })
                .catch((err) => {
                  return next(errorGenerator(500, "Server Error"));
                });
              return res
                .status(201)
                .send({ result, msg: "The answer was saved successfully" });
            })
            .catch((err) => {
              console.log(err);
              return next(errorGenerator(500, "Server Error"));
            });
        })
        .catch((err) => {
          console.log(err);
          next(errorGenerator(500, "Server Error"));
        });
    } else {
      return next(
        errorGenerator(
          400,
          "missing field; inorder to post a question answer all [test_id && exercise_id && question_id && answers && final_status] shold be included in the request!"
        )
      );
    }
  }
  /**********PART II : DONE TEST**********/
  //When the test_status is done, we need to fill the date, score and overall_time in the examineeTestDetails Schema
  else if (test_status === "done") {
    const { score, date, overall_time, test_id } = req.body;
    if (score && date && overall_time && test_id) {
      examineTestDetail
        .findOne({ test_id })
        .then((result) => {
          const { _id: test_details_id } = result;
          result.score = score;
          result.date = date;
          result.overall_time = overall_time;
          result
            .save()
            .then((result) => {
              //Finally we need to place the DONE_examineeTestDetails ID in the done_tests in the examinee model
              const { _id: done_test_id } = result;
              Examinee.updateOne(
                { _id: examinee_id },
                { $push: { done_tests: done_test_id } }
              )
                .then((result) => {
                  res.status(200).send({ msg: "Saved Successfully" });
                })

                .catch((err) => {
                  return next(errorGenerator(500, "Server Error"));
                });
            })
            .catch((err) => {
              return next(errorGenerator(500, "Server Error"));
            });
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      return next(
        errorGenerator(
          400,
          "One of the fields is missing: score, date, overall_time"
        )
      );
    }
  } else {
    return next(errorGenerator(400, "test_status is missing"));
  }
};

module.exports = answersHandler;
