// ROCK < PAPER < SCISSOR

// Same as script.js with few changes:
// 1. the isGameActive flag addition
// 2. multiple elements appended in 1 using container.append()
// 3. removed unnecessary cmnts

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

function playRound(hc,cc){ // humanchoice and computerchoice
    
    // hc.toLowerCase(); // This does nothing. Strings are immutable.
    hc = hc.toLowerCase(); // This is what actually does the job.
    
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

/* BETTER FUNCTION LOGIC

    function playRound(hc, cc) {
        hc = hc.toLowerCase();
        
        // Fix: Do not increment scores on a tie
        if (hc === cc) return `It's a tie! Both chose ${hc}.`;

        const winsAgainst = {
            rock: "scissor",
            paper: "rock",
            scissor: "paper"
        };

        if (winsAgainst[hc] === cc) {
            humanScore++;
            return `You win! ${hc} beats ${cc}.`;
        } else {
            computerScore++;
            return `You lose! ${cc} beats ${hc}.`;
        }
    }
*/


const container = document.querySelector(".container");
const r = document.createElement("button");
const p = document.createElement("button");
const s = document.createElement("button");
r.textContent = "rock";
p.textContent = "paper";
s.textContent = "scissor";

const divres = document.createElement("div"); // div to show result
const winnertxt = document.createElement("h3");
const replaydiv = document.createElement("div");

//          USE OF .APPEND()    
container.append(r,p,s,divres,winnertxt,replaydiv);

let btns = document.querySelectorAll("button");

let isGameActive = true;

function checkWinner() {
  if (humanScore === 5 && computerScore < 5) {
    winnertxt.textContent = "you won, now go code :D";
    isGameActive = false;
    replaybtn();
  } else if (computerScore === 5 && humanScore < 5) {
    winnertxt.textContent = "lol, bot won!";
    isGameActive = false;
    replaybtn();
  } else if (humanScore === 5 && computerScore === 5) {
    winnertxt.textContent = "tied !!";
    isGameActive = false;
    replaybtn();
  };
}

btns.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        if(!isGameActive)return;
        else{
        const humanChoice = btn.textContent;
        // console.log(humanChoice);
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
        divres.textContent = `your Score = ${humanScore} , bot Score = ${computerScore}`;
        checkWinner();
        }
    })
})


function replaybtn(){
    const rplaybtn = document.createElement("button");
    rplaybtn.textContent = "Replay?"
    rplaybtn.addEventListener("click",()=>{
        humanScore = 0;
        computerScore = 0;
        divres.textContent = `your Score = ${humanScore} , bot Score = ${computerScore}`;
        // remove the replaybtn
        replaydiv.removeChild(rplaybtn);
        winnertxt.textContent = "";
        isGameActive = true;
    });
    //
 
    //     D.N.W (does not work)
    // btns.forEach((btn)=>{
    // btn.addEventListener("click",()=>{
    //     alert("Game Over, hit the replay button to play again!");
    // }); 
    //
    replaydiv.appendChild(rplaybtn);

}

// styling optional
r.style.padding = "4px";
r.style.margin = "4px";

p.style.padding = "4px"
p.style.margin = "4px";

s.style.padding = "4px"
s.style.margin = "4px";





