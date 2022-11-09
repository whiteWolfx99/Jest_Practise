class calculator {
  add(x, y) {
    if (x && y > 100) {
      throw new Error("x and y are greater than 100");
    } else if (x === y) {
      throw new Error("x is equal to y");
    } else if (x === 0) {
      throw new Error("x === 0");
    } else if (y === 0) {
      throw new Error("y === 0");
    }
    return x + y;
  }

  subtract(x, y) {
    if (x < y) {
      throw new Error("y should be greater than x");
    } else if (x === y) {
      throw new Error("x is equal to y");
    } else if (x === 0) {
      throw new Error("x === 0");
    } else if (y === 0) {
      throw new Error("y === 0");
    }
    return x - y;
  }

  divide(x, y) {
    if (x < y) {
      throw new Error("y should be greater than x");
    } else if (x === y) {
      throw new Error("x is equal to y");
    } else if (x === 0) {
      throw new Error("x === 0");
    } else if (y === 0) {
      throw new Error("y === 0");
    }
    return x / y;
  }

  multiply(x, y) {
    if (x && y > 10) {
      throw new Error("x and y are greater than 10");
    } else if (x === y) {
      throw new Error("x is equal to y");
    } else if (x === 0) {
      throw new Error("x === 0");
    } else if (y === 0) {
      throw new Error("y === 0");
    }
    return x * y;
  }
}

module.exports = calculator;
