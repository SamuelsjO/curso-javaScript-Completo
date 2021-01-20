(function () {
    'use strict';

    const txtTitulo = document.getElementById("txtTitulo")
    const formCadastro = document.querySelector(".formCadastro")

    formCadastro.addEventListener("submit", function (e) {
        if (!txtTitulo.value) {
            showErrorMessage("preencha todos os campos", function () {
                txtTitulo.focus()
            })
            e.preventDefault()

        }
    })

    const feedbackMessage = document.getElementById("feedbackMessage")
    const feedbackMessageCloseBtn = feedbackMessage.getElementsByTagName("button")[0]

    function showErrorMessage(msg, cb) {
        feedbackMessage.classList.add("show")
        feedbackMessage.getElementsByTagName("p")[0].textContent = msg

        feedbackMessageCloseBtn.focus()

        function hideErrorMessage() {
            feedbackMessage.classList.remove("show")
            feedbackMessageCloseBtn.removeEventListener("click", hideErrorMessage)
            feedbackMessageCloseBtn.removeEventListener("keyup", pressedKeyboardOnBtn)

            if (typeof cb === "function") {
                cb()
            }

        }

        function pressedKeyboardOnBtn(e) {
            if(e.keyCode === 27){
                hideErrorMessage()
            }

        }


        feedbackMessageCloseBtn.addEventListener("click", hideErrorMessage)

        feedbackMessageCloseBtn.addEventListener("keyup", pressedKeyboardOnBtn)
    }

    const txtDescricao = document.getElementById("txtDescricao")
    const contadorContainer = document.getElementById("contador")
    const btn = document.getElementById("btn")
    const resta = contadorContainer.getElementsByTagName("span")[0]
    const maxima = txtDescricao.maxLength
    mostrarNumero(maxima)

    contadorContainer.style.display = "block"

    function checkLength() {
        let numeroLetraDigitadas = this.value.length
        let caractRestantes = parseInt(maxima) - parseInt(numeroLetraDigitadas)
        mostrarNumero(caractRestantes)
    }

    function mostrarNumero(n) {
        resta.textContent = n
    }

    txtDescricao.addEventListener("input", checkLength)

    btn.disabled = true

    const chkAceito = document.getElementById("chkAceito")

    function chkAceitoChange() {
        btn.disabled = !this.checked
    }
    chkAceito.addEventListener("change", chkAceitoChange)

})()