function sumAndMultiplication(num1, num2, ...args) {
  if (isNaN(num1) || isNaN(num2) || args.some((element) => isNaN(element))) {
    return "Input should have only numbers,at least 3.";
  }
  let sum = num1 + num2;
  let multiplication = 1;
  for (let arg of args) multiplication *= arg;
  return [sum, multiplication];
}

function returnCity() {}
console.log(sumAndMultiplication(2, "samiani"));
console.log(sumAndMultiplication(2, 3, 5, 8));
