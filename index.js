const inquirer = require("inquirer");
const fs = require("fs");

const Manager = require("./library/Manager");
const Egineer = require("./library/Egineer");
const Intern = require("./library/Intern");
const htmlPage = require("./generateProfiles"); // link html to page
const Employee = require("./library/Employee");


let teamMembers = []


function mainMenu(){
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
    
    function chooseMember(){
        inquirer
        .prompt ([
        {
            type: 'list',
            message: 'Choose a member for the team',
            choices: ['Engineer', 'Intern', 'none'],
            name: 'employee'
        }
    ])  
    .then((data) => {
        const employee = new Employee(data.name, data.id, data.email, data.github)
        teamMembers.push(employee)
        if (data.employee === 'Engineer'){
            createEngineer();
        }
        if (data.employee === 'Intern'){
            createIntern();
        }
        if (data.employee === 'none'){
            fileCreation(data);
        }    
        
    });
    };
    
    function createEngineer () {
        inquirer
        .prompt ([
            {
                type: 'input',
                message: 'Please enter the name of the engineer',
                name: 'EngineerName'
            },
            {
                type: 'input',
                message: 'Please enter the ID of the engineer',
                name: 'EngineerId'
            },
            {
                type: 'input',
                message: 'Please enter the email of the engineer',
                name: 'EngineerEmail'
            },
            {
                type: 'input',
                message: 'Please enter their GitHub username',
                name: 'EngineerGithub'
            }
        ])
        .then((data) => {
            const newEngineer = new Engineer(data.EngineerName, data.EngineerId, data.EngineerEemail, data.EngineerGithub)
            teamMembers.push(newEngineer)
            chooseMember()
        })
       
    };
    
    function createIntern(){
        inquirer 
            .prompt ([
        {
            type: 'input',
            message: 'Please enter the name of the intern',
            name: 'InternName'
        },
        {
            type: 'input',
            message: 'Please enter the ID of the intern',
            name: 'InternId'
        },
        {
            type: 'input',
            message: 'Please enter the email of the intern',
            name: 'InternEmail'
        },
            {
            type: 'input',
            message: 'Please enter the name of the school you are attending',
            name: 'InternSchool'
            }
    
            ])
            .then((data) => {
                const newIntern = new Intern(data.InternName, data.InternId, data.InternEmail, data.InternSchool)
                teamMembers.push(newIntern)
                chooseMember()
            }) 
           
    };
    
    
    // function for writeFile
    function fileCreation(){
        console.log(teamMembers)
    const contentTeam = htmlStuff(teamMembers);
    // const page = htmlStuff();
    // pageTemplate.buildEngineer(teamMembers)
    // pageTemplate.buildIntern(teamMembers)
    
        fs.writeFile('myTeam.html', contentTeam,
        (err) => err ? console.log(err) : console.log("myTeam.html file successfully created")
        );
      
    };
    
    addManager() };
    
 mainMenu()
    
    module.exports = teamMembers;