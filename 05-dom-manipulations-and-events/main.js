const div1 = document.createElement("div");
const button1 = document.createElement("button");
div1.innerText = "Click button to hide me";
button1.setAttribute("id", "button1Id");
document.body.append(div1, button1);
button1.addEventListener("click", function () {
  div1.remove();
});

const div2 = document.createElement("div");
const h2 = document.createElement("h2");
const a = document.createElement("a");
div2.id = "card";
h2.innerText = "Gandalf";
a.href = "#";
a.innerText = "Go to Profile";
div2.append(h2, a);
document.body.append(div2);

let totalScore = 0;
const quizQuestions = [
  {
    question: "What is the capital of France?",
    answers: ["London", "Berlin", "Madrid", "Paris"],
    correctAnswer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    answers: ["Earth", "Jupiter", "Mars", "Venus"],
    correctAnswer: "Mars",
  },
  {
    question: "What is the chemical symbol for gold?",
    answers: ["Si", "Ag", "Fe", "Au"],
    correctAnswer: "Au",
  },
  {
    question:
      "Which gas do plants absorb from the atmosphere during photosynthesis?",
    answers: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    correctAnswer: "Carbon Dioxide",
  },
];

const quizContainer = document.getElementById("quiz-container");
const totalScoreEl = document.getElementById("score-el");
const checkButton = document.getElementById("check-answer");
const nextButton = document.getElementById("next-question");

let currentQuestionIndex = -1;

function displayQuestion(index) {
  const randomQuestion = quizQuestions[index];

  const questionElement = document.createElement("p");
  questionElement.textContent = randomQuestion.question;

  const answerList = document.createElement("ul");
  randomQuestion.answers.forEach((answer, answerIndex) => {
    const answerItem = document.createElement("li");
    const radioInput = document.createElement("input");
    radioInput.type = "radio";
    radioInput.name = "answer";
    radioInput.value = answer;
    radioInput.id = `answer-${answerIndex}`;
    answerItem.appendChild(radioInput);
    answerItem.appendChild(document.createTextNode(answer));
    answerList.appendChild(answerItem);
  });
  quizContainer.innerHTML = "";
  quizContainer.innerHTML = `
    <div>
      <h3>Quiz Questions</h3>
    </div>`;
  quizContainer.appendChild(questionElement);
  quizContainer.appendChild(answerList);
}

function checkAnswer() {
  const selectedAnswer = document.querySelector('input[name="answer"]:checked');

  if (selectedAnswer) {
    const answer = selectedAnswer.value;
    const correctAnswer = quizQuestions[currentQuestionIndex].correctAnswer;

    if (answer === correctAnswer) {
      totalScore += 1;
      selectedAnswer.parentNode.style.color = "green";
      totalScoreEl.innerHTML = `
      <div>
        <h4>score - ${totalScore}</h4>
      </div>`;
      checkButton.disabled = true; // Disable the selected answer
    } else {
      selectedAnswer.parentNode.style.color = "red";
    }
  } else {
    alert("Please select an answer before checking.");
  }
}

nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  checkButton.disabled = false;
  if (currentQuestionIndex < quizQuestions.length) {
    displayQuestion(currentQuestionIndex);
  } else {
    alert(`End of the quiz. score - ${totalScore}`);
    currentQuestionIndex = -1;
    quizContainer.innerHTML = "";
    totalScoreEl.innerHTML = `
    <div>
      <h4>score - ${totalScore}</h4>
    </div>`;
  }
});

checkButton.addEventListener("click", checkAnswer);
nextButton.click();
