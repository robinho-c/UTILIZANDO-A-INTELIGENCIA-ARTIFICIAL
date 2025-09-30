const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "a primeira edição da copa América",
        alternativas: [
            {
                texto: "aconteceu em 1916!",
                afirmacao: ". "
            },
            {
                texto: "aconteceu no ano de 1918!",
                afirmacao: "Quis saber como usar IA no seu dia a dia."
            }
        ]
    },
    {
        enunciado: "tendo como a primeira campeã do campeonato",
        alternativas: [
            {
                texto: "a seleção uruguaia.",
                afirmacao: "."
            },
            {
                texto: "a seleção brasileira.",
                afirmacao: "Sentiu mais facilidade em utilizar seus próprios recursos para escrever seu trabalho."
            }
        ]
    },
    {
        enunciado: "em cima da forte equipe da Argentina que atualmente é ",
        alternativas: [
            {
                texto: "a maior campeã .",
                afirmacao: " Já a argentina é a maior campẽa da competição com 16 titulos."
            },
            {
                texto: "a menor campeã.",
                afirmacao: "Sua preocupação com as pessoas motivou a criar um grupo de estudos entre trabalhadores para discutir meios de utilização de IA de forma ética."
            }
        ]
    },
    {
        enunciado: " A seleção brasileira possui 9 copas",
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