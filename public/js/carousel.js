/*
    Author: Michael Zimmerman
    Date: 07/24/20
    Description: Vanilla Javascript Carousel
    Sources:
        https://www.youtube.com/watch?v=KcdBOoK3Pfw
        https://www.w3schools.com/jsref/met_document_queryselector.asp
        https://www.w3schools.com/w3css/w3css_slideshow.asp (automatic slideshow effect)
*/

// query selector finds first instance in DOM
const carouselSlide = document.querySelector(".carousel-slide");
const carouselImages = carouselSlide.getElementsByTagName("img");
const carouselPrev = document.getElementById("carousel-prev");
const carouselNext = document.getElementById("carousel-next");

var counter = 1;
const timer = 8000; // 5 second rotation
const size = carouselImages[0].clientWidth;

// https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/translateX
// we are updating the CSS using JS, horizontally repositioning element by say
// slide width * nth slide. This gives us the slide show effect for carousel
carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";

// button listener
carouselNext.addEventListener("click", nextSlide);
carouselPrev.addEventListener("click", prevSlide);

// this restarts the slideshow based on if you reached the end or backwards from front
carouselSlide.addEventListener("transitionend", () => {
    if (carouselImages[counter].id == "lastSentinel") {
        carouselSlide.style.transition = "none"; // removes jump effect
        counter = carouselImages.length - 2; // -2 because of sentinel images
        carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";
    }

        if (carouselImages[counter].id == "frontSentinel") {
        carouselSlide.style.transition = "none"; // removes jump effect
        counter = carouselImages.length - counter;
        carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";
    }
});

// automatic slide effect
setTimeout(nextSlide, timer);

function nextSlide() {
    if (counter >= carouselImages.length - 1)
        return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";
    setTimeout(nextSlide, timer);
}

function prevSlide() {
    if (counter <= 0)
        return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";
    setTimeout(nextSlide, timer);
}