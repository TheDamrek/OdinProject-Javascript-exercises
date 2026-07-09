const lastLetter = require('./lastLetter');

describe('lastLetter', () => {
    test('returns the last letter of a string', () => {
        expect(lastLetter('hello')).toBe('o');
    });
});

describe('lastLetter', () => {
    test('returns the last letter of a string', () => {
        expect(lastLetter('HELLO')).toBe('O');
    });
});