const randomNumber = Math.floor(Math.random() * 100) + 1;
const intentosCounter = document.getElementById('intentos');
let intentos = 0;

function checkGuess() {
    console.log("randomNumber", randomNumber);
    let guess = parseInt(document.getElementById('guessInput').value);
    let result = document.getElementById('result');

    if (guess === randomNumber) {
        result.innerHTML = '¡Felicitaciones! ¡Adivinaste el número!';
    } else if (guess < randomNumber) {
        result.innerHTML = 'Intenta con un número más alto.';
        intentos++;
        intentosCounter.innerHTML = "Cantidad de intentos: " + intentos
    }else if(guess < 0 || guess > 100){
        result.innerHTML = 'error el numero debe estar entre 0 & 100';
    } else{
        result.innerHTML = 'Intenta con un número más bajo.';
        intentos++;
        intentosCounter.innerHTML = "Cantidad de intentos: " + intentos
    }
}
