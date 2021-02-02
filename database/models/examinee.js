const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//creating Examinee schema
const ExamineeSchema = new Schema({
  name: { type: String },
  email: { type: String, required: true },
  password: { type: String, required: true },
  done_tests: [
    { type: mongoose.Schema.Types.ObjectId, ref: "examineetestdetail" },
  ],
  upcoming_test: { type: mongoose.Schema.Types.ObjectId, ref: "test" },
});

//creating  Examinee model
const Examinee = mongoose.model("examinee", ExamineeSchema);

module.exports = Examinee;
