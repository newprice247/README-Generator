
// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown.js')
const fs = require('fs');
// TODO: Create an array of questions for user input

const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Please describe your project.',
        name: 'description'
    },
    {
        type: 'input',
        message: 'How will users install your project?',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'How will the user interact with your project?',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'How can users contribute to the project?',
        name: 'contribution'
    },
    {
        type: 'input',
        message: 'Who would you like to give credit to for this project?',
        name: 'credits'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license(s) are you using for this project?',
        choices: ['MIT', 'Apache', 'BSD', 'GPL', 'LGPL', 'MPL']
    },
    {
        type: 'input',
        message: 'How can users test your project?',
        name: 'test'
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'username'
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email'
    }

];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}
inquirer.prompt(questions)
        .then((data) => {
            let writeToFile = (data) => {
                fs.writeFile('generatedReadme.md', `${data}`, function (err) {
                    err ? console.log(err) : console.log('Success!');
                })
            }
            writeToFile(generateMarkdown(data))
            })
// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init()