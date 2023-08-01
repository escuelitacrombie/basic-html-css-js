let randomNumber = Math.floor(Math.random() * 100) + 1;
let cont=0;

function reCargar(){
    randomNumber = Math.floor(Math.random() * 100) + 1;
    cont=0;
}
function checkGuess() {
    console.log("randomNumber", randomNumber);
    
    let guess = parseInt(document.getElementById('guessInput').value);
    let result = document.getElementById('result');
    let rCont=document.getElementById('rCont');

    if (guess === randomNumber) {
        result.innerHTML = '¡Felicitaciones! ¡Adivinaste el número!';
    } else if (guess < randomNumber) {
        cont++;
        result.innerHTML = 'Intenta con un número más alto.';
        rCont.innerHTML = 'Numero de intentos: '+cont;
        
    } else {
        cont++;
        result.innerHTML = 'Intenta con un número más bajo.';
        rCont.innerHTML = 'Numero de intentos: '+cont;
    }
    console.log(cont);
}


function valNum(){
let num=parseInt(document.getElementById('num').value);
let resp=document.getElementById('resp');
    if(num<0){
        resp.innerHTML='Debes ingresar un numero mayor a 0';
    }
    else{
        resp.innerHTML='Nice!';
    }

}

function valNum2(){
    let num2=parseInt(document.getElementById('num2').value);
    let resp2=document.getElementById('resp2');
    
        if(num2<100){
            resp2.innerHTML='Debes ingresar un numero mayor a 100';
            
        }
        else{
            resp2.innerHTML='Nice!';
        }
    
}

