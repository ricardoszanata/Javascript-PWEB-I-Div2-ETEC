//let é a mesma coisa que var do pascal
//declaração de variaveis (atributos)
//= tem o sentido de receber (:= semelhante a isso do pascal)
let nota =6;//0...10
console.log(nota);
if (nota > 10 || nota < 0) {
    console.log("Nota inválida.");
} else if (nota >= 8) {
    console.log("Aprovado com Louvor.");
} else if (nota >= 6) {
    console.log("Aprovado por Média.");
} else {//begin
    console.log("Reprovado.");
}//end