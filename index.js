//Inquirer: Prompt Team members and info
//info: team manager's name, employee ID, email, office number.
//THEN: query add engineer or intern
//engineer: name, ID, email, github. Return to menu.
//intern: name, ID, email, school. Return to menu
//generate HTML
//HTML email is clickable, opens email.
//Github username is clickable, opens github in new tab
//

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