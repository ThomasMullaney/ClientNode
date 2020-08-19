// Employee will be parent contructor
class Employee {
    //constructor function to 'construct' employees
    constructor (name, id, email){
       this.name = name;
       this.id = id;
       this.email = email;

    };
    // Methods to return the three characterisitics all employees share
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