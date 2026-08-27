// var places
const sex = document.getElementById("SEX") ;
const violence = document.getElementById("VIOLENCE") ;
const poop = document.getElementById("POOP") ;

const humanScoreDisplay = document.getElementById("human-score-box") ;
const computerScoreDisplay = document.getElementById("computer-score-box") ;
const roundResult = document.getElementById("round-result") ;
let humanScore = 0 ;
let computerScore = 0 ;

function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * (3 - 1 +1) + 1);
  switch (randomNumber) {
    case 1 :
        return "SEX"
    case 2 :
        return "VIOLENCE"
    case 3 :
        return "POOP"
  }
}

function playRound(humanChoice, computerChoice) {
        
        // playRound core
        if (humanChoice === computerChoice) {
            roundResult.textContent = `That's a tie. You both chose ${computerChoice} !` ;
        }
        
        else if (
        (humanChoice === 'SEX' && computerChoice === 'POOP') ||
        (humanChoice === 'POOP' && computerChoice === 'VIOLENCE') ||
        (humanChoice === 'VIOLENCE' && computerChoice === 'SEX') ) {
            humanScore++ ;
            roundResult.textContent = `Take that. ${humanChoice}  always beats ${computerChoice} !` ;
        }

        else {
            computerScore++ ;
            roundResult.textContent = `Life's hard. Never forget that ${computerChoice} beats ${humanChoice} !` ;
        }
        
        humanScoreDisplay.textContent = `${humanScore}`;
        computerScoreDisplay.textContent = `${computerScore}`;
    }

// click events on buttons
sex.addEventListener('click', () => playRound(SEX.id , getComputerChoice()));
violence.addEventListener('click', () => playRound(VIOLENCE.id , getComputerChoice()));
poop.addEventListener('click', () => playRound(POOP.id , getComputerChoice()));

// Alert if score is 5 and ask for regame 
