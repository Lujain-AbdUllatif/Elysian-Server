const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//creating tester schema
const TesterSchema = new Schema({
  name: String,
  email: String,
  password: String,
  tests: [{ type: mongoose.Schema.Types.ObjectId, ref: "test" }],
  examinees: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "examinee",
    },
  ],
});

//creating tester model
const Tester = mongoose.model("tester", TesterSchema);

module.exports = Tester;
