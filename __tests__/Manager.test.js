import Manager from "../lib/Manager.js";

test("creates Office Number", () => {
  const testOfficeNumber = 69;
  const testemployee = new Manager(
    "Leeroy",
    69,
    "LeeroyJenkins@gmail.com",
    testOfficeNumber
  );
  expect(testemployee.officeNumber).toBe(testOfficeNumber);
});

test("getOfficeNumber", () => {
  const testOfficeNumber = 69;
  const testemployee = new Manager(
    "Leeroy",
    69,
    "LeeroyJenkins@gmail.com",
    testOfficeNumber
  );
  expect(testemployee.getOfficeNumber()).toBe(testOfficeNumber);
});

test("getRole", () => {
  const returnValue = "Manager";
  const testemployee = new Manager("Leeroy", 69, "LeeroyJenkins@gmail.com", 69);
  expect(testemployee.getRole()).toBe(returnValue);
});
