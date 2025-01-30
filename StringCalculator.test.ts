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
    test('Must return the sum of multiple numbers split using delimiter', () => {
    expect(stringCalculator.add('//;\n1;2')).toBe(3);
    });

    // Multiple numbers with one or more negative values should return error
    test('Must throw error with details of negative numbers', () => {
    expect(stringCalculator.add('1,-2,-3,4')).toBe('Negatives not allowed :-2,-3');
    });

    // Testing the funtion call count
    test('Must provide count of function call', () => {
    stringCalculator.add('3,4');
    stringCalculator.add('3,4,9');
    stringCalculator.add('1');
    expect(stringCalculator.getCalledCount()).toBe(4);
    });

    // Multiple numbers in string test with numbers greater than thousand
    test('Must return the sum of multiple ignoring values greater than thousands', () => {
    expect(stringCalculator.add('3000,2,6')).toBe(8);
    });

    // Multiple numbers with any length delimiters
    test('Must return the sum of multiple numbers split using any length delimiter', () => {
    expect(stringCalculator.add('//[***]\n1***2***3')).toBe(6);
    });

    // Multiple numbers with multiple delimiters
    test('Must return the sum of multiple numbers split using any length delimiter', () => {
    expect(stringCalculator.add('//[*][%]\n1*2%3')).toBe(6);
    });
});
