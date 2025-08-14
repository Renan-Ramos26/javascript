function carregar() {
    var msg = window.document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        img.src = 'imagem/manha.jpg'  
        document.body.style.background = '#e2cd9f' //Bom dia!
    } else if (hora >= 12 && hora < 18) {
        img.src = 'imagem/tarde.jpg' 
        document.body.style.background = '#e69f4eff'      //Boa tarde
    } else {
        img.src = 'imagem/noite.jpg' 
        document.body.style.background = '#2a5ac2ff'     //Boa noite
    }
}

