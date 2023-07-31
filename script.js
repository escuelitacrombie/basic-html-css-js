let randomNumber = Math.floor(Math.random() * 100) + 1;
let int = 0

function checkGuess() {
    console.log("randomNumber", randomNumber);
    let guess = parseInt(document.getElementById('guessInput').value);
    let result = document.getElementById('result');
    

    if (guess === randomNumber) {
        result.innerHTML = '¡Felicitaciones! ¡Adivinaste el número!';
        int=0;
        randomNumber = Math.floor(Math.random() * 100) + 1;
    }else if(guess < 0){
        result.innerHTML = 'El valor ingresado no es correcto, debes ingresar un numero mayor que 0.';
    }else if(guess > 100){
        result.innerHTML = 'El valor ingresado no es correcto, debes ingresar un numero menor que 100.';
    }  else if (guess < randomNumber) {
        int ++
        result.innerHTML = 'Intenta con un número más alto.';
    } else {
        result.innerHTML = 'Intenta con un número más bajo.';
        int ++
    }
    intentos.innerHTML =  'Llevas '+ int +' intentos.';
    
}
