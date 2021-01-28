function formatarNomes(nomeCompleto) {
  let nomeAsArray = nomeCompleto.split(" ")

  if(nomeAsArray.length === 1){
      return nomeCompleto
  }

  let primeiroNome = nomeAsArray.shift()
  return nomeAsArray.join(" ") + ", " + primeiroNome
}

console.log(formatarNomes("Samuel"))
console.log(formatarNomes("Samuel Jose"))
console.log(formatarNomes("Samuel Jose Souza"))