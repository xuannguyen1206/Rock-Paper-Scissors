function computerPlay(){
    let computerChoice = Math.floor(Math.random()*3)+1;
    if(computerChoice === 1){
        computerChoice = "rock";
    }
    else if(computerChoice === 2){
        computerChoice = "paper";
    }
    else{
        computerChoice = "scissors";
    }
    return computerChoice;
}

function decideWhoWin(comChoice,playerChoice){
    if((comChoice === "rock" || comChoice === "paper") && (playerChoice === "rock" || playerChoice === "paper")){  // rock paper scenario
        if(comChoice === playerChoice){
            announce(1);
        }
        else if(comChoice === "rock"){
            announce(2,comChoice,playerChoice);
        }
        else{
            announce(3,comChoice,playerChoice);
        }
    }
    if((comChoice === "rock" || comChoice === "scissors") && (playerChoice === "rock" || playerChoice === "scissors")){ // rock scissors scenario
        if(comChoice === playerChoice){
            announce(1);
        }
        else if(comChoice === "scissors"){
            announce(2,comChoice,playerChoice);
        }
        else{
            announce(3,comChoice,playerChoice);
        }
    }
    if((comChoice === "paper" || comChoice === "scissors") && (playerChoice === "paper" || playerChoice === "scissors")){ // paper scissors scenario
        if(comChoice === playerChoice){
            announce(1);
        }
        else if(comChoice === "paper"){
            announce(2,comChoice,playerChoice);
        }
        else{
            announce(3,comChoice,playerChoice);
        }
    }
}
function updateScore(res){
    if(res === 2){
        playerScore++;
    }
    else if(res === 3){
        comScore++;
    }
}

function announce(result,computerChoice="none",playerChoice="none"){
        
    const announcement = document.createElement('p');
    if(result === 1){
        announcement.textContent = (`You draw`)
    }
    else if(result === 2){
        announcement.textContent =(`You win.${playerChoice} beats ${computerChoice}`);
        updateScore(2);
    }
    else{
        announcement.textContent =(`You lose.${playerChoice} was beaten by ${computerChoice}`);
        updateScore(3);
    }
    body.appendChild(announcement);
}
function scoreBoard(matchNo){
    console.log(`\t\t Round ${matchNo}`);
    console.log(`computer: ${comScore}\t\t player:${playerScore}`);
}
function match(matchNum){
    for(let i= 1; i <= matchNum; i++){
        const playerChoice = window.prompt('Enter your choice:');
        const comChoice = computerPlay();
        decideWhoWin(comChoice,playerChoice);
        playerScoreboard.textContent = playerScore;
        comScoreboard.textContent = comScore;
    }
    console.log(`\t\t FINAL `);
    console.log(`computer: ${comScore}\t\t player:${playerScore}`);
}
let comScore=0, playerScore=0;
let numberOfMatches=window.prompt("Enter number of matches:");

// DOM manipulation

const playerScoreboard = document.querySelectorAll('h3')[0];
const comScoreboard = document.querySelectorAll('h3')[1];
const choices = Array.from(document.querySelectorAll('.wrapper'))

const body = document.querySelector('body');
//////////////////////
match(numberOfMatches);
