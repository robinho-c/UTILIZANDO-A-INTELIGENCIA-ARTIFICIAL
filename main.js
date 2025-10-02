const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Escolha Um Time De Base.",
        alternativas: [
            {
                texto: "Base do vasco",
                afirmacao: "Você escolheu a base do vasco, um time de renome no futebol brasileiro, "
            },
            {
                texto: "Base do palmeiras",
                afirmacao: "Você escolheu a base do Palmeiras, um dos maiores campeões do campeonato brasileiro, "
            }
        ]
    },
    {
        enunciado: "Você se destacou e recebeu propostas de dois times, qual você escolhe?",
        alternativas: [
            {
                texto: "Flamengo",
                afirmacao: "Você se destacou no seu time de base e recebeu uma proposta de alto valor para jogar no flamengo, "
            },
            {
                texto: "Corinthians",
                afirmacao: "Você se destacou no seu time de base e recebeu uma proposta de alto valor para jogar no Corinthians."
            }
        ]
    },
    {
        enunciado: "Em uma janela de transferência, você foi vendido para um time europeu, você prefere? ",
        alternativas: [
            {
                texto: "Receber um salário alto e ficar no banco",
                afirmacao: "Em uma janela de transferência, você foi vendido para um time europeu, ficando no banco por um alto salário, o que não foi uma opção tão sensata."
            },
            {
                texto: "Receber um salário baixo e ser titular?",
                afirmacao: "você escolheu um salario mais baixo, mas podendo jogar todas as partidas como titular."
            }
        ]
    },
    {
        enunciado: "Você ganhou muitos titulos e foi convocado para jogar a copa, e chegoua final",
        alternativas: [
            {
                texto: "você prefere entrar como titular.",
                afirmacao: " você escolheu entrar como titular no começo do jogo e acabou marcando um gol contra o que levou o jogo para os penaltis fazendo seu time perder,"
            },
            {
                texto: " você prefere entrar no segundo tempo ",
                afirmacao: "na final da copa você escolheu entrar no segundo tempo e marcou um gol de falta no ultimo minuto de jogo se tornando campeão,"
            }
        ]
    },
    {
        enunciado: "no final da sua carreira você volta para o futbol brasileiro para encerrar sua carreira e se aposenta ganhando um titulo qual time você prefere?",
        alternativas: [
            {
                texto: "flamengo. ",
                afirmacao: "você prefere se aposentar no futbol brasileiro ganhando a libertadores com o flamengo."
            },
            {
                texto: "santos",
                afirmacao: "você escolheu se aposentar no santos jogando ao lado do Neymar e ganhar o campeonato brasileiro serie B"
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = " ";

function mostraPergunta(){
    if (atual >= perguntas.length){
        mostraResultado();
        return;
    }

    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
    const botaoAlternativas = document.createElement("button");
    botaoAlternativas.textContent = alternativa.texto;
    botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
    caixaAlternativas.appendChild(botaoAlternativas);
   }

}
function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes +"" ;
    atual++;
    mostraPergunta();

}
function mostraResultado(){
    caixaPerguntas.textContent = "";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";

}

mostraPergunta();