//in this file, we will put all the functions that are reusable, like generating token :)
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const SECRET = process.env.SECRET;

const tokenGenerator = (obj) => {
  const token = jwt.sign(obj, SECRET);
  return token;
};

const errorGenerator = (statusCode, msg) => {
  const err = new Error(msg);
  err.status = statusCode;
  return err;
};

// SPECIFIC QUERIES
const Test = require("../database/models/test");

const getTestQuery = (obj) => {
  return Test.find(obj).populate({
    path: "exercises",
    populate: {
      path: "questions",
      model: "question",
    },
  });
};

const getAllTestsQuery = (arr) => {
  return Test.find({
    _id: {
      $in: arr,
    },
  }).populate({
    path: "exercises",
    populate: {
      path: "questions",
      model: "question",
    },
  });
};

module.exports = {
  tokenGenerator,
  errorGenerator,
  getTestQuery,
  getAllTestsQuery,
};

/*****Shooting Stars*****/
