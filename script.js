const randomNumber = Math.floor(Math.random() * 100) + 1;
let chances = 0
//let booleanAux = true;
function checkGuess() {
    console.log("randomNumber", randomNumber);
    let guess = parseInt(document.getElementById('guessInput').value);
    let result = document.getElementById('result');
    let intentos = document.getElementById('intentos')
    if(guess < 0 || guess > 100 ) {
        result.innerHTML = 'please insert a valid value';
    }else{
        if (guess === randomNumber) {
            result.innerHTML = '¡Felicitaciones! ¡Adivinaste el número!';
        } 
        if (guess < randomNumber) {
            result.innerHTML = 'Intenta con un número más alto.';
        } 
        if (guess > randomNumber) {
            result.innerHTML = 'Intenta con un número más bajo.';
        }
    
        if(chances == 2){
            result.innerHTML = 'you run out of attemps';
            //booleanAux == false
            document.getElementById("miBoton").disabled = true;
        }
        intentos.innerHTML = chances;
        chances++;
    }

}
