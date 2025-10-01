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
        enunciado: "Você ganhou muitos titulos e foi convocado para jogar na copa",
        alternativas: [
            {
                texto: "sendo a terceira maior campeã, atrás apenas da Argentina e Uruguai.",
                afirmacao: " tendo a primeira copa conquistada no ano de 1919 e a ultima em 2019"
            },
            {
                texto: " contra a seleção do Peru.",
                afirmacao: "Acelerou o processo de criação de trabalhos utilizando geradores de imagem e agora consegue ensinar pessoas que sentem dificuldades em desenhar manualmente como utilizar também!"
            }
        ]
    },
    {
        enunciado: "com o seu camisa 10 da primeira edição chamado",
        alternativas: [
            {
                texto: "Rivaldo.",
                afirmacao: " "
            },
            {
                texto: "Neymar.",
                afirmacao: "Percebeu que toda IA reproduz orientações baseadas na empresa que programou e muito do que o chat escrevia não refletia o que pensava e por isso sabe que os textos gerados pela IA devem servir como auxílio e não resultado final. "
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
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";

}

mostraPergunta();