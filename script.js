const botao = document.getElementById("botao")
const nome = document.getElementById("nome")
const metros = document.getElementById("metros")
const quilos = document.getElementById("quilos")
const campo = document.getElementById("campo")


botao.addEventListener("click", resultado)

let resposta = "" 

if (nome == "" | metros == "" | quilos == ""){

}else{
    const preResul = quilos / (metros * metros)
}

if(preResul < 18,5){
    resposta = "Abaixo do peso"
}else if (preResul >= 18,5 && preResul <= 24,9){
    resposta = "Peso ideal"
}else if (preResul >= 25,0 && preResul <= 29,9){
    resposta = "Acima do peso"
}else if (preResul >= 30,0 && preResul <= 34,9){
    resposta = "Obesidade grau I"
}else if (preResul >= 35,0 && preResul <= 39,9){
    resposta = "Obesidade grau II"
}else{
    resposta = "Obesidade grau III"
}

