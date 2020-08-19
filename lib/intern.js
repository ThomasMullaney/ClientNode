// import Employee
const Employee = require("./Employee");

// Intern becomes a child of Employee. 
class Intern extends Employee {
    constructor(name, id, email, school){
        // super allows us to call the get methods from Employee class
        super(name, id, email);
        this.school = school;
    };
    // return inputed school
    getSchool(){
        return this.school;
    };
    // return string 'Intern'
    getRole(){
        return 'Intern';
    };

};
// exmport class of Intern
module.exports = Intern;