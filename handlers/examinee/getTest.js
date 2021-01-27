const Test = require("../../database/models/test");

const getTest = (req, res, next) => {
  Test.find(done_testsid).then((test) => {});
  return res.status(200).json(res.test);
};

module.exports = getTest;
