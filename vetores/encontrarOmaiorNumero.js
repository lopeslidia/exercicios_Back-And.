/*Encontrar o maior número*/

const numerosM = [15, 42, 7, 89, 23, 56];

let maior = numerosM[0];

for (let i = 1; i < numerosM.length; i++) {
    if (numerosM[i] > maior) {
        maior = numerosM[i];
    }
}

alert("O maior número do vetor é:" + maior);