let arr =  [4, 5, 10, 20, 35, 4, 5]

//retorna o primeiro index do valor passado no paramentro
console.log(arr.indexOf(5))

//retorna o ultimo index do valor passado no paramentro
console.log(arr.lastIndexOf(5))

//retorna true e false se encontra ou nao
console.log(arr.includes(5))

//simulando o includes para browser mais antigo
console.log("Simulando includes com indexOf: ", arr.indexOf(5) > -1)

//retonar o primeiro elemento (el) que o valor do retorno for true, se nao retorna nada ele o valor é undefined
console.log(arr.find( function(el){
    return el > 5
}))

//retorna o indice do primeiro elemento (el) que o valor do retorno for true, se nao retorna nada ele o valor é -1
console.log(arr.findIndex(function(el){
    return el > 10
}))