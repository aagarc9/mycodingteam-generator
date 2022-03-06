const Manager = require('../lib/Manager');

const managerData = new Manager('Andrew', 5 , 'andrewagarcia8@gmail.com', 5754052097);

test('creates a manager object', () => {
    expect(managerData.name).toBe('Andrew');
    expect(managerData.id).toBe(5);
    expect(managerData.email).toBe('andrewagarcia8@gmail.com');
    expect(managerData.officeNumber).toBe(5754052097);
});

test('gets manager phone', () => {
    expect(managerData.getOfficeNumber()).toEqual(expect.any(Number))
})

test("gets employee's poistion", () => {
    expect(managerData.getRole()).toEqual(expect.stringContaining('Manager'));
});