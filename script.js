const get = element => document.querySelector(element);
const toggle = get('#menu-btn');
const nav = get('#nav__two');
const planet = get('#main__content');
const burgerIcon = get('#burger__icon')

const sliderContainer = get('.slider__tab--container');
const tabs = document.querySelectorAll('.slider__tab');
const images = document.querySelectorAll('.slider__images');
const content = document.querySelectorAll('.slider__content');

const buttons = get('#buttons');
const overview = get('#tab__1');
const structure = get('#tab__2');
const surface = get('#tab__3');
const geologyImg = get('#geology');

// Show/Hide Mobile navigation menu
toggle.addEventListener('click', function() {
    nav.classList.toggle('hide');
    planet.classList.toggle('hide');
    burgerIcon.classList.toggle('burger-icon');
});

// Tab component
sliderContainer.addEventListener('click', function(e) {
    e.preventDefault();
    const clicked = e.target;
    
    tabs.forEach(t => t.classList.remove('underline__active'));
    content.forEach(c => c.classList.remove('slider__content--active'));
    images.forEach(img => img.classList.remove('slider__img--active'));

    clicked.classList.add('underline__active');
    
    document.querySelector(`.slider__content--${clicked.dataset.tab}`).classList.add('slider__content--active');
    document.querySelector(`.slider__img--${clicked.dataset.tab}`).classList.add('slider__img--active');
});

// Set the geology image only in surface tab
geologyImg.classList.add('hide');

// I selected two times the buttons, in a different way though.
// The tabs selection is inside the buttons and it's a class selection.
// The buttons are selected with the id in their parent element div.
// It felt right to me, it's the best solution i could come up with,
// for this hardcoded approach.
buttons.addEventListener('click', function(e) {
    e.preventDefault();

    if(e.target === surface) {
        geologyImg.classList.remove('hide');
    } else {
        geologyImg.classList.add('hide');
    };
});
        