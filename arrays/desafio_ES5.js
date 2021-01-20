function sum() {
    const number = []
    Array.prototype.forEach.call(arguments, function (argument) {
        number.push(argument)
    })

    return number.reduce(function (sum, atual) {
        return sum + atual
    }, 0)
    
}
console.log(sum(1, 2, 3, 4, 5))


function avarege(){
    const soma = sum.apply(null, arguments)
    return soma / arguments.length
}
console.log(avarege(1, 2, 3, 4, 5))