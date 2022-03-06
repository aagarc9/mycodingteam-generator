const Intern = require('../lib/Intern');

const internData = new Intern('Andrew', 3 , 'andrewagarcia8@gmail.com', 'UCI');

test ('creates an intern object', () => {
    expect(internData.name).toBe('Andrew');
    expect(internData.id).toBe(3);
    expect(internData.email).toBe('andrewagarcia8@gmail.com');
    expect(internData.school).toBe('UCI');
});

test("gets intern's school", () => {
    expect(internData.getSchool()).toEqual(expect.stringContaining('UCI'));
});

test("gets intern's role", () => {
    expect(internData.getRole()).toEqual(expect.stringContaining('Intern'));
});