const arr = [1, 5, 10, "ola", true]


// every retorna true se todo o array satisfazer  a condição return typeof el === "number"
let soNumeros = arr.every( function(el) {
    return typeof el === "number"
})

// some retorna true se pelo um dado do array sastifazer a condiçao  return typeof el === "number"
let soNumerosSome = arr.some( function(el) {
    return typeof el === "number"
})

// filter filtra elementos de um arr e não alterar um arr original
let arr1 = arr.filter(function(el, i, _arr) {

     return typeof el === "number"
})

//forEach sempre retorna undefined, ele percorre um array iterando dados
arr.forEach(function(el, i, _arr){
    console.log(el, ": ",i)
})


// map transforma o array
arr1 = arr1.map(function(el, i, _arr){

    return el * el
})

console.log("everry arr: ", soNumeros)
console.log("some arr: ", soNumerosSome)
console.log("Filter: ", arr1)
