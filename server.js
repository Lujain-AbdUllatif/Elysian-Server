require("dotenv").config();
const express = require("express");
const app = express();
const handleError = require("./middlewares/err");
const cors = require("cors");
const PORT = process.env.PORT;
const Connection = require("./database/connection");

const examineeRouter = require("./routers/examineeRouter");
const testerRouter = require("./routers/testerRouter");

app.use(cors());
app.use(express.json({ limit: "25mb" }));

/**************************************/
const verifyUser = require("./middlewares/auth");
app.get("/", verifyUser("tester"), function (req, res) {
  res.status(200).send("Hello World");
});
/**************************************/
app.all(/examinee/, examineeRouter);
app.all(/tester/, testerRouter);

//routes
// app.post("/add-question", async (req, res) => {
//   const question = new Question({
//     question: req.body.question,
//     keyword: req.body.keyword,
//   });

//   try {
//     const found = await question.save();
//     console.log("FOUNDDDD: ", found);
//     res.status(200).json("SAVED!");
//   } catch (err) {
//     console.log("ERROR OCCURED");
//   }
// });

app.listen(PORT, () => {
  Connection();
  console.log(`Server started`);
});

app.use(handleError);
