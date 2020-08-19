const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager")
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const outputPath = path.resolve(__dirname, "output", "team.html");
const render = require("./lib/htmlRenderer");
const teamMembers = [];
const idArray = [];



// start of function that will run through user inputs.
function appMenu() {
  function createManager() {
    console.log("Please build your team, starting with a Manager");
    // start of Manager prompts - app will always start with manager and 
    inquirer.prompt([
      {
        type: "input",
        name: "managerName",
        message: "What is your manager's name?",
      //  validate checks to see if the input was blank, if so returns message, otherwise continues
        validate: input => {
          if (input !== "") {
            return true;
          }
          return "Please enter at least one character.";
        }
      },
      {
        type: "input",
        name: "managerId",
        message: "What is your manager's id?",
        validate: input => {
          const pass = input.match(
            /^[1-9]\d*$/
          );
          if (pass) {
            return true;
          }
          return "Please enter a positive number greater than zero.";
        }
      },
      {
        type: "input",
        name: "managerEmail",
        message: "What is your manager's email?",
        validate: input => {
          const pass = input.match(
            /\S+@\S+\.\S+/
          );
          if (pass) {
            return true;
          }
          return "Please enter a valid email address.";
        }
      },
      {
        type: "input",
        name: "managerOfficeNumber",
        message: "What is your manager's office number?",
        validate: input => {
          const pass = input.match(
            /^[1-9]\d*$/
          );
          if (pass) {
            return true;
          }
          return "Please enter a positive number greater than zero.";
        }
      }
    ])
    // after user input. take inputs and create const manager with input.
    .then(inputs => {
      const manager = new Manager(inputs.managerName, inputs.managerId, inputs.managerEmail, inputs.managerOfficeNumber);
      // after new Manager is created we push their info to teamMembers, and their ID to idArray
      teamMembers.push(manager);
      idArray.push(inputs.managerId);
      // after pushing we call our createTeamRoRosterRoster  function
      createTeamMember();
    });
  }
  function createTeamMember() {
    inquirer.prompt([
      {
        type: "list",
        name: "memberChoice",
        message: "Which type of team member would you like to add?",
        choices: [
          "Engineer",
          "Intern",
          "I don't want to add any more team members"
        ]
      }
    ]).then(userChoice => {
      // based on choice selected we switch to 3 possible paths. Engineer, Intern, or buildteam
      switch(userChoice.memberChoice) {
      case "Engineer":
        addEngineer();
        break;
      case "Intern":
        addIntern();
        break;
      default:
        buildTeam();
      }
    });
  }
  function addEngineer() {
    inquirer.prompt([
      {
        type: "input",
        name: "engineerName",
        message: "What is your engineer's name?",
        validate: input => {
          if (input !== "") {
            return true;
          }
          return "Please enter at least one character.";
        }
      },
      {
        type: "input",
        name: "engineerId",
        message: "What is your engineer's id?",
        validate: input => {
          const pass = input.match(
            /^[1-9]\d*$/
          );
          if (pass) {
            if (idArray.includes(input)) {
              return "This ID is already taken. Please enter a different number.";
            } else {
              return true;
            }
          }
          return "Please enter a positive number greater than zero.";
        }
      },
      {
        type: "input",
        name: "engineerEmail",
        message: "What is your engineer's email?",
        validate: input => {
          const pass = input.match(
            /\S+@\S+\.\S+/
          );
          if (pass) {
            return true;
          }
          return "Please enter a valid email address.";
        }
      },
      {
        type: "input",
        name: "engineerGithub",
        message: "What is your engineer's GitHub username?",
        validate: input => {
          if (input !== "") {
            return true;
          }
          return "Please enter at least one character.";
        }
      }
    ]).then(inputs => {
      const engineer = new Engineer(inputs.engineerName, inputs.engineerId, inputs.engineerEmail, inputs.engineerGithub);
      teamMembers.push(engineer);
      idArray.push(inputs.engineerId);
      createTeamMember();
    });
  }
  function addIntern() {
    inquirer.prompt([
      {
        type: "input",
        name: "internName",
        message: "What is your intern's name?",
        validate: input => {
          if (input !== "") {
            return true;
          }
          return "Please enter at least one character.";
        }
      },
      {
        type: "input",
        name: "internId",
        message: "What is your intern's id?",
        validate: input => {
          const pass = input.match(
            /^[1-9]\d*$/
          );
          if (pass) {
            if (idArray.includes(input)) {
              return "This ID is already taken. Please enter a different number.";
            } else {
              return true;
            }
          }
          return "Please enter a positive number greater than zero.";
        }
      },
      {
        type: "input",
        name: "internEmail",
        message: "What is your intern's email?",
        validate: input => {
          const pass = input.match(
            /\S+@\S+\.\S+/
          );
          if (pass) {
            return true;
          }
          return "Please enter a valid email address.";
        }
      },
      {
        type: "input",
        name: "internSchool",
        message: "What is your intern's school?",
        validate: input => {
          if (input !== "") {
            return true;
          }
          return "Please enter at least one character.";
        }
      }
    ]).then(inputs => {
      const intern = new Intern(inputs.internName, inputs.internId, inputs.internEmail, inputs.internSchool);
      teamMembers.push(intern);
      idArray.push(inputs.internId);
      createTeamMember();
    });
  }
  function buildTeam() {
    fs.writeFileSync(outputPath, render(teamMembers), "utf-8");
  }
  createManager();
}
appMenu();