(function () {
    function calcularMedia() {
        let total = 0
        let qtd = arguments.length
        for(let i=0; i < qtd; i++){
            if(typeof arguments[i] !== "number"){
                throw Error("only number")
            }
            total+=arguments[i]
        }
        return (total / qtd) || 0 // tratamento pra caso function não tenha paramentro
    }
   
    let media = calcularMedia(10,20) // passar paramentro pra calculo de media
    console.log("A média retornado pela função é: ", media)
})()