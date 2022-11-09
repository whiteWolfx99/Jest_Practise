const stringLength = require('./test1');

const string = 'Hevar';

test('string length', () => {
  // if the string was between 1 and 10 characters,
  // then the string length should be equal to the string length
  // because if the string length is less than 10 and greater than 1,
  // then the stringLength(string) will throw an error
  // look at test1.js and you can see the for loop that will throw an error
  // if the string length is less than 1 or greater than 10
  expect(stringLength(string)).toBe(string.length);
  expect((string) => stringLength(string)).toThrow(Error);
});