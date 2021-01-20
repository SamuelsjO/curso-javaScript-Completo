let arr1 = [1,2,3,4]

//reverse inverte a ordem do array
console.log("Reverse: ",arr1.reverse())

//reduce faz um loop em cada elemento, retora um unico valor
let arr = [1,2,3,4]
let j = 0
let soma = arr.reduce( function(acumulador, atual, i, _arr){
    console.log("i: ", i)
    console.log("j: ", j++)
    console.log("Acumulador: ", acumulador, "---Atual: ", atual)
    return acumulador + atual
}, 0)
console.log("Reduce: ", soma)
console.log(arr)


/**nomes ordenados pela primeira letra */
const nomes = ["Daniel", "maria", "joana", "joao"]
let nomesOrd = nomes.reduce( function(nomes, nomeAtual){
    let primeiraLetra = nomeAtual[0]
    if(nomes[primeiraLetra]){
        nomes[primeiraLetra]++
    } else {
        nomes[primeiraLetra] = 1
    }
    return nomes
}, {})

console.log("Nomes metodo reduce: ", nomesOrd)