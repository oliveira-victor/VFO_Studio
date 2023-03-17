let greetings = document.querySelector('.greetings');
let date = new Date();
let hour = date.getHours();
let year = date.getFullYear();

// Greetings
if (hour >= 0 && hour < 6) {
    greetings.innerHTML = '<h1>Good morning!</h1>'
} else if (hour >= 6 && hour < 12) {
    greetings.innerHTML = '<h1>Good morning!</h1>'
} else if (hour >= 12 && hour < 19) {
    greetings.innerHTML = '<h1>Good afternoon!</h1>'
} else if (hour >= 19) {
    greetings.innerHTML = '<h1>Good evening!</h1>'
}

// Footer
document.querySelector('#footer-txt').innerHTML = `&copy; ${year} VFO Studio • <nobr>by Victor Freire Oliveira</nobr><br>All rights reserved<br><a href="https://github.com/oliveira-victor" target="_blank">github.com/oliveira-victor</a>`