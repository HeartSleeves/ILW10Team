import Engineer from "../lib/Engineer.js";

test("creates github", () => {
  const testGithub = "LeeroyJenkins";
  const testemployee = new Engineer(
    "Leeroy",
    69,
    "LeeroyJenkins@gmail.com",
    testGithub
  );
  expect(testemployee.github).toBe(testGithub);
});

test("getGithub", () => {
  const testGithub = "LeeroyJenkins";
  const testemployee = new Engineer(
    "Leeroy",
    69,
    "LeeroyJenkins@gmail.com",
    testGithub
  );
  expect(testemployee.getGithub()).toBe(testGithub);
});

test("getRole", () => {
  const returnValue = "Engineer";
  const testemployee = new Engineer(
    "Leeroy",
    69,
    "LeeroyJenkins@gmail.com",
    "LeeroyJenkins"
  );
  expect(testemployee.getRole()).toBe(returnValue);
});
