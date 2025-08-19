'use strict';

/* Operadores LÓGICOS
&&  ->  E               ->  AND
||  ->  OU              ->  OR
!   ->  NÃO/NEGAÇÃO     ->  NOT             */

// && -> retorna TRUE se TODAS as condições forem VERDADEIRAS
console.log("Exemplo &&");
let idade = 20;
let temCarta = true;

if(idade >= 18 && temCarta === true){
    console.log("Pode dirigir");    
} else {
    console.log("Não pode dirigir");
}

/* Sobre duplo e triplo sinal de igual 
- Ao usar == a comparação é somente do VALOR, ou seja, NÃO IMPORTA o tipo de dados (string, number, etc)

- Ao usar === a comparação é do VALOR E DO TIPO DE DADO, ou seja, IMPORTA TUDO. */
let a = 10;
let b = '10'; 
// let resultadoComparacao = a == b; // TRUE
let resultadoComparacao = a === b; // FALSE

console.log(resultadoComparacao);


