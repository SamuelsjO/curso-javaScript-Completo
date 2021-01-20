const pessoa = {
    nome: "Maria",
    idade: 28,
    email: "samucagm@gmail.com",
    cpf: 10636132641
}

console.log(pessoa)

for(let prop in pessoa){
    console.log(prop)
    console.log(pessoa[prop])
}