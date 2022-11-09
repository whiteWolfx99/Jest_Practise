const cap = require('./test4');

const strings = 'Hevar';
const strings2 = 'hevar';

test('the capitalize', () => {
  expect(cap(strings)).toBe(strings);
  expect(() => cap(strings2)).toThrow(Error);
});

