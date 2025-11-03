/* Contagem de ímpares de 1 a 15:  */

const a = parseFloat(prompt("Digite a primeira medida:"));
const b = parseFloat(prompt("Digite a segunda medida:"));
const c = parseFloat(prompt("Digite a terceira medida:"));

function formaTriangulo(a, b, c) {
    return (a + b > c) && (a + c > b) && (b + c > a);
}

if (!formaTriangulo(a, b, c)) {
    alert("Não é possível formar um triângulo com essas medidas.");
} else {
    if (a === b && b === c) {
        alert("Triângulo equilátero (todos os lados iguais).");
    } else if (a === b || a === c || b === c) {
        alert("Triângulo isósceles (dois lados iguais).");
    } else {
        alert("Triângulo escaleno (todos os lados diferentes).");
    }
}