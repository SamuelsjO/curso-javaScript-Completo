function minhaFunc(){
    if(true){
        // var reside na funçao inteira
        var x = 10
    }
    console.log(x) //10
}
//console.log(x) //erro



function minhaFunc2(){
    if(true){
        //escopo de bloco let ou const
        let y = 10
    }
    console.log(y) //10
}
console.log(y) //erro