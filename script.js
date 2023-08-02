let randomNumber = Math.floor(Math.random() * 100) + 1;
let cont=0;


function checkGuess() {
    console.log("randomNumber", randomNumber);
    
    let guess = parseInt(document.getElementById('guessInput').value);
    let result = document.getElementById('result');
    let rCont=document.getElementById('rCont');
    let desab = document.getElementById('desab');
        
        if(guess>=0 && guess<=100){
            if(cont<10){
                if (guess === randomNumber) {
                    result.innerHTML = '¡Felicitaciones! ¡Adivinaste el número!';
                    desab.disabled = true;
                }
                else if(guess < randomNumber) {
                    cont++;
                    result.innerHTML = 'Intenta con un número más alto.';
                    rCont.innerHTML = 'Numero de intentos: '+cont;
                    
                    
                }else {
                    cont++;
                    result.innerHTML = 'Intenta con un número más bajo.';
                    rCont.innerHTML = 'Numero de intentos: '+cont;
                } 
            }
            else{
                result.innerHTML='Perdiste! Llegaste al limite de intentos';
                desab.disabled = true;
                desab.style.backgroundColor = 'red';
            }
        }
        else{
            result.innerHTML='Debe ser un numero mayor a cero y menor a 100';
        }
}
function reCargar(){
    let result = document.getElementById('result');
    let rCont=document.getElementById('rCont');
    let desab = document.getElementById('desab');

    randomNumber = Math.floor(Math.random() * 100) + 1;
    cont=0;

    result.innerHTML='';
    rCont.innerHTML='';
    desab.disable= false;
    desab.style.backgroundColor = '#4caf50';
}




