/*Promoção Inteligente */

let valorCompra = parseFloat(prompt("Digite o valor da compra (em R$):"))
let valorFinal;

if (valorCompra >= 100){
    valorFinal = valorCompra * 0.9
    alert("Você ganhou 10% de desconto!")
} else{
    valorFinal = valorCompra
    alert("Sem desconto.")
}