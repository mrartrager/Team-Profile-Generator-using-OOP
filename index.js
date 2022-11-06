const inquirer = require("inquirer");
const fs = require("fs");

const Manager = require("./library/Manager");
const Engineer = require("./library/Engineer");
const Intern = require("./library/Intern");
// const htmlPage = require(""); 
const Employee = require("./library/Employee");


let employeeAnswer = []

const managerPrompt = () => {
    inquirer.prompt([
        {
          type: "input",
          name: "Name",
          message: "Please enter the Managers name:",
        },
        {
          type: "input",
          name: "ID",
          message: "Please enter the Managers ID number:",
        },
        {
          type: "input",
          name: "Email",
          message: "Please enter the Managers email address:",
        },
        {
          type: "input",
          name: "Office Number",
          message: "Please enter the Managers office number:",
        },
    ])
    .then((answers) => {
        employeeAnswer.push(answers);
        addEmployeePrompt();
    })
    .catch((error) => console.log(error));
};
 
const engineerPrompt = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Please enter the Engineers name:",
        },
        {
            type: "input",
            name: "name",
            message: "Please enter the Engineers ID number:",
        },
        {
            type: "input",
            name: "email",
            message: "Please enter the Engineers email address:",
        },
        {
            type: "input",
            name: "github",
            message: "Please enter the Engineers GitHub:",
        },
    ])
    .then((answers) => {
        employeeAnswer.push(answers);
        addEmployeePrompt();
    })
    .catch((error) => console.log(error));
}
// engineerPrompt() will call later in the addEmployeePrompt function 


const internPrompt = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Please enter the Interns name:",
        },
        {
            type: "input",
            name: "ID",
            message: "Please enter the Interns ID:"
        },
        {
            type: "input",
            name: "email",
            message: "Please enter the Interns email:",
        },
        {
            type: "input",
            name: "University",
            message: "Please enter the Interns University:",
        },
    ])
    .then((answers) => {
        employeeAnswer.push(answers);
        addEmployeePrompt();
    })
    .catch((error) => console.log(error));
};
// internPrompt() will call later in the addEmployeePrompt function 

const addEmployeePrompt = () => {
    inquirer.prompt([
        {
            type:"list",
            name: "addEmployee",
            message: "Is there anyone else that needs to be added?",
            choices: ["Engineer", "Intern", "My team is complete, I don't need anyone else."],
        },
    ])
    .then((answers) => {
        if(answers.addEmployee === "Engineer"){
            engineerPrompt() // calling engineer function 
        } else if (answers.addEmployee === "Intern"){
            internPrompt() // calling intern function
        } else {
            employeeAnswer.forEach((employee) => {
                if (employee.office) {
                    const manager = new Manager (
                        employee.name,
                        employee.id,
                        employee.email,
                        employee.office
                    );
                    employee.push(manager);
                    employee;
                } else if (employee.github) {
                    const engineer = new Engineer (
                        employee.name,
                        employee.id,
                        employee.email,
                        employee.github
                    );
                    employee.push(engineer);
                    employee;
                } else {
                    const intern = new Intern (
                        employee.name,
                        employee.id,
                        employee.email,
                        employee.university
                    )
                    employee.push(intern)
                    employee;
                }
            })
        }
    })
    .catch((error) => console.log(error))
};
managerPrompt();
