const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ImagesSchema = new Schema({
  number: Number,
  url: String,
});

module.exports = ImagesSchema;
