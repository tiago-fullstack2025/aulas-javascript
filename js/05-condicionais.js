'use strict';

/* Comandos Condicionais mais comuns:
if      ->  SE
else    ->  SENÃO 
*/

console.log("Exemplo 1");

let numero = 50;

// Condicional SIMPLES (usa apenas if)
if (numero >= 10) {
    console.log("Se vc está vendo essa mensagem é porque a condição é VERDADEIRA!");
}

console.log("\nExemplo 2");

let aluno = "Ozzy";
let idade = 50;

/* Lógica: verificar se o aluno é maior ou menor de idade. */

// Condicional COMPOSTA (if/else)
if (idade < 18) {
    console.log("Você é menor de idade!");
} else {
    console.log("Você é maior de idade!");
}
