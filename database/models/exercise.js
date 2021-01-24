const moongose = require("mongoose");
const ImagesSchema = require("./question");
const Schema = moongose.Schema;

const ExerciseSchema = new Schema({
  name: String,
  images: [ImagesSchema],
  questions: [{ type: moongose.Schema.Types.ObjectId, ref: "question" }],
});

const Exercise = moongose.model("exercise", ExerciseSchema);

module.exports = Exercise;
