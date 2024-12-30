// Amount
let value = document.getElementsByClassName("defaultmoney");
let doller = document.querySelector("#doller")
doller.addEventListener("click", function () {
    doller.style.backgroundColor = "orange";
    rupees.style.backgroundColor = "whitesmoke";
    euro.style.backgroundColor = "whitesmoke";
    doller.style.color = "black";
    value[0].textContent = "Doller";
});
let rupees = document.querySelector("#rupees")
rupees.addEventListener("click", function () {
    doller.style.backgroundColor = "whitesmoke";
    rupees.style.backgroundColor = "orange";
    euro.style.backgroundColor = "whitesmoke";
    rupees.style.color = "black";
    value[0].textContent = "Rupees";
});
let euro = document.querySelector("#euro")
euro.addEventListener("click", function () {
    rupees.style.backgroundColor = "whitesmoke";
    doller.style.backgroundColor = "whitesmoke";
    euro.style.backgroundColor = "orange";
    euro.style.color = "black";
    value[0].textContent = "Euro";
});

// language

let defaultlang = document.getElementsByClassName("frstlang");
console.log(defaultlang[0].innerHTML);
let english = document.querySelector(".eng")
english.addEventListener("click", function () {
    english.style.backgroundColor = "orange";
    italic.style.backgroundColor = "whitesmoke";
    america.style.backgroundColor = "whitesmoke";
    english.style.color = "black";
    defaultlang[0].textContent = "English";
});
let italic = document.querySelector(".ita")
italic.addEventListener("click", function () {
    english.style.backgroundColor = "whitesmoke";
    italic.style.backgroundColor = "orange";
    america.style.backgroundColor = "whitesmoke";
    italic.style.color = "black";
    defaultlang[0].textContent = "Italic";
});
let america = document.querySelector(".amer")
america.addEventListener("click", function () {
    english.style.backgroundColor = "whitesmoke";
    italic.style.backgroundColor = "whitesmoke";
    america.style.backgroundColor = "orange";
    america.style.color = "black";
    defaultlang[0].textContent = "America";
});

// All Toggle button

let button = document.querySelector(".All").addEventListener("click", function () {
    let dropdown = document.getElementById("alldropdown");
    if (dropdown.style.display === "block") {
        dropdown.style.display = "none";
    }
    else {
        dropdown.style.display = "block";
    }
})


//  search toogle 
let searchbtn = document.querySelector(".search-bar").addEventListener("click", function () {
    let inputbar = document.querySelector(".search-dropdown-content");
    if (inputbar.style.display === "block") {
        inputbar.style.display = "none";
    }
    else {
        inputbar.style.display = "block";
    }
});

// your recent search
const carousel = document.querySelector(".recent-view-img");
const next = document.querySelector(".butsnext");
const prev = document.querySelector(".butspre");
let index = 0;
const images = carousel.children;
const totalImages = images.length;

function updateCarousel() {
    if (index > totalImages - 1) {
        index = 0;
    } else if (index < 0) {
        index = totalImages - 1;
    }
}

next.addEventListener("click", () => {
    index++;
    if (index > 0) {
        carousel.appendChild(carousel.firstElementChild);
        index--;
        updateCarousel();
    } else {
        updateCarousel();
    }
});

prev.addEventListener("click", () => {
    index--;
    if (index < 0) {
        carousel.prepend(carousel.lastElementChild);
        index++;
        updateCarousel();
    } else {
        updateCarousel();
    }
});



// cart

let ordercart = document.querySelector(".cart-btn").addEventListener("click", function () {
    let cartbtn = document.querySelector(".add-card-container");
    if (cartbtn.style.display === "block") {
        cartbtn.style.display = "none";
    }
    else {
        cartbtn.style.display = "block"
    }

});

// carousal
document.addEventListener('DOMContentLoaded', function () {
    let slidePosition = 0;
     const slides = document.querySelectorAll('.slider-items');
    const totalSlides = slides.length;
    document.querySelector('.btnpre').addEventListener('click', function () {
         moveToPrevSlide();
         });
    document.querySelector('.btnnext').addEventListener('click', function () { 
        moveToNextSlide(); });

    function updateSlidePosition() {
        slides.forEach((slide, index) => { 
            slide.classList.remove('active');
             slide.style.display = 'none'; });
        slides[slidePosition].classList.add('active');
         slides[slidePosition].style.display = 'block';
    } 
    function moveToPrevSlide() { 
        if (slidePosition === 0) { 
            slidePosition = totalSlides - 1;
         }
         else { slidePosition--; }
          updateSlidePosition(); 
} 
    function moveToNextSlide() { 
        if (slidePosition === totalSlides - 1) { 
            slidePosition = 0; 
        } else
             {
                 slidePosition++; } 
             updateSlidePosition();
             }
              updateSlidePosition(); 
              
 });
