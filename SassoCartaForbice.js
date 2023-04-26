const game = () => {
    let pScore = 0;
    let cScore = 0;
  
    //Variabili e inizializzazione
    const startGame = () => {
      const playBtn = document.querySelector(".intro button");
      const introScreen = document.querySelector(".intro");
      const match = document.querySelector(".match");
  
      playBtn.addEventListener("click", () => {
        introScreen.classList.add("fadeOut");
        match.classList.add("fadeIn");
      });
    };
    //Inizio
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
      //Opzioni computer
      const computerOptions = ["sasso", "carta", "forbice"];
  
      options.forEach(option => {
        option.addEventListener("click", function() {
          //Scelta del computer
          const computerNumber = Math.floor(Math.random() * 3);
          const computerChoice = computerOptions[computerNumber];
  
          setTimeout(() => {
            //Confronto scelte
            compareHands(this.textContent, computerChoice);
            //Immagini
            playerHand.src = `${this.textContent}.png`;
            computerHand.src = `${computerChoice}.png`;
          }, 2000);
          //Animazioni varie
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
      //Testo
      const winner = document.querySelector(".winner");
      //Pareggio
      if (playerChoice === computerChoice) {
        winner.textContent = "Pareggio!";
        return;
      }
      //SASSO
      if (playerChoice === "sasso") {
        if (computerChoice === "forbice") {
          winner.textContent = "Giocatore vince!";
          pScore++;
          updateScore();
          return;
        } else {
          winner.textContent = "Computer vince!";
          cScore++;
          updateScore();
          return;
        }
      }
      //CARTA
      if (playerChoice === "carta") {
        if (computerChoice === "forbice") {
          winner.textContent = "Computer vince!";
          cScore++;
          updateScore();
          return;
        } else {
          winner.textContent = "Giocatore vince!";
          pScore++;
          updateScore();
          return;
        }
      }
      //FORBICE
      if (playerChoice === "forbice") {
        if (computerChoice === "sasso") {
          winner.textContent = "Computer vince!";
          cScore++;
          updateScore();
          return;
        } else {
          winner.textContent = "Giocatore vince!";
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
