const Employee = require("../lib/employee.js")

test("Can instatiate Employee Instance", () =>{
    const e = new Employee();
    expect(typeof(e)).toBe("object")
});

test("Can set Name via constructor argument", () => {
    const testValue = "Tom";
    const e = new Employee(testValue);
    expect(e.name).toBe(testValue);
});

test("Can set Id via constructor argument", () => {
    const testValue = 100;
    const e = new Employee("Tom", testValue);
    expect(e.id).toBe(testValue);
});

test("Can set email via constructor argument", () => {
    const testValue = "tloring.mullaney@gmail.com";
    const e = new Employee("Tom", 1, testValue);
    expect(e.email).toBe(testValue);
});

test ("Can get Name via getName", () => {
    const testValue = "Tom";
    const e = new Employee(testValue);
    expect(e.getName()).toBe(testValue)
});

test ("Can get Id by getId", ()=> {
    const testValue = 100;
    const e = new Employee("Tom", testValue);
    expect(e.getId()).toBe(testValue);
});

test ("Can get Email by getEmail", () => {
    const testValue = "tloring.mullaney@gmail.com";
    const e = new Employee("Tom", 1, testValue);
    expect(e.getEmail()).toBe(testValue);
});

test ("Does getRole() return \'Employee\'", () => {
    const testValue = "Employee";
    const e = new Employee("Tom", 1, "tloring.mullaney@gmail.com");
    expect(e.getRole()).toBe(testValue);
});