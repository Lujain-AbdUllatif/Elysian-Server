const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ImagesSchema = require("./schemas/ImagesSchema");

const QuestionAnswerSchema = new Schema({
  examinee_id: { type: String, ref: "examinee" },
  test_id: { type: String, ref: "test" },
  exercise_id: { type: String, ref: "exercise" },
  question_id: { type: String, ref: "question" },
  answers: [[Number]], //The answers should be an array of arrays in every array there and the ImagesSchema of every pic he choose as an answer!!
  final_status: { type: String, enum: ["success", "fail"] },
});

const QuestionAnswersModel = mongoose.model(
  "questionanswer",
  QuestionAnswerSchema
);

module.exports = QuestionAnswersModel;
