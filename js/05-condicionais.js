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

/* Exercício Condicional
1. Crie duas variáveis conforme a seguir:
 
- Nota 1 (contendo um valor de 0 a 10)
- Nota 2 (contendo outro valor de 0 a 10) */
let nota1 = 5;
let nota2 = 5;
 
/* 2. Crie uma variável chamada "Média" que receberá o valor CALCULADO da média das duas notas informadas. 
DICA: você deve SOMAR as duas notas e DEPOIS dividir por 2.*/
let media = (nota1 + nota2) / 2;
 
/* 3. Programe uma condicional que verifique o valor da média calculada. Se a média for maior/igual a 7, mostre "aprovado". Caso contrário, mostre "reprovado". */
console.log("\nMédia: "+media);
if (media >= 7) {
    console.log("Aprovado 😊");    
} else {
    console.log("Reprovado 🙁");    
}

// Versão 2: lógica inversa
/* if(media < 7){
    console.log("Reprovado 🙁"); 
} else {
    console.log("Aprovado 😊");    
} */

console.log("\nExemplo 3");


// Condicional ENCADEADA/SUCESSIVA

/* Verificando o desempenho do aluno
conforme a média:
- Média acima de 9? ótimo
- Média acima de 7? bom
- Média acima de 5? ruim
- Média até 5? péssimo */
if(media > 9){
    console.log("ÓTIMO!");
} else if(media > 7){
    console.log("BOM!");
} else if(media > 5){
    console.log("RUIM!");
} else {
    console.log("PÉSSIMO!");    
}