// hiding bar
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
    document.getElementById("header").style.top = "0";
    } else {
    document.getElementById("header").style.top = "-80px";
    }
    prevScrollpos = currentScrollPos;
}

// preloader
var loader = document.getElementById('preloader');

setTimeout(function(){
    loader.classList.add("fade-out")
    setTimeout(function(){
        loader.style.display = "none";
    }, 1000);
}, 5000);

window.addEventListener("load", function() {
    
    loader.classList.add("fade-out")
    
    // loader.style.display = "none"
    
    setTimeout(function(){
    loader.style.display = "none";
}, 1000);
    
})

// mosaic
$('#instaheader1').instaheader();
$('#instaheader2').instaheader({
    reuseImages : false,
    delay       : 3000
});
$('#instaheader3').instaheader({
    imageUrl    : 'newpicture.html'
});
$('#instaheader4').instaheader({
    selector    : 'div.bg-img',
    imageUrl    : 'newpicture.html',
    background  : true
});
$('#instaheader5').instaheader({
    selector    : 'div.bg-img',
    background  : true
});

// animated photos
function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
        } else {
        reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal);


// phone menu
let toggleMenu = false
const bottomMenu = document.querySelector('#bottom-menu')
const emptyBottom = document.querySelector('.empty-bottom')

function phoneMenu() {
    if (toggleMenu == false) {
        toggleMenu = true
        bottomMenu.classList.remove('hide')
        bottomMenu.classList.add('rise')
        bottomMenu.style.display = 'block'
        emptyBottom.style.display = 'block'
    } else {
        toggleMenu = false
        bottomMenu.classList.remove('rise')
        bottomMenu.classList.add('hide')

            setTimeout(function() {
                bottomMenu.style.display = 'none'
                emptyBottom.style.display = 'none'
            }, 100)
        
        
    }
}

// footer
const d = new Date();
let year = d.getFullYear();
document.getElementById('footer-text').innerHTML = `&copy; ${year} VFO Studio ??? by Victor Freire Oliveira<br>All rights reserved`