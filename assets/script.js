// Variables
var timer;
var score = 0;
var currentQIndex = 0;
var time = questions;
var displayTime = document.getElementById('timer');
var questionEl = document.getElementById('questions');
var startButton = document.getElementById('start');
var submitButton = document.getElementById('submit');
var choicesEl = document.getElementById('choices');
var initialsEl = document.getElementById('initials')


// Questions

var questions = [
  {
    title: "What was the name of Michael Scott's Action Film?",
    choices: ["A: Scott's Tots", "B: Threat Level Midnight", "C: Toby's Going Away", "D: That's What She Said"],
    correct: "B: Threat Level Midnight"
  },
  {
    title: "Question, what kind of bear is best?",
    choices: ["A: Brown", "B: Polar", "C: Black", "D: Grizzly"],
    correct: "C: Black"
  },
  {
    title: "Who gives Dwight a bobble-head of himself for Valentines Day?",
    choices: ["A: Jim", "B: Michael", "C: Creed", "D: Angela"],
    correct: "D: Angela"
  },
  {
    title: "How did Michael hurt his foot?",
    choices: ["A: On a George Foreman Grill", "B: A bat bit him", "C: Toby", "D: Parkour"],
    correct: "A: On a George Foreman Grill"
  },
  {
    title: "What is the name of the competing company Michael creates after quitting Dunder Mifflin?",
    choices: ["A: Wonder-Paper", "B: Hammermill", "C: The Michael Scott Paper Company", "D: Scrantonicity"],
    correct: "C: The Michael Scott Paper Company"
  },
  {
    title: "What is the name of the club Pam, Oscar and Toby create?",
    choices: ["A: The Great Things Club", "B: The Finer Things Club", "C: The Dunder Mifflin Club", "D: The Office Pals"],
    correct: "B: The Finer Things Club"
  },
  {
    title: "Erin rated Holly a _____ out of 40.",
    choices: ["A: 16", "B: 20", "C: 8", "D: 23"],
    correct: "A: 16"
  },
  {
    title: "What are the names of Jim and Pam's children?",
    choices: ["A: Peepee and George", "B: Kelly and Oscar", "C: Ceecee and Dwight", "D: Cecelia and Phillip"],
    correct: "D: Cecelia and Phillip"
  },
  {
    title: "Which of Angela's cats were in the office when Dwight started the fire?",
    choices: ["A: Ember", "B: Sprinkles", "C: Bandit", "D: Lumpy"],
    correct: "C: Bandit"
  },
  {
    title: "What band was Creed Bratton in?",
    choices: ["A: The Grateful Dead", "B: Scrantonicity", "C: Electric City", "D: The Grass Roots"],
    correct: "D: The Grass Roots"
  },
];

// Game function
function start() {
  var startQuiz = document.getElementById('start-quiz');
  startQuiz.setAttribute('class', 'hide');
  questionEl.removeAttribute('class');
  timer = setInterval(countDown, 1000);
  // displayTime.textContent = time;
  showQ();
}

// Questions function
function showQ() {
  var currentQ = questions[currentQIndex];  
  var askQ = document.getElementById('question');
  askQ.textContent = currentQ.title;
  choicesEl.innerHTML = '';
  // for loop to go over answer choices
  for (var i = 0; i  < currentQ.choices.length; i++) {
    var answer = currentQ.choices[i];
    var answerBtn = document.createElement('button');
    answerBtn.setAttribute('class', 'choice');
    answerBtn.setAttribute('class', answer);
    answerBtn.textContent = i + 1 + '. ' + answer;
    choicesEl.appendChild(answerBtn);
  }
}

// timer countdown function
function countDown() {
  time--;
  // displayTime.textContent = time;
  if (time = 0) {
    endQuiz();
  }
}


function questionSetup(event) {
  var buttonEl = event.target;
  if (!buttonEl.matches('.choice')) {
    return;
  }
  if (buttonEl.value !== questions [currentQIndex].answer) {
    time -= 15;
    if (time < 0) {
      time = 0;
    }
    displayTime.textContent = time;
    feedbackEl.textContent = 'False';
  } else {
    feedbackEl.textContent = 'Thats What She Said';
  }

  feedbackEl. setAttribute('class', 'feedback');
  setTimeout(function () {
    feedbackEl.setAttribute('class', 'feedback hide'); 
  }, 1000);
  currentQIndex++;
  if (time <= 0 || currentQIndex === questions.length) {
    endQuiz();
  } else {
    showQ();
  }
}

// end quiz function
function endQuiz() {
  clearInterval(timer);
  var endGame = document.getElementById('end-screen');
  endGame.removeAttribute('class');
  var finalScore = document.getElementById('final-score');
  finalScore.textContent = time;
  questionEl.setAttribute('class', 'hide');
}

// Save score
function saveScore () {

}

// start button
startButton.onclick = start;
// answers button
choicesEl.onclick = questionSetup;
// initials button
