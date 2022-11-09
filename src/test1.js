function stringLength(string) {
  if (string.length < 10 && string.length >= 1) {
    return string.length;
  }
  return new Error('String must be between 1 and 10 characters');
}

module.exports = stringLength;