let arr1 = [1, 2, 3]
let arr2 = [5, 6, 7]

//toString mostra uma representaçao como string
console.log("Metodo toString(): ", arr1.toString())

//metodo join retorna uma string, porem pode receber paramentros
console.log("Metodo join: ", arr1.join(" - "))

//concat junta arrays
let arr3 = arr1.concat(arr2, "ola mundo", 89, 23)

console.log("Metodo concat: ", arr1)
console.log("Metodo concat: ", arr2)
console.log("Metodo concat: ", arr3)