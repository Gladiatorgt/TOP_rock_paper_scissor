// ROCK < PAPER < SCISSOR

// ​🇨​​🇴​​🇲​​🇵​​🇦​​🇷​​🇪​ ​🇼​​🇮​​🇹​​🇭​ ​🇴​​🇵​​🇹​​🇮​​🇲​​🇦​​🇱​

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

const container = document.querySelector(".container");

const r = document.createElement("button");
const p = document.createElement("button");
const s = document.createElement("button");

r.textContent = "rock";
p.textContent = "paper";
s.textContent = "scissor";

r.style.padding = "4px";
r.style.margin = "4px";

p.style.padding = "4px"
p.style.margin = "4px";

s.style.padding = "4px"
s.style.margin = "4px";



container.appendChild(r);
container.appendChild(p);
container.appendChild(s);

let btns = document.querySelectorAll("button");

/*
below Code from TOP lesson on DOM 

btns.forEach((btn)=>{
    btn.addEventListener("click",()=>{});
});
*/

btns.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        const humanChoice = btn.textContent;
        // console.log(humanChoice);
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
        // const divres = document.createElement("div");
        // const txtspan = document.createElement("span");
        // txtspan.textContent = `your Score = ${humanScore} , bot Score = ${computerScore}`;
        divres.textContent = `your Score = ${humanScore} , bot Score = ${computerScore}`;
        // divres.appendChild(txtspan);
        // container.appendChild(divres);

        if(humanScore===5 && computerScore<5){
            // alert("you won, now go code :D");
            winnertxt.textContent = "you won, now go code :D";
            replaybtn();
        }else if(computerScore===5 && humanScore<5){
            // alert("lol, bot won!");
            winnertxt.textContent = "lol, bot won!";
            replaybtn();
        }else if(humanScore === 5 && computerScore === 5) {
            // alert("tied!");
            winnertxt.textContent = "tied !!";
            replaybtn();
        };
        
    })
})

const divres = document.createElement("div");
container.appendChild(divres);

const winnertxt = document.createElement("h3");
container.appendChild(winnertxt);

const replaydiv = document.createElement("div");
container.appendChild(replaydiv)

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






