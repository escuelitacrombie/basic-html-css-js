const randomNumber = Math.floor(Math.random() * 100) + 1;

function checkGuess() {
    console.log("randomNumber", randomNumber);
    let guess = parseInt(document.getElementById('guessInput').value);
    let result = document.getElementById('result');

    if (guess === randomNumber) {
        result.innerHTML = '¡Felicitaciones! ¡Adivinaste el número!';
    } else if (guess < randomNumber) {
        result.innerHTML = 'Intenta con un número más alto.';
    } else {
        result.innerHTML = 'Intenta con un número más bajo.';
    }
if (guess < 0) {
result.innerHTML = 'El valor ingresado es incorrecto, debes ingresar un número mayor a 0.';
// } else {
// result.innerHTML = 'El número ingresado es válido.';
}
if (guess > 100) {
    result.innerHTML = 'El valor ingresado es incorrecto, debes ingresar un número menor a 100.';
    // } else {
    // result.innerHTML = 'El número ingresado es válido.';
    // }
    }
}

//    contador = 0
//  while True:
//     contador += 1
//     print("Intento número:", contador)