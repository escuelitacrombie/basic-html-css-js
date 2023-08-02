let randomNumber = Math.floor(Math.random() * 100) + 1;
let contador = 0;

function checkGuess() {
    let guess = parseInt(document.getElementById('guessInput').value);
    let result = document.getElementById('result');
    let tirada = document.getElementById('tiradas');
    console.log("randomNumber", randomNumber);
    if (contador == 5 && guess != randomNumber) {
        result.innerHTML = 'Te quedaste sin intentos, el numero era: ' + randomNumber;
        document.getElementById("miBoton").disabled = true;
    } else {
        if (guess >= 0 && guess <= 100) {
            if (guess === randomNumber) {
                result.innerHTML = '¡Felicitaciones! ¡Adivinaste el número!';
            } else if (guess < randomNumber) {
                result.innerHTML = 'Intenta con un número más alto.';
                contador++;
            } else {
                result.innerHTML = 'Intenta con un número más bajo.';
                contador++;
            }

            tirada.innerHTML = "Numero de intentos: "+contador;
        } else {
            result.innerHTML = 'No es un numero valido';
        }
    }
}
function resetGame() {
    let guess = document.getElementById('guessInput');
    let result = document.getElementById('result');
    let tirada = document.getElementById('tiradas');
    randomNumber = Math.floor(Math.random() * 100) + 1;
    contador = 0;
    document.getElementById("miBoton").disabled = false;
    tirada.innerHTML ="Numero de intentos: "+ contador;
    result.innerHTML = 'Encuentra el número!';
    guess.value="";
}
