(function () {

    const trHeader = document.querySelector("thead tr")
    const thsHeader = document.querySelectorAll("th")
    const thsAlunoNotas = trHeader.querySelectorAll("[aluno-nota]")

    const ALUNO_INDICE = {}

    Array.from(thsAlunoNotas).forEach(function(th){

        let prop = th.getAttribute("aluno-nota")
        ALUNO_INDICE[prop] = pegarIndice(prop)

    })

    function pegarIndice(indice) {

        const th = trHeader.querySelector(`[aluno-nota="${indice}"]`)

        const ind = [...thsHeader].indexOf(th)

        return ind
    }

    


    const trs = document.querySelectorAll("tbody tr")

    let x = 0
    let media = 0

    while (trs[x]) {

        const tds = trs[x].querySelectorAll("td")

        media = avarege(
            parseFloat(tds[ALUNO_INDICE.n1].textContent),
            parseFloat(tds[ALUNO_INDICE.n2].textContent),
            parseFloat(tds[ALUNO_INDICE.n3].textContent),
            parseFloat(tds[ALUNO_INDICE.n4].textContent)
        )
        x++

        tds[ALUNO_INDICE.media].textContent = media
    }
})()