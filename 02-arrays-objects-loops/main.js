function youngestUser(users) {
  let youngestUser = users[0];
  for (let user of users) {
    if (youngestUser.age > user.age) {
      youngestUser = user;
    }
  }
  return youngestUser.name;
}

function copyObject(user) {
  return JSON.parse(JSON.stringify(user));
}

function diceRoll() {
  let diceRoll = () => Math.trunc(Math.random() * 6) + 1;
  let firstUser;
  let secondUser;
  while (firstUser !== 3 && secondUser !== 3) {
    firstUser = diceRoll();
    secondUser = diceRoll();
  }
  if (firstUser === 3) {
    return `${firstUser} - player 1   ${secondUser} - player 2    player 1  won the game`;
  } else {
    return `${firstUser} - player 1   ${secondUser} - player 2    player 2  won the game`;
  }
}

let users = [
  { name: "Temo", age: 25 },
  { name: "Lasha", age: 21 },
  { name: "Ana", age: 28 },
];

console.log(youngestUser(users));
console.log(diceRoll());
