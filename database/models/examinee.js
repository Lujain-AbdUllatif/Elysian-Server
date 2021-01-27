const moongose = require("mongoose");
const Schema = moongose.Schema;

//creating Examinee schema
const ExamineeSchema = new Schema({
  name: { type: String },
  email: { type: String, required: true },
  password: { type: String, required: true },
  done_tests: [{ type: moongose.Schema.Types.ObjectId, ref: "test" }],
  Upcoming_test: { type: moongose.Schema.Types.ObjectId, ref: "test" },
});

//creating  Examinee model
const Examinee = moongose.model("examinee", ExamineeSchema);

module.exports = Examinee;
