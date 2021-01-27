// Here I will get an array of examinees' Id and I will return the examinees details
const mongoose = require("mongoose");
const ExamineesModel = require("../../database/models/examinee");
const { errorGenerator } = require("../utils");

const getAllExaminees = async (req, res, next) => {
  const { examinees_ids } = req.body;
  if (!Array.isArray(examinees_ids)) {
    return next(
      errorGenerator(
        400,
        "examinees_ids should be send as an array in an object"
      )
    );
  }
  try {
    const examineesObj = await ExamineesModel.find({
      _id: {
        $in: examinees_ids,
      },
    })
      .populate({ path: "done_tests" })
      .select({ password: 0 });
    return res.status(200).json(examineesObj);
  } catch (error) {
    console.log(error);
    return next(errorGenerator(400, "Server Error"));
  }
};

module.exports = getAllExaminees;
