const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ImagesSchema = require("./schemas/ImagesSchema");

const QuestionAnswerSchema = new Schema({
  examinee_id: { type: mongoose.Schema.Types.ObjectId, ref: "examinee" },
  test_id: { type: mongoose.Schema.Types.ObjectId, ref: "test" },
  exercise_id: { type: mongoose.Schema.Types.ObjectId, ref: "exercise" },
  question_id: { type: mongoose.Schema.Types.ObjectId, ref: "question" },
  answers: [[Number]],
  final_status: { type: String, enum: ["success", "fail"] },
});

const QuestionAnswersModel = mongoose.model(
  "questionanswer",
  QuestionAnswerSchema
);

module.exports = QuestionAnswersModel;
