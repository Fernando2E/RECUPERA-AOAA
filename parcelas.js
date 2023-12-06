const fmr = document.querySelector("form")
const resp = document.querySelector("pre")

//ouvinte
fmr.addEventListener("submit", (e)=>{
    e.preventDefault()

    const valor = Number(fmr.inValor.value)
    const num = Number(frm.inParcela.value)
    const valorParcela = Math.floor(valor /num)
    let valorFinal = valorFinal + (valor % num)
    let resposta = ""
    for(let i = 1; i < num; i++){
        resposta = resposta + i +"° Parcela: R$" + valorFinal.toFixed(2) + "\n"
    }
    resposta = resposta + num +"° Parcela: R$" + valorFinal.toFixed(2)
    resp.innerText = resposta
})