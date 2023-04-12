//Game Functions Section

//Greeting the player and user friendly alerts
function playerIntroduction() {
    playerName = prompt("🌟 Hey there! Nice to meet ya! What's your name? 🌟");
    if((playerName == null ) || (playerName.trim() == "")) {
        alert("😱 So, I'm scared of ghosts! 👻 And I won't be playing with one!! Byeee!💨");
        validRound = 5;
        gameOver(2);
    } else {
        playerName = playerName.trim();
        let firstLetter = playerName.charAt(0).toUpperCase();
        playerName = firstLetter + playerName.slice(1);
        alert(`Hi, ${playerName}! Let's play some Rock-Paper-Scissors, shall we? Best of 5, okay? 🤩`);
    }
}

//Handle the number of rounds
function gameRoundHandle() {
    while(validRound < 5) {
        gameStart();
    }
    if (exitFlag == 0) {
        gameOver();
    }
}

function gameStart() {
    playerPlay();
}

//Choice of computer and player
function computerPlay() {
    const computerRandomPlay = playArray[Math.floor(Math.random() * 3)];
    return computerRandomPlay;
}

function playerPlay() {
    let playerPlay = prompt("So, choose your weapon! (Rock 🪨, Paper 📄 or Scissors ✂️!)");
    if(playerPlay === null) {
        gameOver(1);
    } else {
        let playerSelection = playerPlay.trim().toLowerCase();
        errorCheck(playerSelection);
    }
}

//Validate the player selection
function errorCheck(playerOption) {
    if(playArray.includes(playerOption)) {
        const computerSelection = computerPlay(playArray);
        playRound(playerOption, computerSelection);
        validRound++;
        console.log(`Round: ${validRound} - ${playerName}: ${playerScore} ✖️ Computer: ${computerScore}`);
    } else {
        alert("❌ Error! Please check your choice again! ❌");
    } 
}

//Compare, confirm and check each round after player's entry 
function playRound(playerSelection, computerSelection) {
    let roundMessage = `${playerName}: ${playerSelection} ⚔️ Computer: ${computerSelection}`;

    switch(playerSelection) {
        case "rock":
            if(computerSelection == "rock") {
                alert(roundMessage);
                alert("It's a tie! 👔 Nobody gets a point!");
            } else if(computerSelection == "paper") {
                alert(roundMessage);
                alert("You lose! 💀");
                computerScore++;
            } else {
                alert(roundMessage);
                alert("You win! 🌟");
                playerScore++;
            }
            break;

        case "paper":
            if(computerSelection == "paper") {
                alert(roundMessage);
                alert("It's a tie! 👔 Nobody gets a point!");
            } else if(computerSelection == "scissors") {
                alert(roundMessage);
                alert("You lose! 💀");
                computerScore++;
            } else {
                alert(roundMessage);
                alert("You win! 🌟");
                playerScore++;
            }
            break;
        
        case "scissors":
            if(computerSelection == "scissors") {
                alert(roundMessage);
                alert("It's a tie! 👔 Nobody gets a point!");
            } else if(computerSelection == "rock") {
                alert(roundMessage);
                alert("You lose! 💀");
                computerScore++;
            } else {
                alert(roundMessage);
                alert("You win! 🌟");
                playerScore++;
            }
    }
}

//Check the end of the game
function gameOver(flag) {
    if(flag == 1) {
        let confirmExit = confirm("🤨 Cancelling your play?? Are you sure you wanna quit?");
        if(confirmExit) {
            alert("So you don't wanna play anymore with me? 🥲 Okay then, bye! 👋🏻");
            console.log("--Game finished--");
            validRound = 5;
            exitFlag = 1;
        } else {
            alert("Nice! Let's continue then! 😏");
            gameRoundHandle();
        }
    } else if (flag == 2) {
        console.log("The computer ran away!");
        exitFlag = 2;
    } else {
        let finalScoreMessage = `🏅 Final Score - ${playerName}: ${playerScore} ⚔️ Computer: ${computerScore} 🏅`;
        if(playerScore > computerScore) {
            alert("🌟 Congrats! You won! Well played! 🎉");
            alert(finalScoreMessage);
            console.log("--Game finished--");
            playAgain();
        } else if(playerScore < computerScore) {
            alert("Oops! Sorry mate, but you lost! 😎");
            alert(finalScoreMessage);
            console.log("--Game finished--");
            playAgain();
        } else {
            alert("It's a tie! 😅");
            alert(finalScoreMessage);
            console.log("--Game finished--");
            playAgain();
        }
    }
}

//Confirm the next match
function playAgain() {
    let nextMatch = confirm("Wanna play again? ⚔️");
    if (nextMatch) {
        validRound = 0;
        playerScore = 0;
        computerScore = 0;
        gameRoundHandle();
    } else {
        alert("Okay then! See you next time! Bye! 👋🏻");
    }
}
//End of Game Functions Section

let playerName = "";
let playerScore = 0;
let computerScore = 0;
let validRound = 0;
let exitFlag = 0;

const playArray = ["rock", "paper", "scissors"];

//Game Initialization
alert("First of all, please open your Console (Press F12) so we can start our game! 🤓");
playerIntroduction();

gameRoundHandle();