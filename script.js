//-----Flash Card App-----
// title
// start button - when they click that, show them a box
// in that box, have a flashcard appear
// then have a timer that counts down from 5 to show the answer
// create a variable to track current card index
// create a function that grabs the current card object and displays the question to the window
// when we show the answer, show a next button to allow the user to transition to the next card
// when the end of the card array has been reached, show the user a confirming asking if they would like to restart from the beginning
// if they confirm yes, reset card index to 0 and show first card
// if they confirm no, show a goodbye message

var cardDisplay = document.querySelector(".card-display");
var questionDisplay = document.querySelector("#question-display");
var timerDisplay = document.querySelector("#timer-display");
var answerDisplay = document.querySelector("#answer-display");

var startButton = document.querySelector("#start");
var nextButton = document.querySelector("next");

var currentCardIndex = 0;
var card = cards[currentCardIndex];

// create a variable to store the current timer count
var count = 5;

function promptUserToRestart () {
    var userChoice = confirm("Would you like to play again?");
     if (userChoice) {
        displayCard();
     } else {
        questionDisplay.innerHTML = "Thanks for playing!";
        answerDisplay.classList.add("hide");
        nextButton.classList.add("hide");
     }
}

function showAnswer() {
  console.log("SHOW");
  console.log(card.question);
  card = cards[currentCardIndex];
  answerDisplay.innerText = card.answer;
  timerDisplay.classList.add("hide");
  nextButton.classList.remove("hide");
  answerDisplay.classList.remove("hide");
  currentCardIndex++;



  if (currentCardIndex == cards.length) {
    currentCardIndex = 0;
    nextButton.classList.add("hide"),
    promptUserToRestart();

  }
}

function startTimer() {
  console.log("START");
  // create setInterval and store it to a variable
  timerDisplay.classList.remove("hide");
  timerDisplay.innerHTML = "5";
  var timer = setInterval(function () {
    count--;
    timerDisplay.innerHTML = count;
    if (!count) {
      clearInterval(timer);
      count = 5;
      showAnswer();
    }
  }, 1000);
}

function displayCard() {
  card = cards[currentCardIndex];
  // the entire object with the question AND answer
  // we are storing an object to card
  console.log(card);

  cardDisplay.classList.remove("hide");
  questionDisplay.innerHTML = card.question;
  answerDisplay.classList.add("hide");
  nextButton.classList.add("hide");
  timerDisplay.classList.remove("hide");
  startTimer();
}

function startFlashCards() {
  startButton.classList.add("hide");
  displayCard();
}

startButton.addEventListener("click", startFlashCards);
nextButton.addEventListener("click", displayCard);
