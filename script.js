// Slider functionality
const slides = document.querySelectorAll('.slide');
const leftBtn = document.querySelector('.left-btn');
const rightBtn = document.querySelector('.right-btn');
let currentSlide = 0;

rightBtn.addEventListener('click', () => {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
});

leftBtn.addEventListener('click', () => {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  slides[currentSlide].classList.add('active');
});

// Scroll down functionality
const scrollDown = document.querySelector('.scroll-down');
scrollDown.addEventListener('click', () => {
  document.querySelector('#products').scrollIntoView({ behavior: 'smooth' });
});
