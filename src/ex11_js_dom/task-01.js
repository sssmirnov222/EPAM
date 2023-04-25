let images = document.querySelectorAll('.slider .slider-line img');//получаем все изображения
let sliderLine = document.querySelector('.slider-line');//получаем область,где все изображения
let width;
let count = 0;

function init() {
    width = document.querySelector('.slider').offsetWidth;
    sliderLine.style.width = width * images.length + 'px';
    images.forEach(el => {
        el.style.width = width + 'px';
        el.style.height = 'auto';
    })
    
}


init();

window.addEventListener('resize', init)


document.querySelector('.next').addEventListener('click', function() {
    count++;
   
    if(count >= images.length) {
        count = 0;
    }
     rollNext()
 })
   
function rollNext() {
    sliderLine.style.transform = 'translate(-'+count*width + 'px)'
}

document.querySelector('.prev').addEventListener('click', function() {
    count--;
    
    if(count < 0) {
        count = images.length - 1 ;
    }
    rollPrev()
 })

 function rollPrev() {
    sliderLine.style.transform = 'translate(-'+count*width + 'px)'
}
