'use strict';

const campoSenha = document.querySelector("#senha");
const botaoMostrar = document.querySelector("#mostrar");

/* Monitoramos o evento pointerdown/pointerup pois ele funcionará tanto
para o acionamento com mouse no desktop quanto com o dedo em mobile */

botaoMostrar.addEventListener("pointerdown", function(){
    // Tá "segurando" o botão? Troca o type pra text e mostra senha
    campoSenha.type = "text";
});

botaoMostrar.addEventListener("pointerup", function(){
    // Soltou o botão? Volta o type pra password e esconde a senha
    campoSenha.type = "password";
});

// pointermove, pointerout, pointerleave
botaoMostrar.addEventListener("pointerleave", function(){
    campoSenha.type = "password";
});