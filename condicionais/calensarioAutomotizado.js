/* Calendário Automatizado*/

let algarismo = parseInt(prompt("Digite um numero de 1 a 7"))

let diaDaSemana;

switch(algarismo){
    case 1:
    alert(diaDaSemana = "Domingo");
    break;
    case 2:
    alert(diaDaSemana = "Segunda");
    break;
    case 3:
    alert(diaDaSemana = "Terça");
    break;
    case 4:
    alert(diaDaSemana = "Quarta");
    break;
    case 5:
    alert(diaDaSemana = "Quinta");
    break;
    case 6:
    alert(diaDaSemana = "Sexta");
    break;
    case 7:
    alert(diaDaSemana = "Sabado");
    break;
    default:
        alert("Número inválido! Digite um valor entre 1 e 7.");
}