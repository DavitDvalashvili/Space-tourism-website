const hamburger = document.querySelector(".hamburger");
const navbarIcon = document.querySelector("#navbar-icon");
const navBar = document.querySelector(".navbar");
const body = document.querySelector("body");


//burger icon animation on click
hamburger.addEventListener("click", () => {
    //check if hamburger has active class.
    let isActive = hamburger.classList.contains("active");
    hamburger.classList.toggle("active");
    navBar.classList.toggle("active");
    if(!isActive) {
        navbarIcon.src="./starter-code/assets/shared/icon-close.svg"
    } else {
        navbarIcon.src="./starter-code/assets/shared/icon-hamburger.svg"
    }
})


