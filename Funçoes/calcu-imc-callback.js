
    function calcularIMC(peso, altura, cb) {
            if(peso === undefined || altura === undefined){
                throw Error("need two paramenters: weight and heigth")
            }
            let imcCal=peso / (altura * altura)
            if(typeof cb === "function"){
                return cb(imcCal)
            }
            return imcCal
    }


    function classificaIMC(resultIMC) {
        if(resultIMC <= 16.9){
            return 'Muito abaixo do peso'
        } else if (resultIMC <= 18.4) {
            return 'Abaixo do peso'
        } else if (resultIMC <= 24.9) {
            return 'Peso Normal'
        } else if (resultIMC <= 29.9) {
            return 'Acima do peso'
        } else if (resultIMC <= 34.9) {
            return 'Obesidade Grau I'
        } else if (resultIMC <= 40){
            return 'Obesidade Grau II'
        } else {
            return "Obesidade Grau III"
        }
    }

    
    let resultIMC = calcularIMC(72.5, 1.73) // passar paramentro pra calculo de media
    let resultIMC2 = calcularIMC(72.5, 1.73, classificaIMC) // passar paramentro pra calculo de media

    console.log("IMC: ", resultIMC)
    console.log("IMC: ", resultIMC2)
    

