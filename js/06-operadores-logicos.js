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




