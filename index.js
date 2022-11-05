const inquirer = require("inquirer");
const fs = require("fs");

const Manager = require("./library/Manager");
const Egineer = require("./Egineer");
const Intern = require("./library/Intern");
const htmlPage = require("./"); // link html to page
const { inheritInnerComments } = require("@babel/types");

//questions for employees 
const questions = [
    {
        type:"input",
        name:"name",
        message:"What is employees name?"
    },
    {
        type:"input",
        name:"id",
        message:"What is employees id number?"
    },
    {
        type:"input",
        name:"email",
        message:"What is employees email address?"
    },
    {
        type:"list",
        name:"role",
        message:"What position is this employee filling?",
        choices: ["Manager", "Intern", "Egineer"]
    },
]

//manager specific question here:

managerQuestions = [
    {
        type:"input",
        name: "officeNumber",
        message:"What is the managers office number?"

    }
]

init();