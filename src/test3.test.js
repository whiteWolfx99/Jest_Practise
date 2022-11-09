const Calculator = require('./test3');

const Object = new Calculator();

// i write all of the condition in one test3.js
// so if it will pass all of the requrement it will pass the test
// if it will not pass one of the requirement it will throw an error
describe('add', () => {
  test('should pass', () => {
    expect(Object.add(5, 2)).toBe(7);
  });
  test('should give us error', () => {
    expect(() => Object.add(101, 102)).toThrow();
  });
  test('should give us error', () => {
    expect(() => Object.add(2, 2)).toThrow();
  });
  test('should give us error', () => {
    expect(() => Object.add(0, 2)).toThrow();
  });
  test('should give us error', () => {
    expect(() => Object.add(2, 0)).toThrow();
  });
});

describe('subtract', () => {
  test('should pass', () => {
    expect(Object.subtract(5, 2)).toBe(3);
  });
  test('should give us error', () => {
    expect(() => Object.subtract(2, 5)).toThrow();
  });
  test('should give us error', () => {
    expect(() => Object.subtract(5, 5)).toThrow();
  });
  test('should throw an error ', () => {
    expect(() => Object.subtract(0, 5)).toThrow();
  });
  test('should throw error', () => {
    expect(() => Object.subtract(5, 0)).toThrow();
  });
});

describe('divide', () => {
  test('should pass', () => {
    expect(Object.divide(4, 2)).toBe(2);
  });
  test('should give us error', () => {
    expect(() => Object.divide(1, 1)).toThrow();
  });
  test('should give us error.msg', () => {
    expect(() => Object.divide(0, 5)).toThrow();
  });
  test('should give us error.msg', () => {
    expect(() => Object.divide(5, 0)).toThrow();
  });
  test('should give us error.msg', () => {
    expect(() => Object.divide(2, 4)).toThrow();
  });
});

describe('multiply', () => {
  test('should pass', () => {
    expect(Object.multiply(3, 1)).toBe(3);
  });
  test('should give us error.msg', () => {
    expect(() => Object.multiply(11, 12)).toThrow();
  });
  test('should give us error.msg', () => {
    expect(() => Object.multiply(1, 1)).toThrow();
  });
  test('should give us error.msg', () => {
    expect(() => Object.multiply(2, 0)).toThrow();
  });
  test('should give us error.msg', () => {
    expect(() => Object.multiply(0, 2)).toThrow();
  });
});
