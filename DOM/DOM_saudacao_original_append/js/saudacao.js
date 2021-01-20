(function() {
    const nomeUsuario = null
   
   if(nomeUsuario){

    const topBarElement = document.createElement("div")
    topBarElement.className = "top-bar"
    topBarElement.innerHTML = `<p> Olá, <br> ${nomeUsuario} </b></p>`

    const elementoPai = document.querySelector(".hero")
    elementoPai.insertBefore(topBarElement, elementoPai.firstElementChild)

   }

})()