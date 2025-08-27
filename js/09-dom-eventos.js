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
})




