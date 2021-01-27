const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ImagesSchema = require("./schemas/ImagesSchema");

const ExerciseSchema = new Schema({
  name: String,
  images: [{ type: ImagesSchema, required: true }],
  questions: [{ type: mongoose.Schema.Types.ObjectId, ref: "question" }],
});

const Exercise = mongoose.model("exercise", ExerciseSchema);

module.exports = Exercise;
