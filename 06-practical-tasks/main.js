// task 1
const modal = document.getElementById("modal_bckg");

const btn = document.getElementById("btn");

btn.onclick = function () {
  modal.style.display = "block";
};

window.onclick = function (e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
};

//task 2

function changeColor() {
  let color = document.getElementById("input").value;
  console.log("input value: ", color);
  if (
    color === "red" ||
    color === "blue" ||
    color === "green" ||
    color === "black" ||
    color === "white"
  ) {
    document.body.style.backgroundColor = color;
  } else {
    alert("Please, enter valid colors (red, blue, green, black or white");
  }
}

// task 3

function avr() {
  const input = document.getElementById("average").value;
  const numbers = input.split(":").map(Number);

  const sum = numbers.reduce((acc, curr) => acc + curr);
  const avg = sum / numbers.length;

  if (!input.includes(":")) {
    alert("Please use colon");
    return;
  }
  alert(`Result is:  ${avg.toFixed(2)}`);
}
