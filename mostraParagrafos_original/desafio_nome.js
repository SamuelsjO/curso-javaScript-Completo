function formatarNomes(nomeCompleto) {
    nomeCompleto = nomeCompleto.trim()
    let primeiroEspaco = nomeCompleto.indexOf(" ")
    //let primeiroEspaco = nomeCompleto.lastIndexOf(" ")
    if(primeiroEspaco < 0){
        return nomeCompleto
    }

    let primeiroNome = nomeCompleto.slice(0, primeiroEspaco)
    let sobreNome = nomeCompleto.slice(primeiroEspaco + 1)

    return sobreNome + ", " + primeiroNome
}

console.log(formatarNomes("Samuel"))
console.log(formatarNomes("Samuel Jose"))
console.log(formatarNomes("Samuel Jose Souza"))