const cap = require('./test4');

const strings = 'Hevar';

test('the capitalize', () => {
  expect(cap(strings)).toBe(strings);
  expect(() => cap()).toThrow(Error);
});