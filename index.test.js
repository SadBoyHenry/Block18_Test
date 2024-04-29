const { multiplication, concatOdds } = require('./index.js');

describe('multiplication function', () => {
    test('should return the product of two numbers', () => {
        expect(multiplication(3, 4)).toBe(12);
    });

    test('should return an error for non number inputs', () => {
        expect(() => multiplication('a', 4)).toThrow("Please provide valid numbers");
    });
});
