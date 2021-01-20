teste()

function teste(){
    console.log("teste")
}


//Içando a funçao atribuindo uma funçao ah uma const

//chamando antes nao vai rodar
//teste2()
const teste2 = function teste2(){
    console.log("teste2")
}

teste2()

//const e let nao funciona o hoisting
const minhaVar = "miha variavel"
console.log(minhaVar)