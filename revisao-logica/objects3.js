const produto = {
    nome: "Caneta",
    qtd: 10,
    comprar(n){
        if(n > this.qtd){
            return "quantidade nao disponivel"
        }
        this.qtd -= n
    },
    teste1: function(){
        console.log("teste1")
        console.log(this)
    },
    teste2: () =>{
        console.log("teste2")
        console.log(this)
    }

}
console.log(produto)
produto.comprar(5)
console.log(produto)

produto.comprar(13)
console.log(produto)

produto.teste1()
produto.teste2()