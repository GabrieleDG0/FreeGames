const input = document.querySelector("input"),
  guess = document.querySelector(".guess"),
  CheckButton = document.querySelector("button"),
  remainChances = document.querySelector(".chances");

// Focus
input.focus();

let randomNum = Math.floor(Math.random() * 100);
chance = 10;


CheckButton.addEventListener("click", () => {
  // Decrease the variable attempts
  chance--;
 
  let inputValue = input.value;
  // Check if input == random number
  if (inputValue == randomNum) {
    
    [guess.textContent, input.disabled] = ["Guessed!", true];
    [checkButton.textContent, guess.style.color] = ["Retry", "#333"];
    // Chech if input > random number
  } else if (inputValue > randomNum && inputValue < 100) {
 
    [guess.textContent, remainChances.textContent] = [
      "The number is high, retry!",
      chance
    ];
    guess.style.color = "#333";
    // Check if input < random number
  } else if (inputValue < randomNum && inputValue > 0) {
    // 
    [guess.textContent, remainChances.textContent] = [
      "The number is low, retry!",
      chance
    ];
    guess.style.color = "#333";
    // Check if the input value is not within the range of 1 to 99
  } else {

    [guess.textContent, remainChances.textContent] = [
      "Invalid number",
      chance
    ];
    guess.style.color = "#DE0611";
  }
  // Check if the attempts are finished
  if (chance == 0) {
    
    [checkButton.textContent, input.disabled, inputValue] = [
      "Retry",
      true,
      ""
    ];
    [guess.textContent, guess.style.color] = ["You lose!", "#DE0611"];
  }
  if (chance < 0) {
    window.location.reload();
  }
});