// string, number (int, float), boolean
// undefined, null, symbol(ES2015)

let minhaVar = "minha String";
let minhaVar2 = "minha \"String\" com aspas duplas com barra e escape"

console.log(minhaVar2)

let idade = 40;
//let msg = "Eu possuo "+idade+" anos"

let msg = `Eu possuo ${idade} anos`


console.log(typeof msg, typeof idade, typeof minhaVar)


// tipo de dados number

const n1 = 10;
const n2 = 1.1;
console.log(`o tipo de n1 é ${typeof n1} e seu valor é ${n1}`)
console.log(`o tipo de n1 é ${typeof n2} e seu valor é ${n2}`)

// tipo de dados bollean

const isValide = false;
console.log(`isValid: ${isValide}`)

// tipo undefined, null
let varTest = null;

console.log(varTest)
console.log(typeof varTest)