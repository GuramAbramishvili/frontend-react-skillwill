function areEqualOrNot(a, b) {
  if (a === b) {
    return `${a} and ${b} are equal`;
  }
  return `${a} and ${b} are not equal`;
}

function fahrenheitToCelsius(fahrenheit) {
  if (typeof fahrenheit === "number") {
    return ((fahrenheit - 32) * 5) / 9;
  } else {
    return false;
  }
}

function calculator(a, b, operator) {
  if (typeof a === "number" && typeof b === "number") {
    if (operator === "+") {
      return a + b;
    } else if (operator === "-") {
      return a - b;
    } else if (operator === "*") {
      return a * b;
    } else if (operator === "/") {
      if (b !== 0) {
        return a / b;
      } else {
        return "Division by zero is not allowed";
      }
    } else {
      return false;
    }
  } else {
    return false;
  }
}

console.log(areEqualOrNot(5, 7));
console.log(fahrenheitToCelsius(70));
console.log(calculator(70, 10, "+"));
