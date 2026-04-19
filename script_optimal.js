(() => {
    // Encapsulated State
    let humanScore = 0;
    let computerScore = 0;
    let gameActive = true;

    const container = document.querySelector(".container");

    // 1. Setup DOM Elements logically: Buttons -> Round Feedback -> Score -> Replay
    const buttonContainer = document.createElement("div");
    const roundFeedback = document.createElement("p"); 
    const scoreBoard = document.createElement("div");
    const winnerText = document.createElement("h3");
    const replayBtn = document.createElement("button");

    // Initialize reusable elements
    replayBtn.textContent = "Replay?";
    replayBtn.style.display = "none"; // Hide initially instead of destroying
    
    container.append(buttonContainer, roundFeedback, scoreBoard, winnerText, replayBtn);

    function getComputerChoice() {
        const choices = ["rock", "paper", "scissor"];
        return choices[Math.floor(Math.random() * choices.length)];
    }

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

    // Fix: Centralized reset logic
    function resetGame() {
        humanScore = 0;
        computerScore = 0;
        gameActive = true;
        scoreBoard.textContent = "Your Score: 0 | Bot Score: 0";
        roundFeedback.textContent = "Make your move!";
        winnerText.textContent = "";
        replayBtn.style.display = "none";
    }

    // Attach event listener to replay button ONCE
    replayBtn.addEventListener("click", resetGame);

    // Create Game Buttons
    ["Rock", "Paper", "Scissor"].forEach(text => {
        const btn = document.createElement("button");
        btn.textContent = text;
        btn.className = "game-btn"; // Handle padding/margin in CSS
        buttonContainer.appendChild(btn);
        
        btn.addEventListener("click", () => {
            if (!gameActive) return; 

            // Fix: Show the round result to the user, not the console
            const resultMsg = playRound(text, getComputerChoice());
            roundFeedback.textContent = resultMsg; 
            scoreBoard.textContent = `Your Score: ${humanScore} | Bot Score: ${computerScore}`;

            checkWinner();
        });
    });

    function checkWinner() {
        if (humanScore >= 5 || computerScore >= 5) {
            gameActive = false;
            if (humanScore > computerScore) {
                winnerText.textContent = "You won, now go code :D";
            } else {
                winnerText.textContent = "LoL, bot won!";
            }
            // Un-hide the persistent replay button
            replayBtn.style.display = "block";
        }
    }

    // Initialize the UI on first load
    resetGame();
})();

/*
Key Improvements
Logical Game State: Added a gameActive flag. This prevents the user from racking up scores after the game is officially over.

DRY (Don't Repeat Yourself): Replaced the 9 if/else blocks with a simple logic check for ties and a winsAgainst object.

String Handling: Fixed hc.toLowerCase() which previously did nothing because strings in JS are immutable.

UI Cleanup: The replay button now resets the gameActive state and clears the winner text properly.
*/