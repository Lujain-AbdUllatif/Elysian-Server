const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const examineTestDetailsSchema = new Schema({
  test_id: { type: mongoose.Schema.Types.ObjectId, ref: "test" },
  Score: { type: Number },
  date: { type: String }, // There is a Date type; who changed it ?????
  overall_time: { type: Number },
  answers: [{ type: mongoose.Schema.Types.ObjectId, ref: "questionanswer" }],
});

const examineTestDetail = mongoose.model(
  "examineeTestDetail",
  examineTestDetailsSchema
);

module.exports = { examineTestDetail, examineTestDetailsSchema };
