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
        
    if(result === 1){
        announcement.textContent = (`You draw`)
    }
    else if(result === 2){
        announcement.textContent =(`You win.${playerChoice} beats ${computerChoice}`);
        comChoiceAnnouncement.textContent = (`Computer choice: ${computerChoice}`);
        updateScore(2);
    }
    else{
        announcement.textContent =(`You lose.${playerChoice} was beaten by ${computerChoice}`);
        comChoiceAnnouncement.textContent = (`Computer choice: ${computerChoice}`);
        updateScore(3);
    }
    body.appendChild(comChoiceAnnouncement);
    body.appendChild(announcement);
}
function scoreBoard(matchNo){
    console.log(`\t\t Round ${matchNo}`);
    console.log(`computer: ${comScore}\t\t player:${playerScore}`);
}
function match(playerChoice){
    comChoiceAnnouncement.textContent ="";
    const comChoice = computerPlay();
    decideWhoWin(comChoice,playerChoice);
    playerScoreboard.textContent = playerScore;
    comScoreboard.textContent = comScore;
}



let comScore=0, playerScore=0;
// DOM manipulation
const body = document.querySelector('body');
const playerScoreboard = document.querySelectorAll('h3')[0];
const comScoreboard = document.querySelectorAll('h3')[1];
const rock = document.querySelector(".rock");
const scissors = document.querySelector(".scissors");
const paper = document.querySelector(".paper");
const announcement = document.createElement('p'); // p display match result at the end of round
const comChoiceAnnouncement = document.createElement('p');// display the computer's choice
//////////////////////

rock.addEventListener('click', () => {
    match('rock');
})
rock.addEventListener('mouseover',() => {
    rock.classList.add('choosing');
})
rock.addEventListener('mouseleave',() => {
    rock.classList.remove('choosing');
})
scissors.addEventListener('click', () => {
    match('scissors');
})
scissors.addEventListener('mouseover',() => {
    scissors.classList.add('choosing');
})
scissors.addEventListener('mouseleave',() => {
    scissors.classList.remove('choosing');
})
paper.addEventListener('click', () => {
    match('paper');
})
paper.addEventListener('mouseover',() => {
    paper.classList.add('choosing');
})
paper.addEventListener('mouseleave',() => {
    paper.classList.remove('choosing');
})













