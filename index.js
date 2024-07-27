// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input

const questions = [
    {
      type: 'input',
      message: 'What is the title of your project?',
      name: 'Title',
    },
    {
      type: 'input',
      message: 'Give a description of your project',
      name: 'Description',
    },
    {
      type: 'input',
      message: 'Provide a table of contents',
      name: 'Contents',
    },
    {
      type: 'input',
      message: 'Enter installation instructions',
      name: 'Installation',
    },
    {
      type: 'input',
      message: 'What will this project be used for?',
      name: 'Usage',
    },
    {
      type: 'input',
      message: 'Who contributed to this project?',
      name: 'Contributors',
    },
    {
      type: 'list',
      message: 'Do you want a license?',
      name: 'License',
      choices: ['none','MIT', 'Apache',]
    },
    {
      type: 'input',
      message: 'Does this project include tests?',
      name: 'Tests',
    },
    {
      type: 'input',
      message: 'Do you have any questions regarding this project?',
      name: 'Questions',
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

  function writeFile(filename, data) {
    console.info('data:', data)
    return fs.writeFileSync(path.join(process.cwd(),filename),data);
  }

  function init() {
inquirer.prompt(questions).then((answers) => {
  console.log('Generating Readme...')
  writeFile('readmeResults.md', generateMarkdown({...answers}))
});
}


init();