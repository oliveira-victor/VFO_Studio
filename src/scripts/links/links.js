let greetings = document.querySelector('.greetings');
let date = new Date();
let hour = date.getHours();
let year = date.getFullYear();

// Greetings
function dayTime() {
    var dayTimeLayers = document.getElementsByClassName('light');

    for (var i=0; i < dayTimeLayers.length; i++) {
        dayTimeLayers[i].style.display = 'block'
    }
}

function nightTime() {
    var nightTimeLayers = document.getElementsByClassName('dark');
    document.getElementById('bio').style.background = '#202020';

    for (var i=0; i < nightTimeLayers.length; i++) {
        nightTimeLayers[i].style.display = 'block'
        greetings.style.color = '#e2d54f'
        document.querySelector('.description__button').classList.add('dark-txt')
    }
}

if (hour >= 0 && hour < 6) {
    greetings.innerHTML = '<h1>Good morning!</h1>'
    nightTime()
} else if (hour >= 6 && hour < 12) {
    greetings.innerHTML = '<h1>Good morning!</h1>'
    dayTime()
} else if (hour >= 12 && hour < 19) {
    greetings.innerHTML = '<h1>Good afternoon!</h1>'
    dayTime()
} else if (hour >= 19) {
    greetings.innerHTML = '<h1>Good evening!</h1>'
    nightTime()
}

// Footer
document.querySelector('#footer-txt').innerHTML = `
&copy; ${year} VFO Studio • <nobr>by Victor Freire Oliveira</nobr>
<br>All rights reserved<br>
<a href="https://github.com/oliveira-victor" target="_blank">
    github.com/oliveira-victor
</a><br><br>
<p>
    <u>English</u> | <a class="inactive-txt" href="./links-pt.html">Português</a>
</p>
`