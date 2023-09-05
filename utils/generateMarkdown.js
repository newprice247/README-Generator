// A function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === null) {
    license = ''
  } else {
    return `[![License: ${license}](https://img.shields.io/badge/License-${license}-yellow.svg)](https://opensource.org/licenses/${license})`
  }
}

// A function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === null) {
    license = ''
  } else {
    return `[${license}](https://opensource.org/licenses/${license})`
  }
}

// A function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === null) {
  license = ''
} else {
  return `## License`
}}

// A function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Description

  ${data.description}

  ## Table of Contents 
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits) 
  - [Contribution](#contribution)
  - [License](#license)
  - [Test](#test)
  - [Questions](#questions)
  
  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## Contribution

  ${data.contribution}

  ## Credits

  ${data.credits}

  ${renderLicenseSection(data.license)}

  ${renderLicenseLink(data.license)}

  ## Tests

  ${data.test}

  ## Questions
  
  Reach out to me if you have any questions about the project!
  
  [Github: ${data.username} @ Github](https://github.com/${data.username})
  
  Email: ${data.email}
`;
}

//Exports function for use in index.js
module.exports = generateMarkdown;
