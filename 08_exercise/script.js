var questions = [
  {
    question: "What is your name?",
    options: ["abc", "def", "ghi", "jkl"],
    answer: "abc",
  },
  {
    question: "What is your name?",
    options: ["abc", "def", "ghi", "jkl"],
    answer: "abc",
  },
  {
    question: "What is your name?",
    options: ["abc", "def", "ghi", "jkl"],
    answer: "abc",
  },
  {
    question: "What is your name?",
    options: ["abc", "def", "ghi", "jkl"],
    answer: "abc",
  },
  {
    question: "What is your name?",
    options: ["abc", "def", "ghi", "jkl"],
    answer: "abc",
  },
];

var counter = 0;

function displayOneQuestion() {
  var qstn = questions[counter];
  var p = document.getElementById("question");
  document.getElementById("question-title").innerText = `Question ${
    counter + 1
  }`;
  var p = (document.getElementById("question").innerText = qstn.question);
  for (let a = 0; a < qstn.options.length; a++) {
    document.getElementById(`option${a}`).innerText = qstn.options[a];
  }
}

displayOneQuestion();
// ?? how can we send arrayItem here
function checkAnswer(idOfuserChoice) {
  let userChoice = document.getElementById(idOfuserChoice);
  let index = qstn.options.indexOf(qstn.answer);
  if (arrayItem.answer != userChoice.textContent) {
    userChoice.style.color = "red";
    document.getElementById(`option${index}`).style.color = green;
  } else {
    document.getElementById(`option${index}`).style.color = green;
  }
}
