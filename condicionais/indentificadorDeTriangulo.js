/*Identificador de Triângulo*/

let a = parseFloat(prompt("Digite o valor do lado A:"));
let b = parseFloat(prompt("Digite o valor do lado B:"));
let c = parseFloat(prompt("Digite o valor do lado C:"));

if (a < b + c && b < a + c && c < a + b){

    if(a === b && b === c){
         alert("É um triângulo EQUILÁTERO (todos os lados iguais).");
} else if(a === b || a === c || b === c){
     alert("É um triângulo ISÓSCELES (dois lados iguais).");
} else{
     alert("É um triângulo ESCALENO (todos os lados diferentes).");
}
}else{
    alert("As medidas informadas NÃO formam um triângulo.");
}