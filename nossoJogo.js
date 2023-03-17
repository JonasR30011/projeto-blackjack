function deck(){
const cartas = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"]
const naipes = ["♥","♦","♣","♠"]



const carta = cartas[Math.floor(Math.random()* 13)]
const naipe = naipes[Math.floor(Math.random()* 4)]


let valor
if(carta === "A") {
    valor = 11
} else if (carta === "J" || carta === "Q" || carta === "K") {
valor = 10
} else {
    valor = Number(carta)
}
const cartaCompleta = {
    texto: carta + naipe,
    valor: valor
}
return cartaCompleta
}
// Criando lógica do jogo
console.log(`Boas vindas ao jogo de BlackJack!`)
const check = confirm(`Quer iniciar uma nova rodada?`)
if (check === true){
    let carta1User = deck()
    let carta2User = deck()
    let carta1Computer = deck()
    let carta2Computer = deck()
    let cartasUser = (`Usuário com as cartas ${carta1User.texto} e ${carta2User.texto}`)
    let cartasComputer = (`Dealer com as cartas ${carta1Computer.texto} e ${carta2Computer.texto}`)
    console.log(cartasUser)
    console.log(cartasComputer)
    let pontuacaoUser = (carta1User.valor + carta2User.valor)
    let pontuacaoComputer = (carta1Computer.valor + carta2Computer.valor)
    console.log(`Jogador está com ${pontuacaoUser}`)
    console.log(`Dealer está com ${pontuacaoComputer}`)
    
        if (pontuacaoUser > pontuacaoComputer) {
        alert(`Você ganhou!!!`)
        } else if(pontuacaoComputer > pontuacaoUser) {
        alert("Dealer ganhou essa!!!")
        } else if(pontuacaoUser === pontuacaoComputer){
        alert(`Deu empate, recolham as fichas`)}

}else{
    alert(`O jogo Acabou`)
}
