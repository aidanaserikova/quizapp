const data = [
  {
    question: "How old is Florin?",
    a: "10",
    b: "17",
    c: "26",
    d: "110",
    correctAnswer: 2,
  },
  {
    question: "How old is Aidana?",
    a: "11",
    b: "20",
    c: "40",
    d: "110",
    correctAnswer: 1,
  },
  {
    question: "How old is Aizhan",
    a: "13",
    b: "16",
    c: "46",
    d: "110",
    correctAnswer: 0,
  },
  {
    question: "How old is Madina?",
    a: "89",
    b: "46",
    c: "34",
    d: "110",
    correctAnswer: 3,
  },
  {
    question: "How old is JLO?",
    a: "66",
    b: "55",
    c: "12",
    d: "110",
    correctAnswer: 0,
  },
];

const question = document.querySelector(".question");
const optionA = document.querySelector(".quesA");
const optionB = document.querySelector(".quesB");
const optionC = document.querySelector(".quesC");
const optionD = document.querySelector(".quesD");
const submit = document.querySelector("button");
const quiz = document.querySelector(".questions");

let correctCounter = 0;
let indexOfTest = 0;

question.innerText = data[0].question;
optionA.children[1].innerText = data[indexOfTest].a;
optionB.children[1].innerText = data[indexOfTest].b;
optionC.children[1].innerText = data[indexOfTest].c;
optionD.children[1].innerText = data[indexOfTest].d;

submit.addEventListener("click", next);

function next() {
  if (
    optionA.children[0].checked ||
    optionB.children[0].checked ||
    optionC.children[0].checked ||
    optionD.children[0].checked
  ) {
    let answers = [
      optionA.children[0].checked,
      optionB.children[0].checked,
      optionC.children[0].checked,
      optionD.children[0].checked,
    ];
    let answer = answers.indexOf(true);
    if (answer === data[indexOfTest].correctAnswer) {
      correctCounter++;
    }
  }

  indexOfTest++;

  if (indexOfTest === data.length - 1) {
    submit.innerText = "Check score";
  }

  if (indexOfTest === data.length) {
    quiz.innerHTML = `
    <div class="end"> THE END !!! </div>
    <div class="score"> Your score is: ${correctCounter} </div>
    `;
  } else {
    if (
      optionA.children[0].checked ||
      optionB.children[0].checked ||
      optionC.children[0].checked ||
      optionD.children[0].checked
    ) {
      question.innerText = data[indexOfTest].question;
      optionA.children[1].innerText = data[indexOfTest].a;
      optionB.children[1].innerText = data[indexOfTest].b;
      optionC.children[1].innerText = data[indexOfTest].c;
      optionD.children[1].innerText = data[indexOfTest].d;
      optionA.children[0].checked = false;
      optionB.children[0].checked = false;
      optionC.children[0].checked = false;
      optionD.children[0].checked = false;
    } else {
      alert("Pick answer!");
    }
  }
}
