require("dotenv").config();
const pool = require('./server/config/database')
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT;
const userRouter = require("./server/Api/users/users.router")
const questionRouter = require('./server/Api/Question/question.router')
const answerRouter = require('./server/Api/Answer/answer.router')



app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api/users", userRouter);
app.use("/api/questions", questionRouter);
app.use("/api/answer", answerRouter);



app.listen(port, () => console.log(`listening at http://localhost:${port}`));
