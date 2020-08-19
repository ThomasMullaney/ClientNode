const Intern = require("../lib/intern.js");

test("Can get School via constructor", () => {
    const testValue = "SJU";
    const e = new Intern("Tom", 1, "tloring.mullaney@gmail.com", testValue);
    expect(e.school).toBe(testValue);
});

test("getRole() should return \'Intern\'", () => {
    const testValue = "Intern";
    const e = new Intern("Tom", 1, "tloring.mullaney@gmail.com", "SJU"); 
    expect(e.getRole()).toBe(testValue);
});

test("Can get School by getSchool", () => {
    const testValue = "SJU";
    const e = new Intern("Tom", 1, "tloring.mullaney@gmail.com", testValue);
    expect(e.getSchool()).toBe(testValue);
});