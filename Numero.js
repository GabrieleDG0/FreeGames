const input = document.querySelector("input"),
  guess = document.querySelector(".guess"),
  CheckButton = document.querySelector("button"),
  remainChances = document.querySelector(".chances");

// Focus sul gioco
input.focus();

let randomNum = Math.floor(Math.random() * 100);
chance = 10;


CheckButton.addEventListener("click", () => {
  // Diminuire la variabile tentativi ad ogni click
  chance--;
 
  let inputValue = input.value;
  // Controllo se l'input è uguale al numero randomico
  if (inputValue == randomNum) {
    
    [guess.textContent, input.disabled] = ["Indovinato!", true];
    [checkButton.textContent, guess.style.color] = ["Riprova", "#333"];
    // Controllo se l'input è maggiore del numero randomico
  } else if (inputValue > randomNum && inputValue < 100) {
 
    [guess.textContent, remainChances.textContent] = [
      "Il numero è alto, riprova!",
      chance
    ];
    guess.style.color = "#333";
    // Controllo se l'input è mminore del numero randomico
  } else if (inputValue < randomNum && inputValue > 0) {
    // 
    [guess.textContent, remainChances.textContent] = [
      "Il numero è basso, riprova!",
      chance
    ];
    guess.style.color = "#333";
    // If the input value is not within the range of 1 to 99
  } else {

    [guess.textContent, remainChances.textContent] = [
      "Numero invalido",
      chance
    ];
    guess.style.color = "#DE0611";
  }
  // Controllo se i tentativi sono finiti
  if (chance == 0) {
    
    [checkButton.textContent, input.disabled, inputValue] = [
      "Riprova",
      true,
      ""
    ];
    [guess.textContent, guess.style.color] = ["Hai perso!", "#DE0611"];
  }
  if (chance < 0) {
    window.location.reload();
  }
});