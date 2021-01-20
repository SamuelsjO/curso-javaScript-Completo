//criar uma array com numeros randomicos nao repetidos
function generationRandomInterger(max){

    return parseInt(Math.random() * max)
}

let arr = []

while(arr.length <= 20){
    let ramdomNumber = generationRandomInterger(30)
    if(arr.indexOf(ramdomNumber) < 0){
        arr.push(ramdomNumber)
    } else {
        console.log(ramdomNumber, " Já existe no arr")
    }
}

console.log(arr)