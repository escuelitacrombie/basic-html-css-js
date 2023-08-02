const randomNumber = Math.floor(Math.random() * 100) + 1;
let intentos = 0;
let booleanoAux = true;


function checkGuess() {
    console.log("randomNumber", randomNumber);
    let guess = parseInt(document.getElementById('guessInput').value);
    let result = document.getElementById('result');
    let intento = document.getElementById("intentos");
    if (guess > 100 || guess < 0) {
        result.innerHTML = "El numero ingresado no está dentro de los parametros"
    }
    else {
        if (guess === randomNumber) {
            result.innerHTML = '¡Felicitaciones! ¡Adivinaste el número!';
        } else if (guess < randomNumber) {
            result.innerHTML = 'Intenta con un número más alto.';
        }
        else {
            result.innerHTML = 'Intenta con un número más bajo.';
        }
        if (intentos == 5) {
            result.innerHTML = "Te quedaste sin intentos"
            document.getElementById("button-adivinar").disabled = true;

        }
        intentos++
        intento.innerHTML = intentos;
        console.log(intentos);
    }



}

