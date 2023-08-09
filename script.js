let randomNumber;
let numIntentos = 0;

document.addEventListener("DOMContentLoaded", function () {
    resetGame()
});

function resetGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    numIntentos = 0
    intentos.innerHTML = 'Intentos: ' + numIntentos
    result.innerHTML = ''
    document.getElementById('guessInput').value = '';
}
function checkGuess() {
    console.log("randomNumber", randomNumber);
    let guess = parseInt(document.getElementById('guessInput').value);
    let result = document.getElementById('result');
    let intentos = document.getElementById('intentos')
    if (guess === randomNumber) {
        result.innerHTML = '¡Felicitaciones! ¡Adivinaste el número!';
    } else if (guess < randomNumber && guess > 0 && guess < 101) {
        result.innerHTML = 'Intenta con un número más alto.';
    } else if (guess > randomNumber && guess > 0 && guess < 101) {
        result.innerHTML = 'Intenta con un número más bajo.';
    } else if (guess < 0 | guess > 101) {
        result.innerHTML = 'Ingresa un numero entre 1 y 100'
    }
    numIntentos++
    intentos.innerHTML = 'Intentos: ' + numIntentos
}
