'use strict';

let secretNumber = Math.trunc(Math.random()*20) + 1
//console.log(secretNumber)
//document.querySelector('.number').textContent = secretNumber

let message = "Start guessing..."
//console.log(message)

let score = 20
let highscore = 0

// checkButton
document.querySelector('.check').addEventListener('click', function(){
  const guess = Number(document.querySelector('.guess').value)
  //console.log(guess, typeof guess)

  if(!guess){
    document.querySelector('.message').textContent = "No number!"

  }else if(guess === secretNumber){
    document.querySelector('.message').textContent = "Correct Number!"
    document.querySelector('.number').textContent = secretNumber
    // for style
    document.querySelector('body').style.backgroundColor = 'green'
    document.querySelector('.number').style.width = '30rem';
    
    if(score>highscore){
      highscore=score
      document.querySelector('.highscore').textContent = score
    }
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 0

  }else if(guess !== secretNumber){
    if(score > 1){
      if(guess > secretNumber) {
        document.querySelector('.message').textContent = "Too high!"
      }else {
        document.querySelector('.message').textContent = "Too low!"
      }      
      score--
      document.querySelector('.score').textContent = score

    }else{
      document.querySelector('.message').textContent = "You lost the game!"
      document.querySelector('.score').textContent = 0;
    }
  }
})

// againButton
document.querySelector('.again').addEventListener('click', function(){
  score = 20
  highscore = 0
  message = "Start guessing..."
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.score').textContent = score
  document.querySelector('.highscore').textContent = highscore
  document.querySelector('.message').textContent = message
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').textContent = '';

  // for style
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
})