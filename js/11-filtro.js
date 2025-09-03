'use strict';

const campoBusca = document.querySelector("#busca");
const clientes = document.querySelectorAll("#clientes li");

// Monitorando a digitação em tempo real dentro do campo de busca
campoBusca.addEventListener("input", function(){
    // Capturando o que é digitado e transformando em letra minúscula
    const termoDigitado = campoBusca.value.toLowerCase();
    
    // Acessando cada cliente dentro da lista de clientes
    for(const cliente of clientes){
        // Se o nome do cliente incluir algum caractere digitado
        if(cliente.textContent.toLowerCase().includes(termoDigitado)){
            // Então mantemos o <li> visível
            cliente.style.display = "list-item";
        } else {
            // Senão, escondemos o <li>
            cliente.style.display = "none";
        }
    }
});
