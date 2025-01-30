import { StringCalculator } from './StringCalculator';

describe('StringCalculator', () => {
    let stringCalculator: StringCalculator;

    beforeEach(() => {
      stringCalculator = new StringCalculator();
    });

    // Empty string test
    test('Must 0 for an empty string', () => {
    expect(stringCalculator.add('')).toBe(0);
    });

    // Single number in string test
    test('Must return the number itself for a single number', () => {
    expect(stringCalculator.add('2')).toBe(2);
    });

    // Two numbers in string test
    test('Must return the sum of two numbers', () => {
    expect(stringCalculator.add('3,4')).toBe(7);
    });

    // Multiple numbers in string test
    test('Must return the sum of multiple numbers', () => {
    expect(stringCalculator.add('3,2,6')).toBe(11);
    });

    // Multiple numbers with \n should also return sum
    test('Must return the sum of multiple numbers', () => {
    expect(stringCalculator.add('1\n2,3')).toBe(6);
    });

    // Multiple numbers with delimiter format //[delimiter]\n[numbers…] should also return sum
    test('Must return the sum of multiple numbers', () => {
    expect(stringCalculator.add('//;\n1;2')).toBe(3);
    });
});
