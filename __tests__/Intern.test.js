import Intern from "../lib/Intern.js";

test("creates school", () => {
  const testschool = "Hard Knocks";
  const testemployee = new Intern(
    "Leeroy",
    69,
    "LeeroyJenkins@gmail.com",
    testschool
  );
  expect(testemployee.school).toBe(testschool);
});

test("getSchool", () => {
  const testschool = "Hard Knocks";
  const testemployee = new Intern(
    "Leeroy",
    69,
    "LeeroyJenkins@gmail.com",
    testschool
  );
  expect(testemployee.getSchool()).toBe(testschool);
});

test("getRole", () => {
  const returnValue = "Intern";
  const testemployee = new Intern(
    "Leeroy",
    69,
    "LeeroyJenkins@gmail.com",
    "Hard Knocks"
  );
  expect(testemployee.getRole()).toBe(returnValue);
});
