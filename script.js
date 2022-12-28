let playerScore = 0;
let computerScore = 0;
const play = document.getElementById('play');
const p = document.createElement('p');
const rules =  document.getElementById('rules');
const pagecontainer = document.querySelector('.page-container');
const rock = document.createElement('button');
const paper = document.createElement('button');
const scissors = document.createElement('button');
const divChoices = document.createElement('div');
const scoreDiv = document.createElement('div');
const bottomDiv = document.createElement('div');
const playerDiv = document.createElement('div');
const computerDiv = document.createElement('div');

function getComputerChoice(){
  switch(Math.floor(Math.random() * 3)){
    case 0:
        return 'Rock';
    case 1:
        return 'Paper';
    case 2:
        return 'Scissors';
  }
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
  } else if (playerSelection === 'Rock') {
      if (computerSelection === 'Scissors') {
        playerScore++;
      } else {
        computerScore++;
      }
  } else if (playerSelection === 'Paper') {
      if (computerSelection === 'Rock') {
        playerScore++;
      } else {
        computerScore++;
      }
  } else if (playerSelection === 'Scissors') {
      if (computerSelection === 'Paper') {
        playerScore++;
      } else {
        computerScore++;
      }
  }
}

play.addEventListener('click', function onClick(e) {
  document.body.style.background = 'none';
  document.body.style.backgroundColor = 'black';
  play.remove();
  showRules();
  createButtons();
  showScore(1);
  createGame();
});

function showRules() {
  rules.style.cssText = 'color: white; display: inline-block; font-family: "Roboto Mono", monospace';
  divRules= document.createElement('div');
  divRules.innerText = 'Rules';
  divRules.style.cssText = 'animation: reveal 0.5s; text-decoration: underline';
  rules.appendChild(divRules);
  ul = document.createElement('ul');
  ul.style.cssText = "text-align: start";
  rules.appendChild(ul);
  li1 = document.createElement('li');
  li1.innerText = "Rock beats Scissors"
  li1.style.cssText = 'animation: reveal 0.6s';
  li2 = document.createElement('li');
  li2.innerText = "Paper beats Rock"
  li2.style.cssText = 'animation: reveal 0.7s';
  li3 = document.createElement('li');
  li3.innerText = "Scissors beats Paper"
  li3.style.cssText = 'animation: reveal 0.8s';
  li4 = document.createElement('li');
  li4.innerText = "First to 5 points wins"
  li4.style.cssText = 'animation: reveal 0.9s; text-decoration: underline';
  ul.appendChild(li1);
  ul.appendChild(li2);
  ul.appendChild(li3);
  ul.appendChild(li4);
}

function createButtons() {
  rock.innerText = 'ROCK';
  paper.innerText = 'PAPER';
  scissors.innerText = 'SCISSORS'
  rock.setAttribute('id', 'Rock');
  paper.setAttribute('id', 'Paper');
  scissors.setAttribute('id', 'Scissors');
  divChoices.style.cssText = 'display: list-item';
  pagecontainer.appendChild(divChoices);
  divChoices.appendChild(rock);
  divChoices.appendChild(paper);
  divChoices.appendChild(scissors);
  const buttons = document.querySelectorAll('button');
  console.log(buttons);
  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      let computerChoice = getComputerChoice();
      playRound(button.id, computerChoice);
      showScore(0); 
      playerDiv.innerText = `You chose ${button.id}`;
      computerDiv.innerText = `Computer chose ${computerChoice}`;
    });
  });
}

function showScore(animate) {
  scoreDiv.innerHTML = 'Score' + '<br />' + `${playerScore}-${computerScore}`;
  if (animate === 1) {
    scoreDiv.style.cssText = "color: white; font-family: 'Roboto Mono', monospace; font-size: 40px; margin: 20px 0 20px 0; animation: reveal 1s; height = 100px";
  } else {
    scoreDiv.style.cssText = "color: white; font-family: 'Roboto Mono', monospace; font-size: 40px; margin: 20px 0 20px 0; height = 100px";
  }
  pagecontainer.appendChild(scoreDiv);
  playerDiv.style.cssText = "color: white; font-family: 'Roboto Mono', monospace; font-size: 20px; margin: 20px 0 20px 0; animation: reveal 1s; height = 100px";
  computerDiv.style.cssText = "color: white; font-family: 'Roboto Mono', monospace; font-size: 20px; margin: 20px 0 20px 0; animation: reveal 1s; height = 100px";
  bottomDiv.style.cssText = "display: flex; justify-content: space-around";
  pagecontainer.appendChild(bottomDiv);
  bottomDiv.appendChild(playerDiv);
  bottomDiv.appendChild(computerDiv);
}
