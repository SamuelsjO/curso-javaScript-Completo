const teste = function(cb) {
    console.log("funçao teste")
    console.log(cb)
    typeof cb === "function" && cb(30) //curto circuito, valida se cb é uma function, mesma funcionalidade de um if(typeof cb === "function")
    
}

const fn = function (param){
    console.log("funçao anomina de callback: ", param)
    console.log(param)
}

teste(fn)