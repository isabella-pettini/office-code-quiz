// Variables
var timer;
// var score = 0;
var currentQIndex = 0;
var time = questions;
var displayTime = document.getElementById('timer');
var questionEl = document.getElementById('questions');
var startButton = document.getElementById('start');
var submitButton = document.getElementById('submit');
var choicesEl = document.getElementById('choices');
var initialsEl = document.getElementById('initials');
var feedbackEl = document.getElementById('feedback')


// Questions

var questions = [
  {
    title: "What was the name of Michael Scott's Action Film?",
    choices: ["Scott's Tots", "Threat Level Midnight", "Toby's Going Away", "That's What She Said"],
    answer: "Threat Level Midnight",
  },
  {
    title: "Question, what kind of bear is best?",
    choices: ["Brown", "Polar", "Black", "Grizzly"],
    answer: "Black",
  },
  {
    title: "Who gives Dwight a bobble-head of himself for Valentines Day?",
    choices: ["Jim", "Michael", "Creed", "Angela"],
    answer: "Angela",
  },
  {
    title: "How did Michael hurt his foot?",
    choices: ["On a George Foreman Grill", "A bat bit him", "Toby", "Parkour"],
    answer: "On a George Foreman Grill",
  },
  {
    title: "What is the name of the competing company Michael creates after quitting Dunder Mifflin?",
    choices: ["Wonder-Paper", "Hammermill", "The Michael Scott Paper Company", "Scrantonicity"],
    answer: "The Michael Scott Paper Company",
  },
  {
    title: "What is the name of the club Pam, Oscar and Toby create?",
    choices: ["The Great Things Club", "The Finer Things Club", "The Dunder Mifflin Club", "The Office Pals"],
    answer: "The Finer Things Club",
  },
  {
    title: "Erin rated Holly a _____ out of 40.",
    choices: ["16", "20", "8", "23"],
    answer: "16",
  },
  {
    title: "What are the names of Jim and Pam's children?",
    choices: ["Peepee and George", "Kelly and Oscar", "Ceecee and Dwight", "Cecelia and Phillip"],
    answer: "Cecelia and Phillip",
  },
  {
    title: "Which of Angela's cats were in the office when Dwight started the fire?",
    choices: ["Ember", "Sprinkles", "Bandit", "Lumpy"],
    answer: "Bandit",
  },
  {
    title: "What band was Creed Bratton in?",
    choices: ["The Grateful Dead", "Scrantonicity", "Electric City", "The Grass Roots"],
    answer: "The Grass Roots",
  },
];

// Game function
function start() {
  var startQuiz = document.getElementById('start-quiz');
  startQuiz.setAttribute('class', 'hide');
  questionEl.removeAttribute('class');
  timer = setInterval(1000);
  showQ();
}

// Questions function
function showQ() {
  var currentQ = questions[currentQIndex];  
  var titleEl = document.getElementById('question');
  titleEl.textContent = currentQ.title;
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

// function for right/wrong
function questionSetup(event) {
  var buttonEl = event.target;
  if (buttonEl.value !== questions.answer) {
    feedbackEl.textContent = 'False';
  } else {
    feedbackEl.textContent = 'Thats What She Said';
  }
  currentQIndex++;
  if (currentQIndex === questions.length) {
    endQuiz();
  } else {
    showQ();
  }
}

// end quiz function
function endQuiz() {
  clearInterval(timer);
  var endGame = document.getElementById('end-quiz');
  endGame.removeAttribute('class');
  var finalScore = document.getElementById('score');
  finalScore.textContent = time;
  questionEl.setAttribute('class', 'hide');
}

// Save score
function saveScore () {
  var initials = initialsEl.value;
  if (initials !== "") {
    var highscore = JSON.parse(window.localStorage.getItem('highscores')) || [];
    var newHS = { 
      score: time,
      initials: initials,
    };
    highscore.push(newHS);
    window.localStorage.setItem('highscores', JSON.stringify(highscore));
    window.location.href ='scores.html';
}
}
// start button
startButton.onclick = start;
// answers button
choicesEl.onclick = questionSetup;
// initials button
submitButton.onclick = saveScore;