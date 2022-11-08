const inquirer = require("inquirer");
const fs = require("fs");

const Manager = require("./library/Manager");
const Engineer = require("./library/Engineer");
const Intern = require("./library/Intern");
// const Employee = require("./library/Employee");

const generateHTML = require("./src/gernerateProfiles") 

let employeeAnswer = []; 

let employeeArray = []; 

const managerPrompt = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "Name",
            message: "Please enter the Managers name: ",
        },
        {
            type: "input",
            name: "ID",
            message: "Please enter the Managers ID number: ",
        },
        {
            type: "input",
            name: "Email",
            message: "Please enter the Managers email address: ",
        },
        {
            type: "input",
            name: "Office Number",
            message: "Please enter the Managers office number: "
        },
    ])
    .then((answers) => {
        employeeAnswer.push(answers)
        nextEmployeePrompt()
    })
}

const engineerPrompt = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Please enter the Engineers name: ",
        },
        {
            type: "input",
            name: "id",
            message: "Please enter the Engineers ID: ",
        },
        {
            type: "input",
            name: "email",
            message: "Please enter the Engineers email address: ",
        },
        {
            type: "input",
            name: "github",
            message: "Please enter the engineer's GitHub username: ",
        },
    ])
    .then((answers) => {
        employeeAnswer.push(answers)
        nextEmployeePrompt()
    })
}


const internPrompt = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Please enter the intern's name: ",
        },
        {
            type: "input",
            name: "id",
            message: "Please enter the intern's employee ID: ",
        },
        {
            type: "input",
            name: "email",
            message: "Please enter the intern's email: ",
        },
        {
            type: "input",
            name: "school",
            message: "Please enter the intern's University: ",
        },
    ])
    .then((answers) => {
        employeeAnswer.push(answers)
        nextEmployeePrompt()
    })
}

const nextEmployeePrompt = () => {
    inquirer.prompt([
        {
            type: "list",
            name: "nextEmployee",
            message: "Add another employee?",
            choices: ["Engineer", "Intern", "My team is complete"]
        },
    ])
    .then((answers) => {
        if (answers.nextEmployee === "Engineer") {
            engineerPrompt()
        } else if (answers.nextEmployee === "Intern") {
            internPrompt()
        } else {
            employeeAnswer.forEach((employee) => {
                if (employee.officeNumber) {

                    const manager = new Manager(employee.name, employee.id, employee.email, employee.officeNumber)
                    employeeArray.push(manager)

                } else if (employee.github) {

                    const engineer = new Engineer(employee.name, employee.id, employee.email, employee.github)
                    employeeArray.push(engineer)
                    
                } else {
                    
                    const intern = new Intern(employee.name, employee.id, employee.email, employee.school)
                    employeeArray.push(intern)
                }
            })
        
            fs.writeFileSync("./src/index.html", generateHTML(employeeArray))
        }
    })
    
}

// initialize the prompt
managerPrompt()


