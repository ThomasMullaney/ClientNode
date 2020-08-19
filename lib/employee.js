
class Employee {
    //constructor function to 'construct' employees
    constructor (name, id, email){
       this.name = name;
       this.id = id;
       this.email = email;

    };
    // returns for the three characterisitics of employees
    getName(){ 
        return this.name;
    };
    getId(){
        return this.id;
    };
    getEmail(){
        return this.email;
    };
    getRole(){
        return 'Employee';
    };
};

// allow Employee to be imported for creation of 'Roles'
module.exports = Employee;