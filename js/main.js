const slider = document.querySelector('#Slider') 
const sliderItems = Array.from(slider.children);
const btnNext = document.querySelector('#btnNext')
const btnPrev = document.querySelector('#btnPrev')


sliderItems.forEach(function(slide, index){

    console.log(slide);


    if (index !== 0) slide.classList.add("hidden")


    slide.dataset.index = index;


    sliderItems[0].setAttribute('data-active', '');


    slide.addEventListener('click', function () {

        slide.classList.add("hidden");
        slide.removeAttribute('data-active');

        const nextSlideIndex = index + 1 === sliderItems.length ? 0 : index + 1;

        const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`);

        nextSlide.classList.remove('hidden');
        nextSlide.setAttribute('data-active', '');
    });
});


btnNext.onclick = function() { 

    console.log('next slide');


    const currentSlide = slider.querySelector('[data-active]')
    const currentSlideIndex = +currentSlide.dataset.index;
    currentSlide.classList.add('hidden');
    currentSlide.removeAttribute('data-active');


    const nextSlideIndex = currentSlideIndex + 1 === sliderItems.length ? 0 : currentSlideIndex + 1;
    const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`);
    nextSlide.classList.remove('hidden');
    nextSlide.setAttribute('data-active', '');
}

btnPrev.onclick = function() { 

    console.log('prev slide');


    const currentSlide = slider.querySelector('[data-active]')
    const currentSlideIndex = +currentSlide.dataset.index;
    currentSlide.classList.add('hidden');
    currentSlide.removeAttribute('data-active');


    const nextSlideIndex = currentSlideIndex === 0 ? sliderItems.length - 1 : currentSlideIndex - 1;

    const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`);
    nextSlide.classList.remove('hidden');
    nextSlide.setAttribute('data-active', '');
}

/*function showNextSlide(direction) {
    
    const currentSlide = slider.querySelector('[data-active]')
    const currentSlideIndex = +currentSlide.dataset.index;
    currentSlide.classList.add('hidden');
    currentSlide.removeAttribute('data-active');


    let nextSlideIndex;
    if (direction === 'next')  {
        nextSlideIndex = currentSlideIndex + 1 === sliderItems.length ? 0 : currentSlideIndex + 1;
    } else if (directin === 'prev') { 
        nextSlideIndex = currentSlideIndex === 0 ? sliderItems.length - 1 : currentSlideIndex - 1;
    }

    const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`);
    nextSlide.classList.remove('hidden');
    nextSlide.setAttribute('data-active', '');
}*/