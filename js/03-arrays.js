'use strict';

// Declarando um array (vetor)
let vocalistas = ["Ozzy", "Dio", "Lemmy", "David Gilmour"];

// Se quisermos visualizar a estrutura do array inteiro:
// console.log(vocalistas);

// Acessando um determinando elemento através do índice
console.log(vocalistas[0]);

// O David Gilmour está em turnê tocando Pink Floyd
console.log(`O ${vocalistas[3]} está em turnê tocando Pink Floyd`);


// Relembrando como criar/usar arrays (vetor)
// No JS, vc pode colocar qualquer coisa em um array
let seiLa = 6;
const coisas = [10, "Senac", "<h2>Oie</h2>", seiLa, 15.88];
console.log(coisas[1]);
console.log(coisas[4]);

/* Exercícios (FAÇA AQUI MESMO!) */

// 1) Crie um array contendo o nome de 7 coisas que vc gosta (exemplos: artistas, músicas, livros, comida... sei lá, inventa!)
let coisasQueGosto = ["Rush", "Pink Floyd", "Adele", "Deep Purple", "Slayer", "Demônios da Garoa", "Metallica"];

// 2) Em seguida, mostre no console uma frase personalizada indicando o segundo, o quinto e o sétimo elemento do array. Use concatenação e/ou template string.
console.log(coisasQueGosto[1]);
console.log(coisasQueGosto[4]);
console.log(coisasQueGosto[6]);

console.log(`Gosto muito dos artistas: ${coisasQueGosto[1]}, ${coisasQueGosto[4]} e ${coisasQueGosto[6]}.`);

/* Array como MATRIZ DE 2 DIMENSÕES */
const tecnologias = [
    ["HTML", "CSS", "JAVASCRIPT"],
    ["Figma", "Photoshop"],
    ["PHP", "Node.js", "SQL", "Express"]
];

// console.log(tecnologias);
console.log(tecnologias[0][2]); // JAVASCRIPT
console.log(tecnologias[1][0]); // Figma
console.log(tecnologias[2][3]); // Express









