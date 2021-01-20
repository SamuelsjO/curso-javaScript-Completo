
const pessoas = [{
    nome: "Samuel",
    idade: 31
}, {

    nome: "Anderson",
    idade: 30

}, {

    nome: "Santos",
    idade: 52

}, {

    nome: "Samela",
    idade: 23
}]

console.log(pessoas[0].nome)

for(let i = 0; i<pessoas.length; i++){
    console.log(`${pessoas[i].nome} possui ${pessoas[i].idade} anos`)
}