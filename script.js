//Game Functions Section
function gameStart() {
    playerPlay();
}

function computerPlay() {
    const computerRandomPlay = computerPlayArray[Math.floor(Math.random() * 3)];
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

function errorCheck(playerOption) {
    if((playerOption !== "rock") && (playerOption !== "paper") && (playerOption !== "scissors") && (playerOption !== null)) {
        alert("❌ Error! Please check your choice again! ❌");
    } else {
        const computerSelection = computerPlay(computerPlayArray);
        playRound(playerOption, computerSelection);
        validRound++;
        console.log(`Round: ${validRound} - ${playerName}: ${playerScore} ✖️ Computer: ${computerScore}`);
    }
}

function playRound(playerSelection, computerSelection) {
    let roundMessage = `${playerName}: ${playerSelection} ⚔️ Computer: ${computerSelection}`;

    switch(playerSelection) {
        case "rock":
            if(computerSelection == "rock") {
                alert(roundMessage);
                alert("It's a tie! 👔");
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
                alert("It's a tie! 👔");
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
                alert("It's a tie! 👔");
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

function gameOver(flag = null) {
    if(flag) {
        alert("🥲 So you don't wanna play anymore with me? Okay then, bye! 👋🏻");
        validRound = 5;
        exitFlag = 1;
    } else {
        let finalScoreMessage = `🏅 Final Score: ${playerName}: ${playerScore} ⚔️ Computer: ${computerScore} 🏅`;
        if(playerScore > computerScore) {
            alert("🌟 Congrats! You won! Well played! 🎉");
            alert(finalScoreMessage);
        } else if(playerScore < computerScore) {
            alert("Oops! Sorry mate, but you lost! 😎");
            alert(finalScoreMessage);
        } else {
            alert("It's a tie! 😅");
            alert(finalScoreMessage);
        }
    }
}
//End of Game Functions Section

let playerName = prompt("🌟 Hey there! Nice to meet ya! What's your name? 🌟");
alert(`Hi, ${playerName}! Let's play some Rock-Paper-Scissors, shall we? 🤩`);

let playerScore = 0;
let computerScore = 0;
let validRound = 0;
let exitFlag = 0;

const computerPlayArray = ["rock", "paper", "scissors"];

while(validRound < 5) {
    gameStart();
}

if (exitFlag == 0) {
    gameOver();
}