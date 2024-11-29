       /////game play
       function playgame(rounds) {
        let humanScore = 0; 
        let computerScore = 0;
        let currentRound = 0;
              /////computer play
        function getComputerChoice () {
            const choices = ["rock", "paper", "scissors"];
            const random = Math.floor(Math.random() * choices.length);    
            return choices [random];
        }
              /////game rules   
        function determineWinner(humanChoice, computerChoice) {
            if (humanChoice === computerChoice) {
                return "It is a tie!";
            } else if (
                (humanChoice === "rock" && computerChoice === "scissors") ||
                (humanChoice === "paper" && computerChoice === "rock") ||
                (humanChoice === "scissors" && computerChoice === "paper") 
            ) {
                return "You win!";
            } else {
                return "Computer wins!";        
            }
        } 
    
        const resultsDiv = document.getElementById(`result`);
                  ///display score 
        function displayScores (){
            resultsDiv.innerHTML += `<p>Human Score: ${humanScore}</p>`;
            resultsDiv.innerHTML += `<p>Computer Score: ${computerScore}</p>`;
    ////        resultsDiv.innerHTML += `<hr>`;
        }
                ///gameplay rounds
        function playRound(humanChoice) { 
            if (currentRound < rounds) {
                const computerChoice = getComputerChoice()
                resultsDiv.innerHTML += `<p>Player chose: ${humanChoice}</p>`;
                resultsDiv.innerHTML += `<p>Computer chose: ${computerChoice}</p>`;
    
                const result = determineWinner(humanChoice, computerChoice);
    
                if (result === "You win!") {
                    humanScore += 1;
                } else if (result === "Computer wins!") {
                    computerScore += 1;
                }
                currentRound++;    
                displayScores ();
    
            if (currentRound === rounds) {
                resultsDiv.innerHTML += `<p>Score</p>`;
                displayScores ();
            resultsDiv.innerHTML += `<p>All rounds have been played</p>`;
            }
            }
        }    
        // Buttons
        const rockButton = document.getElementById('Rock');
        rockButton.addEventListener('click', () => {
            playRound('rock');
        });
        const paperButton = document.getElementById('Paper');
        paperButton.addEventListener('click', () => {
            playRound('paper');
        });
        const scissorsButton = document.getElementById('Scissors');
        scissorsButton.addEventListener('click', () => {
            playRound('scissors');
        });
    }    
    playgame(5);
       