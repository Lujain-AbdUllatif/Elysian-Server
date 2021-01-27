const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ImagesSchema = require("./schemas/ImagesSchema");

const QuestionSchema = new Schema({
  question: { type: String, required: true },
  keyword: { type: String, required: true },
  //answers: [ImagesSchema],
  answers: [{ type: String, required: true }],
});

const Question = mongoose.model("question", QuestionSchema);

module.exports = Question;
