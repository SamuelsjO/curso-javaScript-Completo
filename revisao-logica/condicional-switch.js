
let diaSemana = 3;
let dia = ""
switch( diaSemana){

    case 0:
        dia = "Segunda"
        break
    case 1:
        dia = "Terça"
        break
    case 2:
        dia = "Quarta"
        break
    case 3:
        dia = "Quinta"
        break
    case 4:
        dia = "Sexta"
        break
    case 5:
        dia = "Sabado"
        break
    case 6:
        dia = "domingo"
        break
    default:
        dia = " -- "
}
console.log(`hoje é ${dia}`)