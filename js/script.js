//function = function(função) ou procedure(procedimento) do pascal
//{ = begin do pascal
//} = end do pascal
//let = var do pascal
function calcular() {
    let resultado = document.getElementById('resultado');
    let num1 = document.getElementById('edtnum1').value;
    let num2 = document.getElementById('edtnum2').value;
    resultado.innerHTML = '';
    let soma = Number(num1) + Number(num2);
    console.log('Soma ' + soma);
    resultado.innerHTML += '<h3>Soma = '+soma+'</h3>';
    let sub = Number(num1) - Number(num2);
    console.log('Subtração ' + sub);
    resultado.innerHTML += '<h3>Subtração = '+sub+'</h3>';
    let div = Number(num1) / Number(num2);
    console.log('Divisão ' + div);
    resultado.innerHTML += '<h3>Divisão = '+div+'</h3>';
    let mult = Number(num1) * Number(num2);
    console.log('Multiplicação ' + mult);
    resultado.innerHTML += '<h3>Multiplicação = '+mult+'</h3>';
}

function exibirTabuada(){
    let mostratabuada = document.getElementById('mostratabuada');
    let numero = document.getElementById('edtnumero').value;
    let i = 0;
    mostratabuada.innerHTML = '';
    while(i<=10){
        mostratabuada.innerHTML += '<h4>'+numero+' x '+i+' = '+(numero*i)+'</h4>';
        i++;
    }
}

function verificaMaior(){
    let n1 = document.getElementById('edtn1').value;
    let n2 = document.getElementById('edtn2').value;
    let maiornumero = document.getElementById('maiornumero');
    maiornumero.innerHTML = '';
    if(n1<n2){
        maiornumero.innerHTML = '<h2>O maior número digitado é '+n1+'</h2>';
    }else{
        maiornumero.innerHTML = '<h2>O maior número digitado é '+n2+'</h2>';
    }
}

