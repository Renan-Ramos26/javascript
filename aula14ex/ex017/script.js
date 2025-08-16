function tabuada(){
    let n1t = document.getElementById('n1t')
    let res = document.getElementById('res')
    let tab = document.getElementById('seltab')
    if (n1t.value.length == 0){
        window.alert('[ERRO] Valor inválido!! Tente novamente.')
    } else {
        tab.innerHTML = ' '
        let n1 = Number(n1t.value)
        c = 1
        while (c <= 10){
            let item = document.createElement('option')
            item.text = `${n1} x ${c} = ${c * n1}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
}