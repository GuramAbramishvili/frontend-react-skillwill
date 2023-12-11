function replaceValue(string, valueToReplace, valueToReplaceWith) {
  return string
    .split("")
    .map((item) => (item == valueToReplace ? valueToReplaceWith : item))
    .join("");
}

function capitalize(sentence) {
  return sentence
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}

function sort(usersArray) {
  return usersArray.sort(
    (firstUser, secondUser) => firstUser.age - secondUser.age
  );
}

let users = [
  { name: "Lasha", age: 30 },
  { name: "Saba", age: 20 },
];
console.log(replaceValue("nona", "n", "v"));
console.log(capitalize("my name is guram"));
console.log(sort(users));
