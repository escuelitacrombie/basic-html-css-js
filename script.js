const randomNumber = Math.floor(Math.random() * 100) + 1;
let intentos = 0;

function checkGuess() {
  console.log('randomNumber', randomNumber);

  let guess = parseInt(document.getElementById('guessInput').value);
  let result = document.getElementById('result');
  let intentosEl = document.getElementById('intentos');

  if (guess < 0 || guess > 100) {
    result.innerHTML = '¡Numero invalido!';
  }

  intentos = intentos + 1;
  intentosEl.innerHTML = `Intentos: ${intentos}`;

  if (guess === randomNumber) {
    result.innerHTML = '¡Felicitaciones! ¡Adivinaste el número!';
  } else if (guess < randomNumber) {
    result.innerHTML = 'Intenta con un número más alto.';
  } else {
    result.innerHTML = 'Intenta con un número más bajo.';
  }
}
