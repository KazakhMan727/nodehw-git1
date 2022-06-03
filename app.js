const express = require("express");
const bodyParser = require("body-parser");
const studentsRouter = require("./router/studentsRouter");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use("/students", studentsRouter);

app.listen(8080);