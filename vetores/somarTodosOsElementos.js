/*Somar todos os elementos*/

const numeros = [10, 20, 30, 40, 50];

let soma = 0;

for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];
}

alert("A soma dos números é:" + soma);