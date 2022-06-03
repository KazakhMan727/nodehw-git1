const express = require("express");
const studentsRouter = express.Router();

let studentsArray = [
    {
        name: "student1",
        age: 15
    },

    {
        name: "student2",
        age: 14
    },

    {
        name: "student3",
        age: 21
    },

    {
        name: "student4",
        age: 19
    }
];

studentsRouter.get("/", (request, response) => {
    response.send(studentsArray);
});

studentsRouter.post("/", (request, response) => {
    let {name, age} = request.body;

    let newStudent = {
        name: name,
        age: age
    }

    studentsArray.push(newStudent);

    response.status(200).send("student added");
});

module.exports = studentsRouter;