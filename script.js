const hamburgerButton = document.getElementById('hamburger-button');
const navBarLinks = document.getElementById('navbar-links');

hamburgerButton.addEventListener('click', () => {
    navBarLinks.classList.toggle('active')
})




let slidePosition = 0;
showHeroSlides(slidePosition);

// function currentSlide(n) {
//   showSlides(slidePosition = n);
// }

function showHeroSlides() {
  let i;
  let heroSlides = document.getElementsByClassName("hero-slide-wrapper");
  let heroDots = document.getElementsByClassName("hero-dot");
  for (i = 0; i < heroSlides.length; i++) {
    heroSlides[i].style.display = "none";  
  }
  slidePosition++;
  if (slidePosition > heroSlides.length) {slidePosition = 1}    
  for (i = 0; i < heroDots.length; i++) {
    heroDots[i].className = heroDots[i].className.replace(" active", "");
  }
  heroSlides[slidePosition-1].style.display = "flex";  
  heroDots[slidePosition-1].className += " active";
  setTimeout(showHeroSlides, 4000);
}




let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("reviewSlides");
  // let dots = document.getElementsByClassName("reviews-dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  // for (i = 0; i < dots.length; i++) {
  //   dots[i].className = dots[i].className.replace(" active", "");
  // }
  slides[slideIndex-1].style.display = "flex";
  // dots[slideIndex-1].className += " active";
}