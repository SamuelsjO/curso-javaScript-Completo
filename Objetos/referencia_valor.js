let x = [10]
let y = {n: 10}

function mudax(x){
    x.push(11)
    console.log("x interno: " ,x)
}
mudax(x)
console.log("x externo: " ,x)

function mudarY(obj){
    obj.n++
}

mudarY(y)
console.log(y)