//var, let, const

//var -> ES5 - cross-Browser
//let e const -> ES2015
//Usar o let é mais seguro - var permite declarar mais variables com mesmo nome, let não;
let teste = "Minha string"
teste = 10;

let teste2 = 10
console.log(teste2);
let teste3;

teste3 = 20;
const teste4 = "Eu sou imutavel";
console.log(teste4);
console.log(teste3);
