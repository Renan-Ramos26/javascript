function contar(){
    var n1t = document.getElementById('txtn1')
    var n2t = document.getElementById('txtn2')
    var passot = document.getElementById('txtp')
    var res = document.getElementById('res')
    if ( n1t.value.length == 0 || n2t.value.length ==0 || passot.value.length == 0){
        res.innerHTML = 'Impossível contar!'
        window.alert('[ERRO] dados inválidos!!')
    } else {
        res.innerHTML = `Contando: `
        var n1 = Number(n1t.value)
        var n2 = Number(n2t.value)
        var passo = Number(passot.value)
        if (passo <= 0) {
            window.alert('Passo inválido! Considerando PASSO 1')
            passo = 1
        }
        if (n1 <= n2) {
        //Contagem Crescente
            for(c = n1; c <= n2; c += passo){
                res.innerHTML += `${c} \u{1F449} `
            }
        } else {
        //Contagem Regressiva
            for(let c = n1 ; c >= n2 ; c -= passo) {
                res.innerHTML += `${c} \u{1F449}`
            }   
        } 
        res.innerHTML += `\u{1f3c1}`  //Só funciona entre crazes
    }
}
