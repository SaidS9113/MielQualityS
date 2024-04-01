

document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.getElementById('menu-btn');
    console.log(menuBtn);
    const navbarList = document.querySelector('.mobile-first');
    console.log(navbarList);
    const closeBtn = document.getElementById('close-btn');
    console.log(closeBtn);

    menuBtn.addEventListener('click', function() {
        navbarList.style.left = '0'; 
    });

    closeBtn.addEventListener('click', function() {
        navbarList.style.left = '-100%'; 
    });
});


/* Témoignages des clients dynamique*/

const slider2 = document.querySelector('.slider2');
const slides2 = document.querySelectorAll('.slide2');
const slide2Width = slides2[0].offsetWidth;

let currentIndex = 0;

function nextSlide2() {
    currentIndex++;
    if (currentIndex >= slides2.length) {
        currentIndex = 0;
    }
    updateSlider2();
}

function updateSlider2() {
    slider2.style.transform = `translateX(-${currentIndex * slide2Width}px)`;
    const dots = document.querySelectorAll('.dot');

    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
}


const slider2Dots = document.querySelector('.slider2-dots');

for (let i = 0; i < slides2.length; i++){
    const dot = document.createElement('div');
    dot.classList.add('dot');
    dot.addEventListener('click', () => {
        currentIndex = i;
        updateSlider2();
    });
    slider2Dots.appendChild(dot);
}


setInterval(nextSlide2, 1800);


// Variable pour suivre l'état du cart
let cartIcon = document.querySelector('#cart-icon');
let cart = document.querySelector('.cart');
let closeCart = document.querySelector('#close-cart');
let body = document.body;

// Open Cart
cartIcon.onclick = () => {
cart.classList.add("active");
body.classList.add("cart-active");
document.body.style.overflow = "hidden"; // Désactive le défilement global du corps
};

// Close Cart
closeCart.onclick = () => {
cart.classList.remove("active");
body.classList.remove("cart-active");
document.body.style.overflow = "visible"; // Réactive le défilement global du corps
};

