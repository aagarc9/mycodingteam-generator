const Employee = require ('../lib/Employee');

const employeeData = new Employee ('Andrew', 5 , 'andrewagarcia8@gmail.com', 'Employee');

test('makes the employee object', () => {
    expect(employeeData.name).toBe('Andrew');
    expect(employeeData.id).toBe(5);
    expect(employeeData.email).toBe('andrewagarcia8@gmail.com');
});

test("gets employee's name", () => {
    expect(employeeData.getName()).toEqual(expect.stringContaining('Andrew'));
});

test("gets employee's ID", () => {
    expect(employeeData.getId()).toEqual(expect.any(Number));
});

test("gets employee's email", () => {
    expect(employeeData.getEmail()).toEqual(expect.stringContaining('andrewagarcia8@gmail.com'));
});

test("gets employee's position", () => {
    expect(employeeData.getRole()).toEqual(expect.stringContaining('Employee'));
});