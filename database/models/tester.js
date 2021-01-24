const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//creating tester schema
const TesterSchema = new Schema({
  name: String,
  email: String,
  password: String,
  Tests: { type: mongoose.Schema.Types.ObjectId, ref: TestSchema }, //here, the TestSchema should be imported above (when its done)
  examinees: {
    type: mongoose.Schema.Types.ObjectId,
    ref: ExamineeSchema,
  } /*here, the ExamineeSchema should be imported above (when its done)*/,
});

//creating tester model
const Tester = mongoose.model("tester", TesterSchema);

module.exports = Tester;
