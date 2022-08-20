//Inquirer: Prompt Team members and info
import Manager from "./lib/Manager.js";
import Engineer from "./lib/Engineer.js";
import Intern from "./lib/Intern.js";
import inquirer from "inquirer";
import fs from "fs";
import { buildProfile } from "./src/template.js";
import Employee from "./lib/Employee.js";

const managers = [];
const engineers = [];
const interns = [];

//info: team manager's name, employee ID, email, office number.
function addManager() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the manager's name?",
        name: "name",
      },
      {
        type: "input",
        message: "What is the manager's employee id?",
        name: "id",
      },
      {
        type: "input",
        message: "What is the manager's email address?",
        name: "email",
      },
      {
        type: "input",
        message: "What is the manager's office number?",
        name: "officeNumber",
      },
    ])
    .then((answers) => {
      const manager = new Manager(
        answers.name,
        answers.id,
        answers.email,
        answers.officeNumber
      );
      managers.push(manager);
      createTeam();
    });
}

//THEN: query add engineer or intern
function createTeam() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "Would you like to add an employee?",
        name: "addEmployee",
        choices: [
          "Manager",
          "Engineer",
          "Intern",
          "All team members accounted for",
        ],
      },
    ])

    .then((answers) => {
      console.log(answers.addEmployee);
      switch (answers.addEmployee) {
        case "Manager":
          addManager();
          break;
        case "Engineer":
          addEngineer();
          break;
        case "Intern":
          addIntern();
          break;

        default:
          startBuild();
      }
    });
}

//engineer: name, ID, email, github. Return to menu.
function addEngineer() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the engineer's name?",
        name: "name",
      },
      {
        type: "input",
        message: "What is the engineer's employee id?",
        name: "id",
      },
      {
        type: "input",
        message: "What is the engineer's email address?",
        name: "email",
      },
      {
        type: "input",
        message: "What is the engineer's github username?",
        name: "github",
      },
    ])
    .then((answers) => {
      const engineer = new Engineer(
        answers.name,
        answers.id,
        answers.email,
        answers.github
      );
      engineers.push(engineer);
      createTeam();
    });
}

//intern: name, ID, email, school. Return to menu
function addIntern() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the intern's name?",
        name: "name",
      },
      {
        type: "input",
        message: "What is the intern's employee id?",
        name: "id",
      },
      {
        type: "input",
        message: "What is the intern's email address?",
        name: "email",
      },
      {
        type: "input",
        message: "What school does the intern attend?",
        name: "school",
      },
    ])
    .then((answers) => {
      const intern = new Intern(
        answers.name,
        answers.id,
        answers.email,
        answers.school
      );
      interns.push(intern);
      createTeam();
    });
}

//generate HTML
function startBuild() {
  let data = buildProfile(managers, engineers, interns);
  console.log("Building your team profile...");
  fs.writeFile("./dist/teamprofile.html", data, (err) => {
    if (err) console.log(err);
    else {
      console.log("Team profile created!");
    }
  });
}
//HTML email is clickable, opens email.
//Github username is clickable, opens github in new tab
//validate user input

function runApplication() {
  addManager();
}

runApplication();
