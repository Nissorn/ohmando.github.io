const hamburger = document.querySelector('.hamburger');
const hamburger_icon = hamburger.querySelector('span')
const mobile_menu = document.querySelector('.mobile-menu')

hamburger.addEventListener('click',() => {
    hamburger_icon.innerText = hamburger_icon.innerText === 'menu'
        ? 'close'
        : 'menu';

    mobile_menu.classList.toggle('is-open')
})

var typed = new Typed(".auto-type", {
    strings: ["สวัสดี!!","안녕하세요","Hello!!","你好!!","こんにちは"],
    typeSpeed:150,
    backSpeed: 150,
    loop: true
}) 

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});