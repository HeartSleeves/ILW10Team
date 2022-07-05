import Employee from "../lib/Employee.js";

test("creates Employee", () => {
  const testemployee = new Employee("Leeroy", 69, "LeeroyJenkins@gmail.com");
  const name = "Leeroy";
  const id = 69;
  const email = "LeeroyJenkins@gmail.com";
  expect(typeof testemployee).toBe("object");
  expect(testemployee.name).toBe(name);
  expect(testemployee.id).toBe(id);
  expect(testemployee.email).toBe(email);
});

test("getName", () => {
  const testName = "Leeroy";
  const testemployee = new Employee(testName);
  expect(testemployee.getName()).toBe(testName);
});

test("getID", () => {
  const testID = 69;
  const testemployee = new Employee("Leeroy", testID);
  expect(testemployee.getID()).toBe(testID);
});

test("getEmail", () => {
  const testEmail = "LeeroyJenkins@gmail.com";
  const testemployee = new Employee("Leeroy", 69, testEmail);
  expect(testemployee.getEmail()).toBe(testEmail);
});

test("getRole", () => {
  const returnValue = "Employee";
  const testemployee = new Employee("Leeroy", 69, "LeeroyJenkins@gmail.com");
  expect(testemployee.getRole()).toBe(returnValue);
});
