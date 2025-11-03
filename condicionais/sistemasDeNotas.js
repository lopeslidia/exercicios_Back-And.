/*Sistema de Notas*/ 

let notas = parseInt(prompt("Digite um numero de 0 a 100"))

if(notas >= 90){
    alert("Sua nota é A")
} else if(notas >= 80){
    alert("Sua nota é B")
} else if(notas >= 70){
    alert("Sua nota é C")
} else if(notas >= 60){
    alert("Sua nota é D")
} else{
    alert("Sua nota é F")
}