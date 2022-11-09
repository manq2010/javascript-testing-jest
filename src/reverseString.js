const reverseString = (string) => {
  const result = string.split('').reverse().join('');
  return result;
};

module.exports = reverseString;