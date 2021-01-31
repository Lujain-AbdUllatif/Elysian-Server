const { errorGenerator } = require("../handlers/utils");
const Test = require("../database/models/test");

const getTestQuery = (obj, res, next) => {
  return Test.find(obj)
    .populate({
      path: "exercises",
      populate: {
        path: "questions",
        model: "question",
      },
    })
    .then((response) => {
      return res.status(200).send({ data: response });
    })
    .catch((err) => {
      console.log(err);
      return next(errorGenerator(400, "No Such test"));
    });
};

const getAllTestsQuery = (arr, res, next) => {
  return Test.find({
    _id: {
      $in: arr,
    },
  })
    .populate({
      path: "exercises",
      populate: {
        path: "questions",
        model: "question",
      },
    })
    .then((response) => {
      return res.status(200).send({ data: response });
    })
    .catch((err) => {
      console.log(err);
      return next(errorGenerator(400, "No Such test"));
    });
};

const getTestMiddleware = (req, res, next) => {
  const { id, role } = req.body;
  if (role === "tester") {
    const { tests_id } = req.body;
    if (tests_id) {
      getAllTestsQuery(tests_id, res, next);
    } else {
      next(errorGenerator(400, "Missing tests_id"));
    }
  } else if (role === "examinee") {
    const { test_id } = req.body;
    if (test_id) {
      try {
        getTestQuery({ _id: test_id }, res, next);
      } catch (error) {
        return next(errorGenerator(500, "Server Error"));
      }
    } else {
      return next(errorGenerator(400, "Missing test_id"));
    }
  } else {
    return next(errorGenerator(401, "No permission"));
  }
};

module.exports = getTestMiddleware;
