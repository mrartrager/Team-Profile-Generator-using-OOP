const inquirer = require("inquirer");
const fs = require("fs");

const Manager = require("./library/Manager");
const Engineer = require("./library/Engineer");
const Intern = require("./library/Intern");
const htmlPage = require("./generateProfiles"); 
const Employee = require("./library/Employee");


let teamMembers = []

const managerPrompt = () => {
    inquirer.prompt([
        {
          type: "input",
          name: "Name",
          message: "What is the managers name?",
        },
        {
          type: "input",
          name: "ID",
          message: "What is the managers ID?",
        },
        {
          type: "input",
          name: "Email",
          message: "What is the managers email?",
        },
        {
          type: "input",
          name: "Office Number",
          message: "What is the managers office number?",
        },
    ])
    .then((answers) => {
        employeeAnswer.push(answers);
        nextEmployeePrompt();
    })
    .catch((error) => console.log(error));
};

managerPrompt();