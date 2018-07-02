document.addEventListener("DOMContentLoaded", function () {
    //main-chairs section:
    var chairOne = document.querySelector(".chair-one");
    var chairTwo = document.querySelector(".chair-two");

    var linkOne = document.querySelector(".link-one");
    var linkTwo = document.querySelector(".link-two");

    chairOne.addEventListener("mouseover", function(event) {
        linkOne.style.display = "none";

    });
    chairOne.addEventListener("mouseout", function(event) {
        linkOne.style.display = "inline";
    })

    chairTwo.addEventListener("mouseover", function(event) {
        linkTwo.style.display = "none";

    });
    chairTwo.addEventListener("mouseout", function(event) {
        linkTwo.style.display = "inline";
    });

    //slider section:
    var bannerNext = document.querySelector(".banner-next");
    var bannerPrev = document.querySelector(".banner-prev");
    var slides = document.querySelectorAll(".banner-slide");
    var index=0;

    bannerNext.addEventListener("click", function(event) {
        slides[index].classList.remove("banner-slide-active");
        index++;
        if (index >= slides.length) {
            index = 0;
        }
        slides[index].classList.add("banner-slide-active");
    })

    bannerPrev.addEventListener("click", function(event) {
        slides[index].classList.remove("banner-slide-active");
        index --;
        if (index < 0) {
            index = slides.length - 1;
        }
        slides[index].classList.add("banner-slide-active");
    })







});