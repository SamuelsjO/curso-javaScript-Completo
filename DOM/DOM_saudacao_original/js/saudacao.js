(function() {
    const nomeUsuario = null
    const elemento = document.querySelector(".top-bar p")
    if(nomeUsuario){
        //colocar nome em negrito, sempre que for usar uma tag html usar o innerHTMl
        elemento.innerHTML += "<b>" +nomeUsuario+ "</b>"
        //Recupera e mostra valor da funcao na tag HTML
        //elemento.textContent += nomeUsuario
    } else {
        //Esconde o elemento
        //elemento.parentElement.style.display = "none"

        //Remove elemento, porem nao funciona no nos Internet explorer
        //elemento.remove()

        //Remove Elementos filho
        const elementToRemove = elemento.parentElement
        elementToRemove.parentElement.removeChild(elementToRemove)

        
    }
    


})()