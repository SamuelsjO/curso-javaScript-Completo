function somar(){
    console.log(arguments)
    let total = 0;
    for(let i = 0; i < arguments.length; i++){
        total += arguments[i]
    }
    return total
    
}
console.log(somar(1,2,3,4))
console.log(somar(4,4,3,4,4,4,4))
console.log(somar(1,1,1,1))


//Function expression

const somar1 = function (){
    console.log("Function expression")
    console.log(arguments)
    let total = 0;
    for(let i = 0; i < arguments.length; i++){
        total += arguments[i]
    }
    return total
    
}
console.log(somar1(1,2,3,4))
console.log(somar1(4,4,3,4,4,4,4))
console.log(somar1(1,1,1,1))


//Aerow function para usar arguments is not defined

const somar2 = () => {
    console.log("Aerow function")
    console.log(arguments)
    let total = 0;
    for(let i = 0; i < arguments.length; i++){
        total += arguments[i]
    }
    return total
    
}
console.log(somar2(1,2,3,4))
console.log(somar2(4,4,3,4,4,4,4))
console.log(somar2(1,1,1,1))