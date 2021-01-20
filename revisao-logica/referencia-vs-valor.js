
function alertaArray(array1){
    array1.push("adicionado")
}

let array2 = ["a"]
console.log(array2)
alertaArray(array2)
console.log(array2)

function alteraPrimitivo(p){
    p += " adicionado"
    console.log(" Dentro da funçao: ", p)
}

let msg = "mensagem a ser"
console.log(msg)
alteraPrimitivo(msg)
console.log(msg)
