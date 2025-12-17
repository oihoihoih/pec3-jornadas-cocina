/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */

console.log ('Hola! Este es el archivo main.js');


const buttonPrev = document.getElementById('slide-arrow-prev');
const buttonNext = document.getElementById('slide-arrow-next');
const carouselWrapper = document.getElementById('carousel-wrapper');
const images = Array.from(carouselWrapper.querySelectorAll('img'));


buttonNext.addEventListener('click', () => {
    const visibleIndex = images.findIndex(img => !img.classList.contains('hidden'));
    images[visibleIndex].classList.add('hidden');
    let newIndex = (visibleIndex + 1) % images.length;
    images[newIndex].classList.remove('hidden');
});

buttonPrev.addEventListener('click', () => {
          const visibleIndex = images.findIndex(img => !img.classList.contains('hidden'));
    images[visibleIndex].classList.add('hidden');
    let newIndex = (visibleIndex - 1 + images.length) % images.length;
    images[newIndex].classList.remove('hidden');  

});