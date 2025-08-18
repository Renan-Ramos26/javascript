function analisar(n){
    if (txtn.value.length == 0 ){
        window.alert('[ERRO] Digite um valor')
    } else {
        let txt = document.getElementById('txtn')
        let res = document.getElementById('res')
        let n = Number(txt.value)
        if (n <= 0 || n >= 100){
            window.alert("[Erro] Valor fora dos parâmetros! Tente novamente!")
        } else {
            res.innerHTML += `Valor ${n} adicionado. <br>`
           // num.push(n)
           // let item = document.createElement('option')
        }
    }
    return n
}
var num = []
num.push(n)

function final() {
    fim = document.getElementById('fim')
    fim.innerHTML = `Ao todo, temos ${num[0]} números cadastrados. <br>`
}
