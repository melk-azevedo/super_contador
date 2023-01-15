function contar() {
    let inc = document.getElementById("txti")
    let fim = document.querySelector("input#txtf")
    let passo = document.querySelector("input#txtp")
    let res = document.getElementById("res")

    if (inc.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = "Impossivel contar!"
        window.alert(['ERRO Faltam dados!'])
    } else {
        res.innerHTML = `Contando: <br>`
        let i = Number(inc.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if (p <= 0) {
            window.alert("Passo inválido! Considerando PASSO 1")
            p = 1
        }

        if (i <= f) {
            // Contagem crescente
            let c = i
            while (c <= f) {
                res.innerHTML += `${c} \u{1F449}`
                c += p
            }
            res.innerHTML += band
        } else {
            // Contagem regressiva
            let c = i
            while (c >= f) {
                res.innerHTML += `${c} \u{1F449}`
                c -= p
            }
            res.innerHTML += `\u{1F3C1}`
        }
    }
}