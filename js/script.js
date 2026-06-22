//function = function(função) ou procedure(procedimento) do pascal
//{ = begin do pascal
//} = end do pascal
//let = var do pascal
function calcular() {
    let num1 = document.getElementById('edtnum1').value;
    let num2 = document.getElementById('edtnum2').value;
    let sub = num1 - num2;
    console.log('Subtração = '+sub);
    let mult = num1 * num2;
    console.log('Multiplicação = '+mult);
    let div = num1 / num2;
    console.log('Divisão = '+div);
    let soma = Number(num1)+Number(num2);
    console.log('Soma = '+soma);
}