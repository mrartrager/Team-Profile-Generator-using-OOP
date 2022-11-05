const inquirer = require("inquirer");
const fs = require("fs");

const Manager = require("./library/Manager");
const Egineer = require("./library/Egineer");
const Intern = require("./library/Intern");
const htmlPage = require("./generateProfiles"); // link html to page
const Employee = require("./library/Employee");


let teamMembers = []

