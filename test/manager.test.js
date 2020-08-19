const Manager = require("../lib/manager.js");
const Employee = require("../lib/engineer.js")
test("Can set officeNumber  via constructor", () => {
    const testValue = "100";
    const e = new Manager("Tom", 1, "tloring.mullaney@gmail.com", testValue);
    expect(e.officeNumber).toBe(testValue);
});

test("getRole() should return \'Manager\'", () => {
    const testValue = "Manager";
    const e = new Manager("Tom", 1, "tloring.mullaney@gmail.com", 100); 
    expect(e.getRole()).toBe(testValue);
});

test("Can get Office Number by getOfficeNumber", () => {
    const testValue = "100";
    const e = new Manager("Tom", 1, "tloring.mullaney@gmail.com", testValue);
    expect(e.getOfficeNumber()).toBe(testValue);
});