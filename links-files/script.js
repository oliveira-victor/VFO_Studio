let greetings = document.querySelector('.horario')
let date = new Date()
let hour = date.getHours()

function nightSky() {
    var btn = document.getElementsByTagName('button')
    for (let i = 0; i < btn.length; i++) {
        btn[i].classList.remove("btn-day")
        btn[i].classList.add("btn-night")
    }
    document.querySelector('.logo').innerHTML = '<img src="links-files/logo2.svg" alt"Logo VFO Studio light">'
    document.body.style.background = '#1e2146'
    document.querySelector('.horario').style.color = '#fff'
    document.querySelector('footer').style.color = '#fff'
    document.querySelector('.bg').style.backgroundImage = "url('links-files/bg-stars.png')"
}


if (hour >= 0 && hour < 6) {
    greetings.innerHTML = '<h2>Good morning!</h2>'
    document.querySelector('.char').innerHTML = '<img src="links-files/char1.png" alt="Ilustração garota flutuante">'
    nightSky()
} else if (hour >= 6 && hour < 12) {
    greetings.innerHTML = '<h2>Good morning!</h2>'
    document.body.style.background = '#a4e8e5'
    document.querySelector('.char').innerHTML = '<img src="links-files/char2.png" alt="Ilustração raposa">'
    document.querySelector('.bg').style.backgroundImage = "url('links-files/bg1.png')"
} else if (hour >= 12 && hour < 19) {
    greetings.innerHTML = '<h2>Good afternoon!</h2>'
    document.body.style.background = '#62b3d7'
    document.querySelector('.char').innerHTML = '<img src="links-files/char3.png" alt="Ilustração Jacaré">'
    document.querySelector('.bg').style.backgroundImage = "url('links-files/bg2.png')"
} else if (hour >= 19) {
    greetings.innerHTML = '<h2>Good evening!</h2>'
    document.querySelector('.char').innerHTML = '<img src="links-files/char4.png" alt="Ilustração garota flutuante">'
    nightSky()
} else {
    greetings.innerHTML = '<h2>Hello!</h2>'
    document.querySelector('.char').innerHTML = '<img src="links-files/char4.png" alt="Ilustração garota flutuante">'
}
    