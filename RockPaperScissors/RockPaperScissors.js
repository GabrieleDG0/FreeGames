const game = () => {
    let pScore = 0;
    let cScore = 0;
  
    // Initialisation and variables
    const startGame = () => {
      const playBtn = document.querySelector(".intro button");
      const introScreen = document.querySelector(".intro");
      const match = document.querySelector(".match");
  
      playBtn.addEventListener("click", () => {
        introScreen.classList.add("fadeOut");
        match.classList.add("fadeIn");
      });
    };
    // Start
    const playMatch = () => {
      const options = document.querySelectorAll(".options button");
      const playerHand = document.querySelector(".player-hand");
      const computerHand = document.querySelector(".computer-hand");
      const hands = document.querySelectorAll(".hands img");
  
      hands.forEach(hand => {
        hand.addEventListener("animationend", function() {
          this.style.animation = "";
        });
      });
      // Computer options
      const computerOptions = ["Rock", "Paper", "Scissors"];
  
      options.forEach(option => {
        option.addEventListener("click", function() {
          // Computer choice
          const computerNumber = Math.floor(Math.random() * 3);
          const computerChoice = computerOptions[computerNumber];
  
          setTimeout(() => {
            // Compare
            compareHands(this.textContent, computerChoice);
            // Images
            playerHand.src = `${this.textContent}.png`;
            computerHand.src = `${computerChoice}.png`;
          }, 2000);
          // Animations
          playerHand.style.animation = "shakePlayer 2s ease";
          computerHand.style.animation = "shakeComputer 2s ease";
        });
      });
    };
  
    const updateScore = () => {
      const playerScore = document.querySelector(".player-score p");
      const computerScore = document.querySelector(".computer-score p");
      playerScore.textContent = pScore;
      computerScore.textContent = cScore;
    };
  
    const compareHands = (playerChoice, computerChoice) => {
      // Text
      const winner = document.querySelector(".winner");
      // Draw
      if (playerChoice === computerChoice) {
        winner.textContent = "Draw!";
        return;
      }
      // ROCK
      if (playerChoice === "Rock") {
        if (computerChoice === "Scissors") {
          winner.textContent = "Player wins!";
          pScore++;
          updateScore();
          return;
        } else {
          winner.textContent = "Computer wins!";
          cScore++;
          updateScore();
          return;
        }
      }
      // PAPER
      if (playerChoice === "Paper") {
        if (computerChoice === "Scissors") {
          winner.textContent = "Computer wins!";
          cScore++;
          updateScore();
          return;
        } else {
          winner.textContent = "Player wins!";
          pScore++;
          updateScore();
          return;
        }
      }
      // SCISSORS
      if (playerChoice === "Scissors") {
        if (computerChoice === "Rock") {
          winner.textContent = "Computer wins!";
          cScore++;
          updateScore();
          return;
        } else {
          winner.textContent = "Player wins!";
          pScore++;
          updateScore();
          return;
        }
      }
    };
  
    startGame();
    playMatch();
  };
  game();
