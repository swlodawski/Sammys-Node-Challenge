// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const markDown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input

questions =
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
      type: 'input',
      message: 'Do you want a license?',
      name: 'License',
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
.then((data) => {
  const filename = `${data}`;

  fs.writeFile(filename, data(data, null, '\t'), (err) =>
    err ? console.log(err) : console.log('Success!')
  
  );
});

