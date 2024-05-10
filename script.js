const header = document.querySelector("header");
let sections = document.querySelectorAll('section');

window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", window.scrollY > 60)
});

let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
};

// Typed
const typed = new Typed('.multiple-text', {
    strings: ['Virtual Reality'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});