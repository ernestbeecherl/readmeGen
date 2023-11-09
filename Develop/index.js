// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown.js");
const fs = require('fs'); 
// TODO: Create an array of questions for user input
const questions = [


    {
        type: 'input',
        name: 'Description',
        message: 'What is the title of your project? (Required)',
        validate: DescriptionInput => {
            if (DescriptionInputInput) {
                return true; 
            } else {
                console.log('Please enter your title!');
                return false; 
            } 
        } 
    }, 
    

    {
        type: 'input',
        name: 'TableOfContents',
        message: 'What are your table of contents?',
        validate: tableofcontentsInput => {
            if (tableofcontentsInput) {
                return true; 
            } else {
                console.log('Please enter your table of contents!');
                return false; 
            }
        }
    },
    
    {
        type: 'input',
        name: 'Installation',
        message: 'Please provide the installation instructions',
        validate: installationInput => {
            if (installationInput) {
                return true; 
            } else {
                console.log('Please enter your installation instructions');
                return false; 
            }
        }
    }, 


    {
        type: 'input',
        name: 'Usage',
        message: 'Provide examples for use.',
        validate: usageInput => {
            if (usageInput) {
                return true; 
            } else {
                console.log('Please enter your usage instructions.');
                return false; 
            }
        }
    },


    {
        type: 'input',
        name: 'License',
        message: 'Which license will you be using?',
        choices: ['mit', 'no license']
    },

    {
        type: 'input',
        name: 'Contributing',
        message: 'Provide contributing examples.',
        validate: contriInput => {
            if (contriInput) {
                return true; 
            } else {
                console.log('Please enter your contributing examples.');
                return false; 
            }
        }
    },

    {
        type: 'input',
        name: 'Test',
        message: 'Provide instructions on how to test the app.',
        validate: testInput => {
            if (testInput) {
                return true; 
            } else {
                console.log('Please provide test instructions.');
                return false; 
            }
        }
    },


    {
        type: 'input',
        name: 'Question',
        message: 'Provide questions.',
        validate: questionsInput => {
            if (questionsInput) {
                return true; 
            } else {
                console.log('Please enter your questions');
                return false; 
            }
        }
    },


];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();