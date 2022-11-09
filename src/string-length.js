function stringLength(string) {
  if (typeof string !== 'string') {
    return Promise.resolve('ERROR');
  }
  const result = [...string].length;

  if (result < 1 || result >= 10) {
    throw new Error('Empty string');
  }
  return Promise.resolve(result);
}

module.exports = stringLength;