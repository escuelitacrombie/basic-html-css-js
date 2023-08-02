const randomNumber = Math.floor(Math.random() * 100) + 1;
let clicks = 0;

function checkGuess() {
    console.log("randomNumber", randomNumber);
    clickCount()
    let guess = parseInt(document.getElementById('guessInput').value);
    let result = document.getElementById('result');

    if (guess <= 0) {
        result.innerHTML = 'Valor ingresado es incorrecto, debes ingresar un número mayor a 0.';
    } else if (guess === randomNumber) {
        result.innerHTML = '¡Felicitaciones! ¡Adivinaste el número!';
    } else if (guess < randomNumber) {
        result.innerHTML = 'Intenta con un número más alto.';
    } else if (guess > 100) {
        result.innerHTML = 'El número no puede ser mayor a 100';
    } else if (guess > randomNumber) {
        result.innerHTML = 'Intenta con un número más bajo.';
    } else {
        result.innerHTML = 'El número es inválido';
    }
}
function clickCount(){
    clicks++
    document.getElementById("clicks").innerHTML = clicks;
    console.log(clicks)
}
