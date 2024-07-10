
//funcao que escolhe aleatoriamente a decisao do computador para as opcoes do jogo pedra, papel e tesoura.
function getEscolhaComputador(){
    
    //cria lista das opcoes do jogo
    let opcoesEscolha = ["Pedra", "Papel", "Tesoura"]

    //gera um numero aleatorio entre [0,2] e associa esse numero ao index da lista, ou seja, escolhendo aleatoriamnete uma opcao de jogada.
    let escolhaAleatoria = Math.floor(Math.random()*3)
    let opcaoEscolhida = opcoesEscolha[escolhaAleatoria]
    
    //retorna a opcao gerada aleatoriamente.
    return opcaoEscolhida
}

//funcao que escolhe aleatoriamente a decisao do humano para as opcoes do jogo pedra, papel e tesoura.
function getEscolhaHumano(){
    
    //input do player humano
    let escolha = prompt("Voce escolhe Pedra, Papel ou Tesoura?");

    //verifica se o input esta de acordo com uma das opcoes validas. Caso nao seja, avisa o jogador e reinica a solicitacao de input.
    if (escolha.toLowerCase() === "pedra"){
        return "Pedra"
    }
    else if (escolha.toLowerCase() === "papel") {
        return "Papel"
    }
    else if (escolha.toLowerCase() === "tesoura") {
        return "Tesoura"
    } else {
        console.log("Opcao invalida. Tente de novo!")
        console.log(getEscolhaHumano())
    }

        
}
console.log(getEscolhaHumano())
