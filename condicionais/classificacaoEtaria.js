/*Classificação Etária */

let faixaEtaria = parseInt(prompt("Digite sua idade"))

if(faixaEtaria <= 12){
    alert("Você é uma criança")
}else if(faixaEtaria > 12 && faixaEtaria <= 17){
    alert("Você é um adolescente")
}else if(faixaEtaria >= 18 && faixaEtaria <= 59){
    alert("Você é uma adulto")
}else if(faixaEtaria >= 60 && faixaEtaria <= 100){
    alert("Você é um idoso")
}