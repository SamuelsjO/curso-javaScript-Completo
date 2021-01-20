(function () {

    function pegarIndice(indice){

        const trHeader = document.querySelector("thead tr")
        const thsHeader = document.querySelectorAll("th")

        const th = trHeader.querySelector(`[aluno-nota="${indice}"]`)

        //const ind = Array.prototype.indexOf.call(thsHeader, th)
        //const ind = Array.from(thsHeader).indexOf(th)
        const ind = [...thsHeader].indexOf(th)

        return ind
    }

    const ALUNO_INDICE = {
        n1: pegarIndice("n1"),
        n2: pegarIndice("n2"),
        n3: pegarIndice("n3"),
        n4: pegarIndice("n4"),
        media: pegarIndice("media")
    }


    const trs = document.querySelectorAll("tbody tr")

    let x = 0
    let media = 0

    while (trs[x]) {
        console.log(trs[x])

        const tds = trs[x].querySelectorAll("td")
        console.log(tds)

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