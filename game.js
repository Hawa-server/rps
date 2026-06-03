const choices = ["Rock", "Paper", "Scissors"];
let playerScore = 0;
let computerScore = 0;

const images = {
    Rock: "./rock.png",
    Paper: "./paper .png",
    Scissors: "./scissors .png"
};



function play(playerChoice){
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    document.getElementById("player-choice").src = images[playerChoice];
    document.getElementById("computer-choice").src = images[computerChoice];

    let result = "";
    if (playerChoice === computerChoice){
        result = "It's a tie!"
    } else if (
        (playerChoice === "Rock" && computerChoice === "Scissors") ||
        (playerChoice === "Paper" && computerChoice === "Rock") ||
        (playerChoice === "Scissors" && computerChoice === "Paper")
    ){
        result = "You win";
        playerScore++;
    } else{
        result = "Computer wins!";
        computerScore++;
    }


    document.getElementById("result").textContent = result;
    document.getElementById("player-score").textContent = playerScore;
    document.getElementById("computer-score").textContent = computerScore;
  

}

