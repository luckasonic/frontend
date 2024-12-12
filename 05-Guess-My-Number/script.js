'use strict';
let gamestate = 0;
let secretNum = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
console.log(secretNum);
document.querySelector('.check').addEventListener('click', function () {
  if (gamestate === 0) {
    const guess = Number(document.querySelector('.guess').value);
    if (!guess) {
      document.querySelector('.message').textContent = 'No number!';
    } else if (guess === secretNum) {
      gamestate = 1;
      console.log(gamestate);
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.number').textContent = secretNum;
      document.querySelector('.message').textContent = 'Correct Number!';
      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }
    } else {
      if (score == 0) gamestate = -1;
      else {
        score--;
        document.querySelector('.score').textContent = score;
        guess > secretNum
          ? (document.querySelector('.message').textContent = 'Too High!')
          : (document.querySelector('.message').textContent = 'Too Low!');
      }
    }

    if (gamestate === -1) {
      document.querySelector('.message').textContent = 'You Lose!';
      document.querySelector('.number').textContent = secretNum;
      document.querySelector('body').style.backgroundColor = '#F60002';
      document.querySelector('.number').style.width = '30rem';
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.score').textContent = '20';
  document.querySelector('.guess').value = '';
  gamestate = 0;
  secretNum = Math.floor(Math.random() * 20) + 1;
  score = 20;
  console.log(secretNum);
});
