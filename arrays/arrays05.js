let arr = [1, 3, 5, 7, 9]

//push adiciona valores no final do array
let test = arr.push(11,13, true, "ola mundo")
console.log("Novo length: ", test)
console.log("Novo array add via push: ", arr)

//pop retorna o ultimo elemento do array, alterando o array original
let ultimoEl =  arr.pop()
console.log("Ultimo elemento retirado no array via POP: ", ultimoEl)
console.log("Array modifcado pelo POP: ", arr)

//shift retorna o primeiro elemento do array, alterando o array original
let primeiroEl = arr.shift()
console.log("Primeiro elemento com SHIFT: ", primeiroEl)
console.log("Array modificado pelo SHIFT: " , arr)

//unshift adiciona valores no inicio do array
test = arr.unshift(4,5,6)
console.log("Metodo unshift, length: ",test)
console.log("Metodo unshift, arr ", arr)

//slice serve recortar um pedaço do elemento
let arr2 = arr.slice(2,4)
console.log("Array original: ", arr)
console.log("slice: ",arr2)

//splice 

let arr3 = arr.splice(2,4, "ola mundo")
console.log("Array original: ", arr)
console.log("splice: ",arr3)