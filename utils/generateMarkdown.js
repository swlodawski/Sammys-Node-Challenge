// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const badges = {

  };

  return badges[license]  || '';
}

const links = {

};

return links[license] || '';

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return '';
  }
    return `##License`
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
   #### ${data.questions}`;
}

module.exports = generateMarkdown;
