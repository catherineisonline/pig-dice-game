'use strict';
const score0Element = document.getElementById('score--0');
const score1Element = document.getElementById('score--1');
const playerZero = document.querySelector('.player--0');
const playerOne = document.querySelector('.player--1');
const playerZeroScores = document.getElementById('current--0');
const playerOneScores = document.getElementById('current--1');

const diceImg = document.querySelector('.dice');
const newGame = document.querySelector('.btn--new');
const rollDice = document.querySelector('.btn--roll');
const holdDice = document.querySelector('.btn--hold');

let scores, currentScore, activePlayer, playing;

//Function to initilize settings

const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  //Playing mode on
  playing = true;
  //Starting position
  score0Element.textContent = 0;
  score1Element.textContent = 0;
  //Scores reset
  playerZeroScores.textContent = 0;
  playerOneScores.textContent = 0;
  //Image hidden
  diceImg.classList.add('hidden');
  //Remove winner class
  playerZero.classList.remove('player--winner');
  playerOne.classList.remove('player--winner');
  //Remove active classes
  playerZero.classList.add('player--active');
  playerOne.classList.remove('player--active');
};

init();

//Function to switch player
const playerSwitching = function () {
  //changing active player and reseting total scores to 0 if they roll 1
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  //Toggle active player class to change interface
  playerZero.classList.toggle('player--active');
  playerOne.classList.toggle('player--active');
};

rollDice.addEventListener('click', function () {
  if (playing) {
    //Generate random dice
    const dice = Math.trunc(Math.random() * 6) + 1;
    //Display dice image
    diceImg.classList.remove('hidden');
    //Add random dice img to img src
    diceImg.src = `/images/dice-${dice}.png`;
    //Check whether it's 1 and change player
    if (dice !== 1) {
      //Keep the current score to the current active player
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      playerSwitching();
    }
  }
});

//Hold scores
holdDice.addEventListener('click', function () {
  if (playing) {
    //Add current score to active player's score
    scores[activePlayer] += currentScore;
    //scores[1] = scores[1] + currentScore;

    //Display the held score
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    //check if score is 100 and they won
    if (scores[activePlayer] >= 100) {
      //finish the game
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      diceImg.classList.add('hidden');
    } else {
      //switch player
      playerSwitching();
    }
  }
});

//Restart game
newGame.addEventListener('click', init);
