let str1 = "Minha string Bacanuda"
console.log(str1.replace("i", "o"))
console.log(str1)

console.log("indexOf i: ", str1.indexOf("i"))
console.log("lastIndexOf i: ", str1.lastIndexOf("i"))

console.log("Includes: ", str1.includes("minha"))
console.log("indexOf minha: ", str1.indexOf("minha"))
console.log("indexOf minha condiçao: ", str1.indexOf("minha") >= 0)

//Segunda parte

console.log(str1.slice(2, 7))
console.log(str1.substring(2,7))

console.log(str1.slice(-2))
console.log(str1.substring(-2))

console.log(str1.toUpperCase())
console.log(str1.toLocaleLowerCase())

let strAsObj = new String("Minha string como objeto")
console.log(strAsObj)
console.log(strAsObj.valueOf())
console.log(strAsObj.toString())

const greeting ="    "+ str1 + "     ";
console.log(greeting)
console.log(greeting.trim())
console.log(greeting.trimEnd())
console.log(greeting.trimStart())

let str2 = "0123456789"
console.log(str2.padStart(20))
console.log(str2.padStart(20, "*"))
console.log(str2.padEnd(20))
console.log(str2.padEnd(20, "*"))
console.log(str2)
// "---------------------------------"


// 9****-**35
// 1234
// 1***-**45

let telefone1 = "99726-3735"
let telefone2 = "1234-2345"
function mascaraTelefone(numero){
    let hifemPosicao = numero.indexOf("-")
    let numeroInicio = numero.slice(0, hifemPosicao)
    let numeroFinal = numero.slice(hifemPosicao + 1)

    let doisUltimoNumber = numeroFinal.slice(-2)
    console.log(numeroInicio)

    return `${numeroInicio[0].padEnd(numeroInicio.length, "*")}-${doisUltimoNumber.padStart(numeroFinal.length, "*")}`
}
 

console.log(mascaraTelefone(telefone1))
console.log(mascaraTelefone(telefone2))

let str3 = "Hoje e quarta"
console.log(str3.startsWith("Hoje"))
console.log(str3.endsWith("Hoje"))
console.log("_------------------------_")
console.log(str3.startsWith("Hoje", 1))
console.log(str3.endsWith("e", 6))


let str4 = "abcdefgh"
console.log(str4.charAt(1))
console.log(str4[1])
console.log(str4.charCodeAt(0))
console.log(str4.charCodeAt(1))
console.log(str4.length)









