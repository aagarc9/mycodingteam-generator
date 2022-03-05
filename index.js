// Prompting users questions
const inquirer = require('inquirer')
const fs = require('fs');
const path = require('path');
// Importing files with functions
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const manager = []
const engineer = []

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
            name: 'postion',
            message:"What is the employee's role?",
            choices: ['Manager', 'Engineer', 'Intern']
        },
    ])
    .then(({employee, id, email, postion}) => {
        if (postion === 'Manager') {
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
        } else if (postion === 'Engineer') {
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
        }
    })
}

memberQuestions()