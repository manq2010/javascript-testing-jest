const stringLength = require('./string-length.js');
const reverseString = require('./reverseString.js');
const calculator = require('./calculator.js');
const capitalize = require('./capitalize.js');

describe('stringLength', () => {
  it('works with string length equals to 1 ', () => stringLength('a').then((result) => expect(result).toBe(1)));

  it('returns ERROR with non-string parameter', () => stringLength(10).then((result) => expect(result).toBe('ERROR')));

  it('should throw Error when an empty string is passed', () => {
    expect(() => stringLength('')).toThrow(Error);
  });

  it('should throw Error when length greater than 10', () => {
    expect(() => stringLength('sihlongonyane')).toThrow(Error);
  });
});

describe('reverseString', () => {
  it('works with one word parameter', () => {
    expect(reverseString('one')).toBe('eno');
  });

  it('works with two words', () => {
    expect(reverseString('man down')).toBe('nwod nam');
  });

  it('should throw Error when parameter is not string', () => {
    expect(() => reverseString(101)).toThrow(Error);
  });

  it('works with an empty string', () => {
    expect(reverseString('')).toBe('');
  });
});

describe('calculator', () => {
  it('sums 1 and 2 to be equal to 3', () => {
    expect(calculator.add(1, 2)).toBe(3);
  });

  it('sums -10 and 20 to be equal to 10', () => {
    expect(calculator.add(-10, 20)).toBe(10);
  });

  it('should throw Error when one or more or both parameters to add are not numbers', () => {
    expect(() => calculator.add('a', 1)).toThrow(Error);
    expect(() => calculator.add('a', 'b')).toThrow(Error);
  });

  it('5 subtract 2 to be equal to 3', () => {
    expect(calculator.subtract(5, 2)).toBe(3);
  });

  it('-5 subtract 9 to be equal to -14', () => {
    expect(calculator.subtract(-5, 9)).toBe(-14);
  });

  it('should throw Error when one or more or both parameters to subtract are not numbers', () => {
    expect(() => calculator.subtract('a', 1)).toThrow(Error);
    expect(() => calculator.subtract('a', 'b')).toThrow(Error);
  });

  it('divides 1 by 2 to be equal to 0.5', () => {
    expect(calculator.divide(1, 2)).toBe(0.5);
  });

  it('divides -50 by 10 to be equal to -5', () => {
    expect(calculator.divide(-50, 9)).toBeCloseTo(-5.5555);
  });

  it('should throw Error when one or more or both parameters are not numbers', () => {
    expect(() => calculator.divide('a', 1)).toThrow(Error);
    expect(() => calculator.divide('a', 'b')).toThrow(Error);
    expect(() => calculator.divide(5, 0)).toThrow(Error);
  });

  it('multiply 1 and 2 to be equal to 2', () => {
    expect(calculator.multiply(1, 2)).toBe(2);
  });

  it('multiply 50 and 10 to be equal to 500', () => {
    expect(calculator.multiply(50, 10)).toBe(500);
  });

  it('should throw Error when one or more or both parameters are not numbers', () => {
    expect(() => calculator.multiply('a', 1)).toThrow(Error);
    expect(() => calculator.multiply('a', 'b')).toThrow(Error);
  });
});

describe('capitalize', () => {
  it('string is capitalize', () => {
    expect(capitalize('hello')).toBe('HELLO');
  });

  it('words are capitalize', () => {
    expect(capitalize('hello world')).toBe('HELLO WORLD');
  });

  it('Capitalized words remain the same', () => {
    expect(capitalize('YES SIR!')).toBe('YES SIR!');
  });

  it('Capitalized word remain the same', () => {
    expect(capitalize('YES SIR!')).toBe('YES SIR!');
  });
});
