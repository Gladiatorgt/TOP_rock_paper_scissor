// ROCK < PAPER < SCISSOR

console.log("hi");

let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    // Math.random returns [0,1)
    let x = Math.random();
    if(x>=0 && x<(1/3)){
        return "rock";
    }
    else if(x>=(1/3)&& x<(2/3)){
        return "paper";
    }
    else return "scissor";
}

// console.log(getComputerChoice()); fr test

function getHumanChoice(){
    let inp = window.prompt("what is it hooman? rock/paper/scissor?")
    return inp;
}

// console.log(getHumanChoice()); fr test

function playRound(hc,cc){ // humanchoice and computerchoice
    hc.toLowerCase();
    if(hc=="rock"&&cc=="paper"){
        console.log("Lost, paper beats rock");
        computerScore++;
    }
    else if(hc=="rock" && cc =="rock"){
        console.log("tied");
        humanScore++;
        computerScore++;
    }
    else if(hc=="rock" && cc =="scissor"){
        console.log("win, rock beats scissors");
        humanScore++;
    }
    else if(hc=="paper" && cc =="scissor"){
        console.log("lose, paper beaten by scissors");
        computerScore++;
    }
    else if(hc=="paper" && cc =="rock"){
        console.log("win, rock beaten by paper");
        humanScore++;
    }
     else if(hc=="paper" && cc =="paper"){
        console.log("tied");
        humanScore++;
        computerScore++;
    }
    else if(hc=="scissor" && cc =="rock"){
        console.log("lose, rock beats scissors");
        computerScore++;
    }
    else if(hc=="scissor" && cc =="paper"){
        console.log("win, paper beaten by scissors");
        humanScore++;
    }
    else if(hc=="scissor" && cc =="scissor"){
        console.log("tied");
        humanScore++;
        computerScore++;
    }
}

// const humanSelection = getHumanChoice();
// const computerSelection = getComputerChoice();

function playGame(){
    let i = 0;
    while(i<5){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        i++;
    }

    if(humanScore>computerScore){
        console.log(`you won! your score = ${humanScore}, com score = ${computerScore}`);
    }
    else if(humanScore<computerScore){
        console.log(`you Lost! your score = ${humanScore}, com score = ${computerScore}`);
    }
    else console.log("tied!");
}


// play :

// one round:
// playRound(humanSelection, computerSelection);

// 5 times :
playGame();