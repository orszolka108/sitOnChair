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
    })
});