
// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown.js')
// const fs = require('fs');
// TODO: Create an array of questions for user input

const runner = async () => {

    try {
        console.log('Program Started')
        inquirer.prompt(questions)
        const response = await inquirer.get(response)
        console.log(response)
        
        console.log('program ended')
    } catch (error) {
        console.log(error)
    }
}
runner()

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
        name: 'installationInstructions'
    },
    {

    }

];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();