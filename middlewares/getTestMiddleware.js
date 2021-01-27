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
  // .then((tests) => {
  //   res.status(201).json({
  //     confirmation: "success",
  //     data: tests,
  //   });
  // })
  // .catch((err) => {
  //   res.status(400).json({
  //     confirmation: "fail",
  //     message: err.message,
  //   });
  // });
};
// MUST GET THE TEST BY THE ID OR THE TESTER THUS WE MUST CHANGE THE DATABASE AND PUT THE TESTER ID IN THE TEST SCHEMA

const getTestMiddleware = (req, res, next) => {
  const { id, role, test_id } = req.body;
  console.log("ROLE >> ", role);
  console.log("ID >> ", id);
  if (role === "tester") {
    if (test_id === "all") {
      getTestQuery({}, res, next);
    } else {
      getTestQuery({ _id: test_id }, res, next);
    }
  } else if (role === "examinee") {
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
