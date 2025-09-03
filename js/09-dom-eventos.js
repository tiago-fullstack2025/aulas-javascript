'use strict';

/* Exemplo 01 */

// Procurando (querySelector) por um elemento chamado exemplo1
const exemplo01 = document.querySelector("#exemplo1");
const mensagem01 = document.querySelector("#mensagem01");
const pagina = document.querySelector("body");


/* Para selecionar vários elementos, use querySelectorAll.
O resultado é uma espécie de array de elementos (NodeList). */
const paragrafos = document.querySelectorAll("p");
console.log(paragrafos);


/* Sobre Eventos 
Um evento é um acontecimento ou fenômeno que, quando
acontece, dispara ações em nosso programa/site/aplicação.

O JavaScript suporta centenas de tipos de evento. Exemplos: clique do mouse, pressionar teclas, tocar na tela, rolagem da página, carregamento da página e etc. */

// Exemplo detectando eventos
// Ao clicar 1x, adiciona um texto ao paragrafo de mensagem
exemplo01.addEventListener("click", function(){
    mensagem01.textContent = "Opa, evento funcionou!";

    // Adiciona a classe destaque (não coloque ponto neste caso)
    mensagem01.classList.add("destaque");
});

// Ao clicar 2x, retira o texto do paragrafo de mensagem
mensagem01.addEventListener("dblclick", function(){
    mensagem01.textContent = "";

    // Remove a classe destaque (não coloque ponto neste caso)
    mensagem01.classList.remove("destaque");
});


/* Exercícios

1) Crie uma constante nova e selecione o h1 da sua página */
const titulo = document.querySelector("h1"); // Eventos
const textoOriginal = titulo.textContent; // Eventos

/* 2) Crie um evento em que, ao passar o mouse em cima do h1, o texto mude para "Praticando Eventos!" e também fique centralizado. */
titulo.addEventListener("mouseover", function(){
    titulo.textContent = "Praticando Eventos!";
    
    // Solução 1: usando uma classe
    // titulo.classList.add("centralizar");

    // Solução 2: usando style inline
    titulo.style.textAlign = "center";
});


/* 3) Faça também um evento de clique para que, quando clicar na palavra "Referências", o texto do h1 volte para a palavra "Eventos" e o alinhamento volte a ficar à esquerda (padrão). */

const referencias = document.querySelector("#referencias");

referencias.addEventListener("click", function(){
    titulo.textContent = textoOriginal;
    titulo.style.textAlign = "left";
});

/* Exemplo 3: modo noturno */
const botaoModoNoturno = document.querySelector("#noturno");

botaoModoNoturno.addEventListener("click", function(){
    /* Usamos o toggle para alternar entre adicionar a classe OU
    remover a classe, de acordo com cada clique no botão. */
    pagina.classList.toggle("modo-noturno");

    /* DESAFIOS!
    1) Faça a mudança de cores acontecer gradualmente (use o transition!)*/
    pagina.style.transition = "2s";

    /* 2) Se o modo noturno estiver ativado, ou seja, se a classe modo-noturno
    estiver aplicada à página, faça o texto do botão mudar para "Desativar".
    Caso contrário, faça o texto do botão exibir "Ativar". */
    if(pagina.classList.contains("modo-noturno")){
        botaoModoNoturno.textContent = "Desativar";
    } else {
        botaoModoNoturno.textContent = "Ativar";
    }
});


/* Exemplo 02 */
const janelaModal = document.querySelector("#janelinha");

/* Esta função lida com o evento (mouse) monitorado pelo
listener no document.

Se a posição Y do mouse for abaixo de zero, ou seja, acima do
topo do documento, fazemos a janelinha ser exibida (showModal)
e desativamos o listener e a própria função, garantindo que essa
rotina funcione somente uma vez. */
function gerenciarJanela(event){
    if(event.clientY < 0){
        janelaModal.showModal();        
        document.removeEventListener("mouseout", gerenciarJanela);
    }
}

// Monitorando o evento mouseout no documento inteiro
document.addEventListener("mouseout", gerenciarJanela);

/* Selecionamos o botão existente DENTRO da janelaModal (já selecionada anteriormente.) */
const botaoFechar = janelaModal.querySelector("button");

/* Quando acontecer o acionamento/clique no botão Fechar, fazemos a janelaModal fechar (close) */
botaoFechar.addEventListener("click", function(){
    janelaModal.close();
});
