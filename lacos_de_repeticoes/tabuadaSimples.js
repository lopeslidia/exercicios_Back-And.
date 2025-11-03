/*Tabuada Simples:  */

const numero = parseInt(prompt("Digite um número para ver sua tabuada:"));

if (isNaN(numero)) {
    alert("Por favor, digite um número válido!");

} else {
    let resultado = "Tabuada do " + numero + ":\n";

    for (let i = 1; i <= 10; i++) {
        resultado += `${numero} x ${i} = ${numero * i}\n`;
    }

    alert(resultado);
}