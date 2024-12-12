'use strict';
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const cur0El = document.querySelector('#current--0');
const cur1El = document.querySelector('#current--1');
const dice = document.querySelector('.dice');
const rollBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');
const newBtn = document.querySelector('.btn--new');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
let cur = 0;
let score0 = 0;
let score1 = 0;
let activePlayer = 0;
let diceNum;
dice.classList.add('hidden');
score0El.textContent = 0;
score1El.textContent = 0;
const rollDice = function () {
  if (score0 < 100 && score1 < 100) {
    if (dice.classList.contains('hidden')) dice.classList.remove('hidden');
    diceNum = Math.floor(Math.random() * 6) + 1;
    console.log(diceNum);
    dice.src = `dice-${diceNum}.png`;
    updateCurrentScore(diceNum);
  }
};
const updateCurrentScore = function (roll) {
  if (roll != 1) {
    cur += roll;
    console.log(activePlayer);
    document.querySelector(`#current--${activePlayer}`).textContent = cur;
  }
  if (roll === 1) {
    document.querySelector(`#current--${activePlayer}`).textContent = 0;
    switchPlayer();
  }
};
const switchPlayer = function () {
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--active');
  cur = 0;
  document.querySelector(`#current--${activePlayer}`).textContent = 0;
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--active');
  activePlayer === 1 ? (activePlayer = 0) : (activePlayer = 1);
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.add('player--active');
};
const holdScore = function () {
  if (score0 < 100 && score1 < 100) {
    activePlayer === 0
      ? ((score0 += cur),
        (document.querySelector(`#score--0`).textContent = score0))
      : ((score1 += cur),
        (document.querySelector(`#score--1`).textContent = score1));
    score0 < 100 && score1 < 100 ? switchPlayer() : win();
  }
};

const win = function () {
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.add('player--win');
  document.querySelector(`.dice`).classList.add('hidden');
  cur0El.textContent = 0;
  cur1El.textContent = 0;
};
const newGame = function () {
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--win');
  if (activePlayer === 1) switchPlayer();
  cur = 0;
  score0 = 0;
  score1 = 0;
  activePlayer = 0;
  if (!dice.classList.contains('hidden')) dice.classList.add('hidden');
  score0El.textContent = 0;
  score1El.textContent = 0;
  cur0El.textContent = 0;
  cur1El.textContent = 0;
};
rollBtn.addEventListener('click', rollDice);
holdBtn.addEventListener('click', holdScore);
newBtn.addEventListener('click', newGame);
