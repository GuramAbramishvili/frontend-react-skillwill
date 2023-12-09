function sumAndMultiplication(num1, num2, ...args) {
  if (isNaN(num1) || isNaN(num2) || args.some((element) => isNaN(element))) {
    return "Input should have only numbers,at least 3.";
  }
  let sum = num1 + num2;
  let multiplication = 1;
  for (let arg of args) multiplication *= arg;
  return [sum, multiplication];
}

// prettier-ignore
function returnCity({banks: [,,{address: { city }}]}) {
  return city;
}

function deepCopy(object) {
  if (object === null || typeof object !== "object") {
    return object;
  }

  let newObject = { ...object };

  for (const key in newObject) {
    if (newObject.hasOwnProperty(key)) {
      newObject[key] = deepCopy(newObject[key]);
    }
  }
  return newObject;
}

let user = { banks: ["tbc", "bog", { address: { city: "Rustavi" } }] };
console.log(sumAndMultiplication(2, "samiani"));
console.log(sumAndMultiplication(2, 3, 5, 8));
console.log(returnCity(user));

const clonedObject = deepCopy(user);
clonedObject.banks[2].address.city = "Tbilisi";
console.log(clonedObject.banks[2].address.city === user.banks[2].address.city);
