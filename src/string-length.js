function stringLength(string) {
  if (typeof string !== 'string') {
    return 'ERROR';
  }
  const result = [...string].length;

  if (result < 1 || result >= 10) {
    throw new Error('Empty string');
  }
  return result;
}

module.exports = stringLength;
