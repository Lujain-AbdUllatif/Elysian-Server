const moongose = require("mongoose");
const ImagesSchema = require("./question");
const QuestionSchema = require("./question");
const Schema = moongose.Schema;

const ExerciseSchema = new Schema({
  name: String,
  iamges: [ImagesSchema],
  questions: { type: moongose.Schema.Types.ObjectId, ref: QuestionSchema }, //here, the  ExerciseSchema  should be imported above (when its done)
});
//creating exercise model
const exercise = moongose.model("exercise", ExerciseSchema);

module.exports = exercise;
