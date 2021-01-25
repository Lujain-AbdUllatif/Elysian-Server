const moongose = require("mongoose");
const Schema = moongose.Schema;
const ImageSchema = require("./schemas/ImagesSchema");

const examineTestDetailsSchema = new Schema({
  test_id: { type: mongoose.Schema.Types.ObjectId, ref: TestSchema },
  Score: { type: Number },
  date: { type: String },
  overall_time: { type: Number },
  answers: [{ type: [{ ImageSchema }] }],
});

const examineTestDetails = moongose.model(
  "examineeTestDetails",
  examineTestDetailsSchema
);
module.exports = examineTestDetails;
