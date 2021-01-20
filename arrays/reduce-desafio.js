//retorna numeros unicos com reduce
const numeros = [1, 3, 4, 1, 4, 5, 3, 5, 8, 9]
let numeroUnicos = numeros.reduce( function(numeroUnicos, numeActualy){
    if(numeroUnicos.indexOf(numeActualy) < 0){
        numeroUnicos.push(numeActualy)
    }
    return numeroUnicos
}, [])
console.log(numeroUnicos)