/*Acesso Restrito*/

let nomeCorreto = "Lidia Lopes"
let senhaCorreta = "123456789"

let nome = prompt("Digite seu nome")
let senha = prompt("Digite sua senha")

if (nome === nomeCorreto && senha === senhaCorreta){
    alert("Login realizado com sucesso")
} else{
    alert("Usuario ou senha incorretos, tente novamente")
}