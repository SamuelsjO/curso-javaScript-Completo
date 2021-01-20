
 let idade = 18;
 let paisPresentes = false;
 let comprouBilhete = true;
 const podeViajar = (idade >= 18 || paisPresentes) && comprouBilhete;
 console.log(`Pode viajar: ${podeViajar}`)

//  let msgMaiorIdade = "" 
//  if(idade >= 18){
//      msgMaiorIdade = "E maior de idade"
//  } else {
//      msgMaiorIdade = "E menor de 18 anos"
//  }
let msgMaiorIdade = (idade >= 18) ? "Maior de idade" : "Menor de idade"


 if(comprouBilhete){
    console.log("Sim comprou o bilhete")
 } else {
     console.log(msgMaiorIdade);
     
 }

 let n1 = 10;
 let n2 = 7;
 let media = (n1 + n2) / 2
 console.log(`media: ${media}`)


 if(n1 === 0 || n2 ===0){
     console.log("Reprovado")

 } else if(media < 7) {
     console.log("Reprovado, mas a ha como resuperar")
 } else {
     console.log("Aprovado")
 }
 console.log("Saiu if")