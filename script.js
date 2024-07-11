
//funcao que escolhe aleatoriamente a decisao do computador para as opcoes do jogo pedra, papel e tesoura.
function getEscolhaComputador(){
    
    //cria lista das opcoes do jogo
    let opcoesEscolha = ["Pedra", "Papel", "Tesoura"]

    //gera um numero aleatorio entre [0,2] e associa esse numero ao index da lista, ou seja, escolhendo aleatoriamnete uma opcao de jogada.
    let escolhaAleatoria = Math.floor(Math.random()*3)
    let opcaoEscolhida = opcoesEscolha[escolhaAleatoria]
    
    //retorna a opcao gerada aleatoriamente.
    return opcaoEscolhida.toLowerCase();
}

//funcao que escolhe aleatoriamente a decisao do humano para as opcoes do jogo pedra, papel e tesoura.
function getEscolhaHumano(){
    
    //input do player humano
    let escolha = prompt("Voce escolhe Pedra, Papel ou Tesoura?");

    //verifica se o input esta de acordo com uma das opcoes validas. Caso nao seja, avisa o jogador e reinica a solicitacao de input.
    if (escolha.toLowerCase() === "pedra"){
        return "pedra";
    }
    else if (escolha.toLowerCase() === "papel") {
        return "papel";
    }
    else if (escolha.toLowerCase() === "tesoura") {
        return "tesoura";
    } else {
        console.log("Opcao invalida. Tente de novo!");
        console.log(getEscolhaHumano());
    };  
}

// Função que executa uma rodada do jogo.
function round() {
    let escolhaComputador = getEscolhaComputador();
    let escolhaHumano = getEscolhaHumano();

    console.log(`Computador escolheu: ${escolhaComputador}`);
    console.log(`Humano escolheu: ${escolhaHumano}`);

    if (escolhaComputador === escolhaHumano) {
        console.log("Empate!");
    } else if (
        (escolhaComputador === "pedra" && escolhaHumano === "tesoura") ||
        (escolhaComputador === "tesoura" && escolhaHumano === "papel") ||
        (escolhaComputador === "papel" && escolhaHumano === "pedra")
    ) {
        pontuacaoComputador++;
        console.log("Computador venceu esta rodada!");
    } else {
        pontuacaoHumano++;
        console.log("Humano venceu esta rodada!");
    }

    console.log(`Computador score: ${pontuacaoComputador}`);
    console.log(`Humano score: ${pontuacaoHumano}`);
}

// Função principal do jogo que executa 5 rodadas.
function jogo() {
    let i = 0;
    while (i < 5) {
        round();
        i++;
    }
    if (pontuacaoComputador > pontuacaoHumano){
        console.log("Maquinas ganharam o jogo.");
    }
    else if (pontuacaoHumano > pontuacaoComputador){
        console.log("Humanidade venceu o jogo!");
    }
    else{
        console.log("Empate!")
    }
}

let pontuacaoHumano = 0;
let pontuacaoComputador = 0;

// Inicia o jogo
jogo();

