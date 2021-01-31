const moongose = require("mongoose");
const Schema = moongose.Schema;
const ImageSchema = require("./schemas/ImagesSchema");

const examineTestDetailsSchema = new Schema({
  test_id: { type: mongoose.Schema.Types.ObjectId, ref: "test" },
  Score: { type: Number },
  date: { type: String },
  overall_time: { type: Number },
  answers: [[ImageSchema]],
});

const examineTestDetail = moongose.model(
  "examineeTestDetail",
  examineTestDetailsSchema
);

module.exports = examineTestDetail;
