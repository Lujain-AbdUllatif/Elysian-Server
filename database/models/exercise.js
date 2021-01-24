const moongose = require("mongoose");
const ImagesSchema = require("./question");
const QuestionSchema = require("./question");
const Schema = moongose.Schema;

const ExerciseSchema = new Schema({
  name: String,
  iamges: [ImagesSchema],
  questions: { type: moongose.Schema.Types.ObjectId, ref: QuestionSchema },
});

const exercise = moongose.model("exercise", ExerciseSchema);

module.exports = exercise;
