// Scrolling effect 
let bubbles1 = document.getElementById('bubbles1');
let bubbles2 = document.getElementById('bubbles2');
let bubbles3 = document.getElementById('bubbles3');
//let stars = document.getElementById('stars');
window.addEventListener('scroll', function(){
    header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);

    let value = window.scrollY;
    //stars.style.left = value * 1.5 + 'px';
    bubbles1.style.top = value * 0.5 + 'px';
    bubbles2.style.top = value * 0.1 + 'px';
    bubbles3.style.top = value * 0.01 + 'px';
})

// To toggle navigation column on and off
function toggleMenu() {
    const menuToggle = document.querySelector('.menuToggle');
    const navigation = document.querySelector('.navigation');
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
}

// For the rainbow scrolling effect
let progress = document.getElementById('progressbar');
let totalHeight = document.body.scrollHeight;
window.onscroll = function() {
    let progressHeight = (window.pageYOffset / totalHeight) * 100;
    progress.style.height = progressHeight + "%";
}