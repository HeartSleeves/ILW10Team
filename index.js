//Inquirer: Prompt Team members and info
const inquirer = require('inquirer');
const questions = [
    {
    type: 'list',
    message: 'Would you like to add a team member?',
    name: 'addEmployee',
    choices: ['Add Manager', 'Add Engineer', 'Add Intern', 'No, I\'m done']
  },
    {
      type: 'input',
      message: 'What is the employee\'s name?',
      name: 'name',
    },
    {
      type: 'input',
      message: 'What is their employee ID?',
      name: 'id',
    },
    {
        type: 'input',
        message: 'What is their email?',
        name: 'email',
      },
      {
        type: 'input',
        message: 'What is their office number?',
        name: 'officeNumber',
        when: addEmployee === 'Add Manager'
      },
      {
        type: 'input',
        message: 'What is their github address?',
        name: 'github',
      },
      {
        type: 'input',
        message: 'What is the school they attend?',
        name: 'school',
      },
  ]
//info: team manager's name, employee ID, email, office number.
//THEN: query add engineer or intern
//engineer: name, ID, email, github. Return to menu.
//intern: name, ID, email, school. Return to menu
//generate HTML
//HTML email is clickable, opens email.
//Github username is clickable, opens github in new tab
//
function getAnswers() {
    return inquirer.prompt(questions).then((answers) => {
      if (answers.is_finished) {
        return answers;
      } else {
        return getAnswers();
      }
    });
  }


class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName(){};
    getID(){};
    getEmail(){};
    getRole(){};
};

class Manager extends Employee{
    constructor(officeNumber){
        this.officeNumber = officeNumber;
    };
    //prototype?
getRole(){};}

class Engineer extends Employee{
    constructor(github){
        this.github = github;
    }
    getGithub();
    getRole();
};

class Intern extends Employee{
    constructor(school){
        this.school = school;
    }
    getSchool();
    getRole();
};

//validate user input