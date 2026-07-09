const multiplication = require('./multiplication');

describe('multiplication', () => {
    test('multiplies two positive numbers', () => {
        expect(multiplication(3, 4)).toBe(12);
    });

    test('multiplies a positive and a negative number', () => {
        expect(multiplication(3, -4)).toBe(-12);
    });

    test('multiplies two negative numbers', () => {
        expect(multiplication(-3, -4)).toBe(12);
    });
});