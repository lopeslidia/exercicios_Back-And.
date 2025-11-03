/*Adivinhe o Número */

const numeroSecreto = Math.floor(Math.random() * 100) + 1;
let palpite = 0;

alert("Tente adivinhar o número secreto entre 1 e 100!");

while (palpite !== numeroSecreto) {
    palpite = parseInt(prompt("Digite seu palpite:"));

    if (isNaN(palpite)) {
        alert("Por favor, digite um número válido!");
    } else if (palpite < numeroSecreto) {
        alert("Muito baixo! Tente novamente.");
    } else if (palpite > numeroSecreto) {
        alert("Muito alto! Tente novamente.");
    } else {
        alert("Parabéns! Você acertou o número secreto: " + numeroSecreto);
    }
}