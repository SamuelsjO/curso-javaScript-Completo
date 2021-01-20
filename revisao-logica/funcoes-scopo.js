let n = "global"

function mostraN(){
    let n1 = "local"
    
    if(true){
        let n1 = "n1 Dentro de if com let"
    }
    console.log("valor de n: " + n1)
}

mostraN()
console.log("valor de n escopo global: " + n)




function fnExtern(){
    let n = "n local na funçao fnExterna"

    function fnInterna(){
        n = "n local na funçao fninterna"
        console.log(n)
    }
    fnInterna()
    console.log(n)
}
fnExtern()

