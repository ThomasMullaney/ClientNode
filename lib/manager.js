// import Employee
const Employee = require("./Employee");

// Manager becomes a child of Employee - imports the methods of Employee
class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        // calling 'super' we call the parents constructor methods
        super(name, id, email);
        this.officeNumber = officeNumber;
    };
    // return inputed office number
    getOfficeNumber(){
        return this.officeNumber;
    };
    // return string 'Manager
    getRole(){
        return 'Manager';
    };
};

// export class Manager
module.exports = Manager;