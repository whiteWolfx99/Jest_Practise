function capitalize(string) {
  const tdd = string.charAt(0).toUpperCase() + string.slice(1);
  if (tdd[0] === string[0]) {
    return string;
  }
  throw new Error('Error, the capitalization did not work');
}

module.exports = capitalize;