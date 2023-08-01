let randomNumber = generateRandomNumber();

function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
};

function checkGuess() {
    console.log("randomNumber", randomNumber);
    
    let result = document.getElementById('result');
    let guess = parseInt(document.getElementById('guessInput').value);
    if (guess === randomNumber) {
        result.innerHTML = '¡Felicitaciones! ¡Adivinaste el número!';
    } else if (guess > 100 || guess <= -1) {
        result.innerHTML = 'Valor ingresado incorrecto, debería estar entre 0 y 100';
    } else if (guess < randomNumber) {
        result.innerHTML = 'Intenta con un número más alto.';
    } else {
        result.innerHTML = 'Intenta con un número más bajo.';
    } 
}

let btnactivation = document.querySelector('.btnactivation');
let counter = 0;
btnactivation.addEventListener('click', function () {
    counter++;
    document.querySelector("#counter").innerHTML = counter;
    console.log(counter);
});


function reset() {
    randomNumber = generateRandomNumber();
    console.log("randomNumber");
    document.getElementById('guessInput').value = '';
    document.getElementById('result').innerHTML = '';
    document.querySelector('#counter').innerHTML = '';
}