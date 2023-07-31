const randomNumber = Math.floor(Math.random() * 100) + 1;

let attempts = 0
function checkGuess() {
    console.log("randomNumber", randomNumber);
    attempts++
    let guess = parseInt(document.getElementById('guessInput').value);
    const result = document.getElementById('result');
    const attemptsDOM = document.getElementById('attempts');

    if (guess === randomNumber) {
        result.innerHTML = '¡Felicitaciones! ¡Adivinaste el número!';
    } else if(guess < 1 || guess >= 100){
        result.innerHTML = 'El numero ingresado es invalido, ingesa un numero entre 1 y 100';
    } else if (guess < randomNumber) {
        result.innerHTML = 'Intenta con un número más alto.';
    } else {
        result.innerHTML = 'Intenta con un número más bajo.';
    }
    attemptsDOM.innerHTML = 'Cantidad de intentos: ' + attempts
}
