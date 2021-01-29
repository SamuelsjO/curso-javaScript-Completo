let numero = 1234567.890

console.log(numero.toFixed(5))
console.log(typeof numero.toFixed(2))

console.log(numero.toPrecision(15))


numero = 12.34567
console.log(numero.toExponential())
console.log(numero.toExponential(4))

numero = 15
console.log(numero.toString())
//binario
console.log(numero.toString(2))
//hexadecimal
console.log(numero.toString(16))

numero = 123456789

console.log(numero.toLocaleString())
console.log(numero.toLocaleString("pt-PB", {style: "currency", currency: "BRL"}))
console.log(numero.toLocaleString("pt-PT", {style: "currency", currency: "EUR"}))
console.log(numero.toLocaleString("pt-en", {style: "currency", currency: "USD"}))

console.log("MAX VALUE: ",Number.MAX_VALUE, "MIN VALUE: ",Number.MIN_VALUE)