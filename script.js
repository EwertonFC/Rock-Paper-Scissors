
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

console.log(getEscolhaComputador())
