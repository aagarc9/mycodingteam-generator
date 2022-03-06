const Engineer = require('../lib/Engineer')

const engineerData = new Engineer ('Andrew', 7, 'andrewagarcia8@gmail.com', 'aagarc9')

test('creates an engineer object', () => {
    expect(engineerData.name).toBe('Andrew');
    expect(engineerData.id).toBe(7);
    expect(engineerData.email).toBe('andrewagarcia8@gmail.com');
    expect(engineerData.github).toBe('aagarc9');
});

test ("gets engineer's github username", () => {
    expect(engineerData.getGithub()).toEqual(expect.stringContaining('aagarc9'));
});

test("gets engineer's position", () => {
    expect(engineerData.getRole()).toEqual(expect.stringContaining('Engineer'));
});