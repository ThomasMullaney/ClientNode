const Engineer = require("../lib/engineer.js");

test("Can set Github account via constructor", () => {
    const testValue = "GithubUser";
    const e = new Engineer("Tom", 1, "tloring.mullaney@gmail.com", testValue);
    expect(e.github).toBe(testValue);
});

test("getRole() should return \'Engineer\'", () => {
    const testValue = "Engineer";
    const e = new Engineer("Tom", 1, "tloring.mullaney@gmail.com", "GithubUser"); 
    expect(e.getRole()).toBe(testValue);
});

test("Can get Github by getGithub", () => {
    const testValue = "github User";
    const e = new Engineer("Tom", 1, "tloring.mullaney@gmail.com", testValue);
    expect(e.getGithub()).toBe(testValue);
});