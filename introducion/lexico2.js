//tipagem dinamica

let x = 10
x = "uma string"
console.log(x)

//aspas simples e dupla

let msg = 'uma "string" msg'
console.log(msg)

//not a number

console.log("ola" * 2)

//conversao implicita

console.log("2" * 2)

//this dinamico

function test(){
    console.log(this)
}
const teste2 = () => {
    console.log('teste2')
    console.log(this)
}
test()

const obj = {
    n: 0,
    test,
    teste2
}

obj.teste2()