// + - * / % **

let n1 = 10;
let n2 = 5;
let n3 = 27;

//Operadores aritmeticos

//console.log(n1 + n2);
//console.log(n1 - n2);
//console.log(n1 * n2);
//console.log(n1 / n2);
//console.log(n1 % n2);
//console.log(2 ** 3);

//Operadores de atribuiçao
////let n3 = 20;
//n3 = n3 + 15;
//n3 += 2;
//console.log(n3);

//Operadores de encremento e decremento
// ++ --
//let i = 0;
//console.log(i--);
//console.log(i);

//Operadores de comparação

/*
igualdade de valor ==
igualdade de valor e tipo ===
<, >, <=, >=
!= valores diferentes
!== valores e tipos diferentes

console.log(n1, n2, n3);
let n5 = "10";
let n6 = 10; 
console.log("Igualdade entre valor: ", n1 == n5);
console.log("Igualdade entre valor e tipo: ", n1 === n5);
console.log("Igualdade entre valor e tipo: ",n1 === n6);
console.log("n2 é menor que n5: ", n2 < n5)
console.log("n2 é maior que n5: ", n2 > n5)
console.log("n2 é menor igual a n5: ", n2 <= n5)
console.log("n2 é maior igual a n5: ", n2 >= n5)
console.log("Diferença entre valores: ", n2 != n5)
console.log("Diferença entre valor e tipo: ", n2 !== n6)

*/

//Operadores logico
/**
 * Para uma pessoa viajar para o exterior precisa ser maior de 18 anos
 * -OU
 * Acompanhando com os pais
 * -E
 * ter comprado bilhete
 */

 let idade = 21;
 let paisPresentes = false;
 let comprouBilhete = true;
 const podeViajar = (idade >= 18 || paisPresentes) && comprouBilhete;
 console.log(`Pode viajar: ${podeViajar}`)

