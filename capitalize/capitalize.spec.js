const capitalize = require('./capitalize');

describe('capitalize', () => {
    test('capitalizes the first letter of a string', () => {
        expect(capitalize('hello')).toBe('Hello');
    });
});

describe('capitalize', () => {
    test('capitalizes the first letter of a string', () => {
        expect(capitalize('hELlo')).toBe('Hello');
    });
});

describe('capitalize', () => {
    test('capitalizes the first letter of a string', () => {
        expect(capitalize('HELLO')).toBe('Hello');
    });
});


