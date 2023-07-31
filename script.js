const randomNumber = Math.floor(Math.random() * 100) + 1;
let attempt = document.getElementById("attempt");

let attempts = 1;
attempt.innerHTML = `Intento número: ${attempts}`;

function checkGuess() {
  let guess = parseInt(document.getElementById("guessInput").value);
  let result = document.getElementById("result");

  let state;
  if (guess >= 1 && guess <= 100) {
    if (guess === randomNumber) {
      state = true;
      result.innerHTML = "¡Felicitaciones! ¡Adivinaste el número!";
    } else if (guess < randomNumber) {
      state = false;
      result.innerHTML = "Intenta con un número más alto.";
    } else {
      state = false;
      result.innerHTML = "Intenta con un número más bajo.";
    }
  } else if (guess < 1) {
    state = false;
    result.innerHTML = "Número fuera de rango, tiene queser mayor o igual 1";
  } else {
    state = false;
    result.innerHTML = "Número fuera de rango, tiene queser mayor o igual 1";
  }

  if (state === false) {
    attempts++;
    attempt.innerHTML = `Intento número: ${attempts}`;
  } else {
    attempts = 0;
  }

  if (attempts > 3) {
    disable.innerHTML =
      "<button style='background-color: grey' disabled>Adivinar</button>";
    attempt.innerHTML = "";
    setTimeout(() => {
      window.location.reload();
    }, 3000);
  }
}
