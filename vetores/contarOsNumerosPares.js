/* Contar números pares  */

const numeross = [10, 15, 22, 33, 40, 51, 62, 77, 80];

let contadorPares = 0;

for (let i = 0; i < numeross.length; i++) {
    if (numeross[i] % 2 === 0) {
        contadorPares++;
    }
}

alert("O array contém " + contadorPares + "números pares.");