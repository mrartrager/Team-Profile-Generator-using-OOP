const inquirer = require("inquirer");
const fs = require("fs");

const Manager = require("./library/Manager");
const Egineer = require("./library/Egineer");
const Intern = require("./library/Intern");
const htmlPage = require("./generateProfiles"); // link html to page
const Employee = require("./library/Employee");


let teamMembers = []


function appMenu(){
    function addManager() {
        inquirer
        .prompt([
        {
            type: 'input',
            name: 'managersName',
            message: 'Please enter the name of the manager',
    
        },
        {
            type: 'input',
            name: 'managersId',
            message: 'Please enter the ID of the manager',
    
        },
        {
            type: 'input',
            name: 'managersEmail',
            message: 'Please enter the email of the manager',
        },
        {
            type: 'input',
            name: 'managersOffice',
            message: 'Please enter the office number of the manager',
        }
    ])  
    .then((data) => {
        const newManager = new Manager(data.ManagerName, data.ManagerId, data.ManagerEmail, data.ManagerOffice)
        teamMembers.push(newManager)
        chooseMember()
    })
    };
    