const moongose = require("mongoose");
const Schema = moongose.Schema;
const ImagesSchema = require("./schemas/ImagesSchema");

const ExerciseSchema = new Schema({
  name: String,
  images: [ImagesSchema],
  questions: [{ type: moongose.Schema.Types.ObjectId, ref: "question" }],
});

const Exercise = moongose.model("exercise", ExerciseSchema);

module.exports = Exercise;
