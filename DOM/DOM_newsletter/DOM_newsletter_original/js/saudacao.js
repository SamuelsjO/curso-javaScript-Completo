const txtEmail = document.getElementById("txtEmail")
const msgFeedBack = document.getElementById("newsletterFeedback")


function cadastrarEmail(){
    let email = txtEmail.value
    msgFeedBack.innerHTML = `O email ${email} foi cadastrado com sucesso`

}