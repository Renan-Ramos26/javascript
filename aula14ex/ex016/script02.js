function contar() {
    var n1t = document.getElementById('txtn1')
    var n2t = document.getElementById('txtn2')
    var past = document.getElementById('txtp')
    var res = document.getElementById('res')
    if (n1t.value.length == 0 || n2t.value.length == 0 ) {
        window.alert('[ERRO]  Valores inválidos!!')
    } else {
        res.innerHTML = 'Contando: <br>'
        var n1 = Number(n1t.value)
        var n2 = Number(n2t.value)
        var passo = Number(past.value)
        if (passo <= 0) {
            window.alert('ERRO!! Passo valendo 1')
            passo = 1
        }
        if (n1 <= n2) {
            while (n1 <= n2){
                res.innerHTML += `${n1} \u{1F449}`
                n1 += passo
            }
        } else {
            while (n1 >= n2){
                res.innerHTML += `${n1} \u{1F449}`
                n1 -= passo
            }
        } res.innerHTML += `\u{1f3c1}`  //Só funciona entre crazes
    }
}