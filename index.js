// Prompting users questions
const inquirer = require('inquirer')
const fs = require('fs');
const path = require('path');

// Importing files with functions
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const pageLayout = require('./src/pageLayout');
const writeFile = require('./src/generateHTML')

// creating arrays to push functions
const manager = [];
const engineer = [];
const intern = [];
const employeeA = {manager, engineer, intern}

function memberQuestions() {
    return inquirer.prompt ([
        {
            type:'text',
            name: 'employee',
            message: "What is the Employee's name?"
        },
        {
            type:'text',
            name: 'id',
            message: "What is the employee's ID number?"
        },
        {
            type: 'text',
            name: 'email',
            message: "What is the employee's email?"
        },
        {
            type: 'list',
            name: 'position',
            message:"What is the employee's role?",
            choices: ['Manager', 'Engineer', 'Intern']
        },
    ])
    .then(({employee, id, email, position}) => {
        if (position === 'Manager') {
            return inquirer.prompt([
                {
                    type:'text',
                    name: 'phone',
                    message:"What is the Manager's office number?" 
                    
                },
                {
                    type: 'confirm',
                    name: 'newEmployee',
                    message: "What you like to add another employee?",
                    default: false
                }
            ])
            .then(({phone, newEmployee}) => {
                manager.push(new Manager(employee, id, email, phone))
                console.log(manager)
                if  (newEmployee) {
                    return memberQuestions();
                }
            })
        } else if (position === 'Engineer') {
            return inquirer.prompt([
                {
                    type:'text',
                    name: 'github',
                    message:"What is the Engineer's Github usermame?" 
                    
                },
                {
                    type: 'confirm',
                    name: 'newEmployee',
                    message: "What you like to add another employee?",
                    default: false
                }
            ])
            .then(({github, newEmployee}) => {
                engineer.push(new Engineer(employee, id, email, github))
                console.log(engineer)
                if  (newEmployee) {
                    return memberQuestions();
                }
            })
        } else if (position === 'Intern') {
            return inquirer.prompt([
                {
                    type:'text',
                    name:'school',
                    message: "What is the Intern's school?"
                },
                {
                    type:'confirm',
                    name:'newEmployee',
                    message: "What you like to add another employee?",
                    default: false  
                }
            ])
            .then(({school, newEmployee}) => {
                intern.push(new Intern(employee, id, email, school))
                if (newEmployee) {
                    return memberQuestions();
                }
            })
        }
    })
};

memberQuestions()
.then(answers => {
    return pageLayout(employeeA)
})
.then(generateHTML => {
    return writeFile(generateHTML)
})