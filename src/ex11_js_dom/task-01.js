let images = document.querySelectorAll('.container .slider .slider-line img')
let slider = document.querySelector('.slider-line')
let count = 0;
let width;

function inut() {
    width = document.querySelector('.slider').offsetWidth;
    slider.style.width = width * images.length + 'px';
    images.forEach(item => {
        item.style.width = width + 'px';
        item.style.height = 'auto';
    });
    console.log(width)
}

window.addEventListener('resize', inut)

inut();


let next = document.querySelector('.next');
next.addEventListener('click', function() {
     count++;
     rollSlider()
})

function rollSlider() {
    slider.style.transform = 'translate(-'+count * width + 'px)'
}


let prev = document.querySelector('.prev');
prev.addEventListener('click', function() {
     count--;
     rollSlider()
})