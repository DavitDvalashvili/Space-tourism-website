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

let data;

const getData = async () => {
    const response = await fetch('./data.json');
    data = await response.json();
    displayDestination();
    displayCrew();
    console.log(data);
    displayTech();
}

getData();



//variables from the destination page
const planetName = document.querySelector("#name");
const planetDescription = document.querySelector(".description");
const distance = document.querySelector(".distance .number");
const travel = document.querySelector(".time-period .number");
const destinationsNav = document.querySelectorAll(".planet-name");
const planetNames = document.querySelectorAll(".names span");
const planetImage = document.querySelector("#planet");


function displayDestination() {
    destinationsNav.forEach(name => {
        // Add a click event listener to each item
        name.addEventListener("click", (event) => {
            destinationsNav.forEach(name => {
                // Remove the 'border-color' class from all items
                name.classList.remove("border-color")
            })
            // Add the 'border-color' class to the clicked item
            let clickTarget = event.target;
            clickTarget.classList.add("border-color");
            //copies planetNames array
            const planetNamesArr = [...planetNames];
            //get an index of clickTarget;
            const index = planetNamesArr.indexOf(clickTarget);
            //displays data on the screen while clicking on the elements
            distance.textContent = data.destinations[index].distances;
            planetName.textContent = data.destinations[index].name;
            planetImage.src = data.destinations[index].images.webp;
            planetDescription.textContent = data.destinations[index].description;
            travel.textContent = data.destinations[index].travel;
        })
    });

}

//variables from destination page
const navCrew = document.querySelectorAll("#nav-crew div");
const CrewName = document.querySelector("#name");
const role = document.querySelector("#title");
const bio = document.querySelector("#about");
const crewImage = document.querySelector("#crew-member img");




function displayCrew() {
    navCrew.forEach(element => {
        // Add a click event listener to each item
        element.addEventListener("click", (event) => {
            navCrew.forEach(element => {
                // Remove the 'backgorund-opacity' class from all items
                element.classList.remove("background-opacity")
            })
            // Add the 'background-opacity' class to the clicked item
            let clickTargetCrew = event.target;
            clickTargetCrew.classList.add("background-opacity");

            //copies navCrew array
            const navCrewArr = [...navCrew];
            //get an index of clickTarget;
            const indexCrew = navCrewArr.indexOf(clickTargetCrew);
            //displays data on the screen while clicking on the item
            CrewName.textContent = data.crew[indexCrew].name;
            role.textContent = data.crew[indexCrew].role;
            bio.textContent = data.crew[indexCrew].bio;
            crewImage.src = data.crew[indexCrew].images.webp;
        })
    });

}


const navTech = document.querySelectorAll("#nav-technology div");
const techName = document.querySelector("#technology-name");
const techDescription = document.querySelector("#about-technology");
const imageLandscape = document.querySelector(".landscape");
const imagePortrait = document.querySelector(".portrait");


function displayTech() {
    navTech.forEach(item => {
        // Add a click event listener to each item
        item.addEventListener("click", (event) => {
            navTech.forEach(element => {
                // Remove the 'color-style' class from all items
                element.classList.remove("color-style")
            })
            // Add the 'color-style' class to the clicked item
            let clickTargetTech = event.target;
            clickTargetTech.classList.add("color-style");

            //copies navCrew array
            const navTechArr = [...navTech];
            //get an index of clickTarget;
            const indexTech = navTechArr.indexOf(clickTargetTech);
            //displays data on the screen while clicking on the item
            console.log(techName.textContent);
            techName.textContent = data.technology[indexTech].name;
            techDescription.textContent = data.technology[indexTech].description;
            imageLandscape.src = data.technology[indexTech].images.landscape;
            imagePortrait.src = data.technology[indexTech].images.portrait;
        })
    });

}




