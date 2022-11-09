class calculator {
  static add(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('Please use a number parameter');
    }
    return a + b;
  }

  static subtract(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('Please use a number parameter');
    }
    return a - b;
  }

  static divide(a, b) {
    if (b === 0 || typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('Division by zero undefined');
    }
    return a / b;
  }

  static multiply(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('Multiplication by a non-number parameter returns error');
    }
    return a * b;
  }
}

module.exports = calculator;