// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./generateMarkdown');
// TODO: Create an array of questions for user input

const questions = [
    {
      type: 'input',
      name: 'Title',
      message: 'What is the title of your project?', 
    },
    {
      type: 'input',
      name: 'Description',
      message: 'Give a description of your project',
    },
    {
      type: 'input',
      name: 'Contents',
      message: 'Provide a table of contents',
    },
    {
      type: 'input',
      name: 'Installation',
      message: 'Enter installation instructions',
    },
    {
      type: 'input',
      name: 'Usage',
      message: 'What will this project be used for?',
    },
    {
      type: 'input',
      name: 'Contributors',
      message: 'Who contributed to this project?',
    },
    {
      type: 'list',
      name: 'License',
      message: 'Do you want a license?',
      choices: ['none','MIT', 'Apache',]
    },
    {
      type: 'input',
      name: 'Tests',
      message: 'Does this project include tests?',
    },
    {
      type: 'input',
      name: 'Questions',
      message: 'Do you have any questions regarding this project?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'please enter an email address where you can be contacted'
  },
  {
    type: 'input',
    name: 'Please enter the link to your github profile'
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  console.info('data:', data);
  return fs.writeFileSync(path.join(process.cwd(),fileName),data);
  }
  
  // TODO: Create a function to initialize app
  function init() { 
  inquirer
    .prompt(questions)
    .then(answers => {
      console.log("Generating README...")
      writeToFile('sammyReadMe.md', generateMarkdown({...answers})
   ) });
  }
  
  // Function call to initialize app
  init();