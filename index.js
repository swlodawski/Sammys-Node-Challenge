// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input

inquirer
.prompt([
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
      name: 'Table of Contents',
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
  }],
)
// .then((response) =>
//   console.log(colors[response.color](`Your favorite color is ${response.color}!`))
// );

// TODO: Create a function to write README file
// function writeToFile(readMe, data) {}
// const writeToReadMe = (data) => {
//   fs.writeFile('readme.txt', data, (err) => {
//       err ? console.error(err) : console.log('readme created!')
//   })
// }
// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

// // const inquirer = require('inquirer');
// // const colors = require('colors');

// // inquirer
// //   .prompt([
// //     {
// //       type: "list",
// //       message: "What is your favorite color?",
// //       name: "color",
// //       choices: ["red", "blue", "green", "yellow", "cyan", "magenta"],
// //     }
// //   ])
// //   .then((response) =>
// //     console.log(colors[response.color](`Your favorite color is ${response.color}!`))
// //   );

