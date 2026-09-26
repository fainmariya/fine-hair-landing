
const prevButton = document.querySelector(".slider-btn--prev");
const nextButton = document.querySelector(".slider-btn--next");
const categoriesContainer = document.querySelector(".categories-container");
const categoryCards = document.querySelectorAll(".category-card")
let cardWidth = categoryCards[0].offsetWidth;
const containerStyles = getComputedStyle(categoriesContainer).gap;
let gap = parseFloat(containerStyles);
const sliderCounter = document.querySelector(".slider-counter");
let currentIndex = 0;
let visibleCards = window.innerWidth <= 768 ? 1 : 3;
let totalSlides = categoryCards.length - visibleCards + 1;
window.addEventListener('resize', () => {
    updateMeasurements();
    updateSlider(cardWidth, gap);
})
nextButton.addEventListener('click', () => {
    if (currentIndex < totalSlides -1) {
        currentIndex += 1;
        updateSlider(cardWidth, gap);
    }
    
    
})
prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex -= 1;
        updateSlider(cardWidth, gap);
    }
})
function updateSlider(carWidth, gap) {
    const shift = (carWidth + gap) * currentIndex;
    categoriesContainer.style.transform = `translateX(-${shift}px)`;
    let currentSlide = currentIndex + 1;
    sliderCounter.textContent = `${currentSlide} / ${totalSlides}`
}
function updateMeasurements(){
    cardWidth = categoryCards[0].offsetWidth
    gap = parseFloat(getComputedStyle(categoriesContainer).gap);
    visibleCards = window.innerWidth <= 768 ? 1 : 3;
    totalSlides = categoryCards.length - visibleCards + 1;
}
updateMeasurements();
updateSlider(cardWidth, gap);