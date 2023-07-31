const randomNumber = Math.floor(Math.random() * 100) + 1;

let intentos = 0;


function checkGuess() {
    console.log("randomNumber", randomNumber);
    let guess = parseInt(document.getElementById('guessInput').value);
    let result = document.getElementById('result');

    if (guess === randomNumber) {
        result.innerHTML = '¡Felicitaciones! ¡Adivinaste el número!';
    }  else if (guess < 0) {
        result.innerHTML = 'Debe ser mayor que 0.';
    } else if (guess > 100) {
        result.innerHTML = 'Debe ser menor que 100.';
    } else if (guess < randomNumber) {
        result.innerHTML = 'Intenta con un número más alto.';
    } else {
        result.innerHTML = 'Intenta con un número más bajo.';
    }

    intentos += 1;
    let intentando = document.getElementById("intentos")
    intentando.innerHTML = intentos;
    console.log(intentos)
}
