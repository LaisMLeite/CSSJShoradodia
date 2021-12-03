function carregar(){
    var msg = document.querySelector("div.msg")
    var img = document.querySelector("img.img")
    var mensg = document.querySelector("div.mensg")
    var data = new Date()
    var minutos = data.getMinutes()
    var segundos = data.getSeconds()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas, ${minutos} minutos e ${segundos} segundos.`

    if (hora >= 0 && hora < 12){ //BOM DIA
        img.src = 'manhãpq.png'
        document.body.style.background = 'rgb(231, 215, 124)'
        mensg.innerHTML = 'Tenha um bom dia!'
    } else if (hora > 12 && hora < 18){ //BOA TARDE
        img.src = 'tardepq.png'
        document.body.style.background = 'rgb(189, 119, 39)'
        mensg.innerHTML = 'Boa tarde!'
    } else { //BOA NOITE
        img.src = 'noitepq.png'
        document.body.style.background = 'rgb(30, 30, 70)'
        mensg.innerHTML = 'Boa noite!'
    }
}