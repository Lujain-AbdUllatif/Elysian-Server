const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ImagesSchema = new Schema({
  number: Number,
  url: String,
});

const QuestionSchema = new Schema({
  question: String,
  keyword: String,
  answers: [ImagesSchema],
});

const Question = mongoose.model("question", QuestionSchema);

module.exports = Question;
