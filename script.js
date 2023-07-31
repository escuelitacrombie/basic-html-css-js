let randomNumber = Math.floor(Math.random() * 100) + 1;
console.log("randomNumber", randomNumber);

const result = document.getElementById('result');
const attemptsDOM = document.getElementById('attempts');
let attempts = 0
function checkGuess() {
    attempts++
    let guess = parseInt(document.getElementById('guessInput').value);

    if (guess === randomNumber) {
        result.innerHTML = '¡Felicitaciones! ¡Adivinaste el número!';
    } else if(guess < 1 || guess >= 100){
        result.innerHTML = 'El numero ingresado es invalido, ingesa un numero entre 1 y 100.';
    } else if (guess < randomNumber) {
        result.innerHTML = 'Intenta con un número más alto.';
    } else {
        result.innerHTML = 'Intenta con un número más bajo.';
    }
    attemptsDOM.innerHTML = 'Cantidad de intentos: ' + attempts
}


function reiniciar(){
    attempts=0
    randomNumber=Math.floor(Math.random() * 100) + 1;
    result.innerHTML = ''
    attemptsDOM.innerHTML= ''
    console.log("randomNumber", randomNumber);
}
