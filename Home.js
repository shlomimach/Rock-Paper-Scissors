let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
  };
  
  updateScoreElement();
  
  
  function playGame(playerMove) {
    const computerMove = pickComputerMove();
  
    let result = '';
  
    if (playerMove === 'scissors') {
      if (computerMove === 'rock') {
        result = 'אתה הפסדת.';
      } else if (computerMove === 'paper') {
        result = 'אתה ניצחת.';
      } else if (computerMove === 'scissors') {
        result = 'תיקו.';
      }
  
    } else if (playerMove === 'paper') {
      if (computerMove === 'rock') {
        result = 'אתה ניצחת.';
      } else if (computerMove === 'paper') {
        result = 'תיקו.';
      } else if (computerMove === 'scissors') {
        result = 'אתה הפסדת.';
      }
      
    } else if (playerMove === 'rock') {
      if (computerMove === 'rock') {
        result = 'תיקו.';
      } else if (computerMove === 'paper') {
        result = 'אתה הפסדת.';
      } else if (computerMove === 'scissors') {
        result = 'אתה ניצחת.';
      }
    }
  
    if (result === 'אתה ניצחת.') {
      score.wins += 1;
    } else if (result === 'אתה הפסדת.') {
      score.losses += 1;
    } else if (result === 'תיקו.') {
      score.ties += 1;
    }
  
    localStorage.setItem('score', JSON.stringify(score));
  
    updateScoreElement();
  
    document.querySelector('.js-result').innerHTML = result;
  
    document.querySelector('.js-moves').innerHTML = `אתה בחרת
  <img src="images/${playerMove}.JPG" class="move-icon">
  <img src="images/${computerMove}.JPG" class="move-icon">
  המחשב בחר`;
}
  
  function updateScoreElement() {
    document.querySelector('.js-score')
      .innerHTML = `ניצחון: ${score.wins}, הפסדים: ${score.losses}, תיקו: ${score.ties}`;
  }
  
  function pickComputerMove() {
    const randomNumber = Math.random();
  
    let computerMove = '';
  
    if (randomNumber >= 0 && randomNumber < 1 / 3) {
      computerMove = 'rock';
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
      computerMove = 'paper';
    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
      computerMove = 'scissors';
    }
  
    return computerMove;
  }
