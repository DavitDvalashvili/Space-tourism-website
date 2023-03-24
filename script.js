const hamburger = document.querySelector(".hamburger");
const navbarIcon = document.querySelector("#navbar-icon");
const navBar = document.querySelector(".navbar");

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


const getAdvice = async () => {
    const response = await fetch('./data.json');
    const data = await response.json();
    //console.log(data);

}
getAdvice();


const planetName = document.querySelector("#name");
const planetDescription = document.querySelector(".description");
const distance = document.querySelector(".distance .number");
const takeTime = document.querySelector(".time-period .number");
const destinationsNav = document.querySelectorAll(".planet-name");

function displayMoon() {
    destinationsNav.forEach(name => {
        name.addEventListener("click", (event) => {
            if (event.target.classList.contains("border-color")) {
                console.log("true");
            }
        })
    });

}

displayMoon();


