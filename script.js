
// Tab component
const sliderContainer = document.querySelector('.slider__tab--container');
const tabs = document.querySelectorAll('.slider__tab');
const images = document.querySelectorAll('.slider__images');
const content = document.querySelectorAll('.slider__content');

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
