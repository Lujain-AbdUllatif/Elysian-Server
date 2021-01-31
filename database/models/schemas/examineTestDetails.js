const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ImageSchema = require("./schemas/ImagesSchema");

const examineTestDetailsSchema = new Schema({
  test_id: { type: mongoose.Schema.Types.ObjectId, ref: "test" },
  Score: { type: Number },
  date: { type: String },
  overall_time: { type: Number },
  answers: [[ImageSchema]],
});

const examineTestDetail = mongoose.model(
  "examineeTestDetail",
  examineTestDetailsSchema
);

module.exports = examineTestDetail;
