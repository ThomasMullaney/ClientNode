// import the Employee class so engineers are employees
const Employee = require("./Employee");

// class to export, extends allows 'Engineer' to be a child of 'Employee'
class Engineer extends Employee{
    constructor(name, id, email, github) {
        super (name, id, email);
        this.github = github;
        
    };
    // following are methods to return unique inputs of Engineers
    //return inputed github
    getGithub(){
        return this.github;
    };
    // return string 'Engineer
    getRole(){
        return 'Engineer';
    };
};

// export the 'Engineer' class
module.exports = Engineer;