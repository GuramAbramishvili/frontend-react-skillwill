const div1 = document.createElement("div");
const button1 = document.createElement("button");
div1.innerText = "Click button to hide me";
button1.setAttribute("id", "button1Id");
document.body.append(div1, button1);
button1.addEventListener("click", function () {
  div1.remove();
});

const hr = document.createElement("hr");
const div2 = document.createElement("div");
const h2 = document.createElement("h2");
const a = document.createElement("a");
div2.id = "card";
h2.innerText = "Gandalf";
a.href = "#";
a.innerText = "Go to Profile";
div2.append(hr, h2, a);
document.body.append(div2);
