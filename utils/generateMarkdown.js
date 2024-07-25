// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(!license) {
  return '';
}
const badges = {
  'MIT': '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)',
  'Apache 2.0': '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)',

};
return badges[license]  || '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
if(!license) {
  if(license) {
    return '';
  }
const links = {
  'MIT': 'https://opensource.org/licenses/MIT',
  'Apache 2.0': 'https://opensource.org/licenses/Apache-2.0',
}
};

return links[license] || '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  console.log('render license section', license)
  if (!license) {
    return '';
  }
    return `##License 
    This project is licensed under the ${license} License. For more information, please visit(${renderLicenseLink(license)}).
`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ###Description
   # ${data.description}
  ###Table of Contents
  [installation](#installation)
  [usage](#usage)
  [contributors](#contributors)
  [license](#license)
  [tests](#tests)
  [questions](#questions)
  [Installation](#Installation)
   #### ${data.contents}
   ###Installation
   #### ${data.installation}
   ###Usage
   #### ${data.usage}
   ###Contributors
   #### ${data.contributors}
   ###License
   #### ${data.license}
   ###Tests
   #### ${data.tests}
   ###Questions
    #### If you have any questions, please open an issue or contact me via email at ${data.email}. You can find more of my work at ${data.github}.
    `
}

module.exports = generateMarkdown;
