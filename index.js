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
          message: "Please enter the Managers name.",
        },
        {
          type: "input",
          name: "ID",
          message: "Please enter the Managers ID number.",
        },
        {
          type: "input",
          name: "Email",
          message: "Please enter the Managers email address.",
        },
        {
          type: "input",
          name: "Office Number",
          message: "Please enter the Managers office number.",
        },
    ])
    .then((answers) => {
        employeeAnswer.push(answers);
        nextEmployeePrompt();
    })
    .catch((error) => console.log(error));
};
managerPrompt();


const engineerPrompt = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Please enter the Engineers name.",
        },
        {
            type: "input",
            name: "name",
            message: "Please enter the Engineers ID number.",
        },
        {
            type: "input",
            name: "email",
            message: "Please enter the Engineers email address.",
        },
        {
            type: "input",
            name: "github",
            message: "Please enter the Engineers GitHub.",
        },
    ])
    .then((answers) => {
        employeeAnswer.push(answers);
        nextEmployeePrompt();
    })
    .catch((error) => console.log(error));
}
engineerPrompt()


const internPrompt = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Please enter the Interns name.",
        },
        {
            type: "input",
            name: "ID",
            message: "Please enter the Interns ID."
        },
        {
            type: "input",
            name: "email",
            message: "Please enter the Interns email.",
        },
        {
            type: "input",
            name: "University",
            message: "Please enter the Interns University",
        },
    ])
    .then((answers) => {
        employeeAnswers.push(answers);
        nextEmployeePrompt();
    })
    .catch((error) => console.log(error));
};
internPrompt();



