require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT;
const Connection = require("./database/connection");
Connection();

//const examineeRouter = require("./routers/examineeRouter");
//const testerRouter = require("./routers/testerRouter");

app.use(cors());
app.use(express.json());

app.get("/", function (req, res) {
  res.send("Hello World");
});

//app.all(/examinee/, authExaminee, examineeRouter);
//app.all(/tester/,authTester, testerRouter);

app.listen(PORT, () => console.log(`Server started`));
