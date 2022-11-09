const reverseString = require('./test2');

const string = 'Hevar';

test('reverseString function exists', () => {
  // if you right anything it will reversed and it will not throw an error
  const reverse2 = string.split('').reverse().join('');
  expect(reverseString(string)).toBe(reverse2);
  expect((string) => reverseString(string)).toThrow(Error);
});