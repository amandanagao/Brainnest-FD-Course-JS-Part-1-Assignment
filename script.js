let playerName = prompt("🌟 Hey there! Nice to meet ya! What's your name?");
alert(`Hi, ${playerName}! Let's play some Rock-Paper-Scissors, shall we? 🤩`);

function gameStart() {
    let playerScore = 0;
    let computerScore = 0;
    let round = 0;

    for (let i = 0; i < 5; i++) {
        function computerPlay() {
            const computerRandomPlay = computerPlayArray[Math.floor(Math.random() * 3)];
            return computerRandomPlay;
        }

        function playRound(playerSelection, computerSelection) {
            if(playerSelection == computerSelection) {
                alert("It's a tie!");

            } else if(playerSelection == "rock") {
                if(computerSelection == "paper") {
                    alert("You lose! 💀");
                    computerScore++;
                } else {
                    alert("You win! 🌟");
                    playerScore++;
                }

            } else if(playerSelection == "paper") {
                if(computerSelection == "scissors") {
                    alert("You lose! 💀");
                    computerScore++;
                } else {
                    alert("You win! 🌟");
                    playerScore++;
                }

            } else if(playerSelection == "scissors") {
                if(computerSelection == "rock") {
                    alert("You lose! 💀");
                    computerScore++;
                } else {
                    alert("You win! 🌟");
                    playerScore++;
                }
            }
        }

        function gameOver() {
            if(playerScore > computerScore) {
                alert("🌟 Congrats! You won! Well played! 🎉");
            } else if(playerScore < computerScore) {
                alert("Oops! Sorry mate, but you lost! 😎");
            } else {
                alert("It's a tie! 😅");
            }
        }

        function errorCheck() {
            if((playerSelection !== "rock") && (playerSelection !== "paper") && (playerSelection !== "scissors")) {
                alert("Error! Please check your choice again! ❌");
            } else {
                round++;
                alert(`Round: ${round}`);
                alert(`${playerName}: ${playerSelection} ⚔️ Computer: ${computerSelection}`);
                playRound(playerSelection, computerSelection);
                console.log(`Round: ${round} - ${playerName}: ${playerScore} ✖️ Computer: ${computerScore}`);
            }
        }

        const computerPlayArray = ["rock", "paper", "scissors"];
        const playerPlay = prompt("So, choose your weapon! (Rock 🪨, Paper 📄 or Scissors ✂️!)");
        const playerSelection = playerPlay.trim().toLowerCase();
        const computerSelection = computerPlay(computerPlayArray);

        errorCheck();
    }

    gameOver();
}

gameStart();



