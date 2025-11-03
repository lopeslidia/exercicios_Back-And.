/*Mini Calculadora */

let num1 = parseFloat(prompt("Digite o primeiro número:"));
let operador = prompt("Digite o operador (+, -, *, /):");
let num2 = parseFloat(prompt("Digite o segundo número:"));

let resultado;

switch(operador){
    case'+':
    resultado = num1 + num2
    alert(`resultado: ${num1} + ${num2} = ${resultado}`)
    break;
    case'-':
    resultado = num1 - num2
    alert(`resultado: ${num1} - ${num2} = ${resultado}`)
    break;
    case'*':
    resultado = num1 * num2
    alert(`resultado: ${num1} * ${num2} = ${resultado}`)
    break;
    case'/':
    if(num2 === 0){
        alert("Erro: divisão por zero não é permitida!")
    }else{
        resultado = num1 / num2
        alert(`resultado: ${num1} / ${num2} = ${resultado}`)
    }
    break;

     default:
        alert("Operador inválido! Use apenas +, -, * ou /."
    );
}