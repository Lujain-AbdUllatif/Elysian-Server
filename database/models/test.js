const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//creating test schema
const TestSchema = new Schema({
  name: String,
  time: Number,
  Upcoming_test: String,
  exercises: [{ type: mongoose.Schema.Types.ObjectId, ref: "exercise" }],
});

//creating test model
const Test = mongoose.model("test", TestSchema);

module.exports = Test;
