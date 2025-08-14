function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var sexo = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            sexo = 'Homem'
            if (idade >= 0 && idade <= 10){
                img.setAttribute('src', "imagens/bebe-h.jpg")   //criança
            }else if (idade < 21){
                img.setAttribute('src', "imagens/jovem-h.jpg")   //Jovem
            } else if (idade < 50){
                img.setAttribute('src', "imagens/adulto-h.jpg")   //Adulto
            } else {
                img.setAttribute('src', "imagens/idoso-h.jpg")   //Idoso
            }
        } else {
            sexo = 'Mulher'
            if (idade >= 0 && idade <= 12){
                img.setAttribute('src', "imagens/bebe-m.jpg")  //criança
            }else if (idade < 21){
                img.setAttribute('src', "imagens/jovem-m.jpg")  //Jovem
            } else if (idade < 50){
                img.setAttribute('src', "imagens/adulto-m.jpg")//Adulto
            } else {
                img.setAttribute('src', "imagens/idosa-m.jpg")//Idoso
            }
        }
        res.innerHTML = `Detectamos ${sexo} com ${idade} anos.`
        res.appendChild(img)
    }
}