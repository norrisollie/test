console.log("App is running");

// store number button span elements in dom
var numberButtonsSpan = document.querySelectorAll(".number-item-span ");

for (var i = 0; i < numberButtonsSpan.length; i++) {

    // add event listener
    numberButtonsSpan[i].addEventListener("click", numberButtonsClick);

}

// store arrow elements in dom
var arrows = document.querySelectorAll(".arrow")

// arrat to get in to arrows
var arrowArr = ["left", "right"];

for (var i = 0; i < arrowArr.length; i++) {

    arrows[i].addEventListener("click", numberButtonsClick);

}

// function to run when number buttons clicked
function numberButtonsClick(e) {

    // store the arrows next section dataset value
    var arrowTargetElementDataset = e.target.dataset.nextsection;

    // store sections divs in dom
    var sections = document.querySelectorAll(".section")

    // get target div
    var targetElement = e.target;

    // get target dataset value
    var targetElementDataset = e.currentTarget.dataset.sectionnumber;

    // store section of element in dom
    var sectionOf = document.querySelector(".section-of");
    
    // store the current section element in dom
    var currentSection = document.querySelector(".current-section");

    // store background-image element in dom
    var backgroundImage = document.querySelector(".background-image");

    // loop to remove button-active classes from all number button elements
    for (var i = 0; i < numberButtonsSpan.length; i++) {
        // remove button-active class
        numberButtonsSpan[i].classList.remove("button-active");
    }

    // loop to add hidden to all 
    for (var i = 0; i < sections.length; i++) {

        // remove button-active class
        sections[i].classList.add("hidden");
        sections[i].classList.remove("active");
    }

    // array to get section numbers
    var sectionNumberArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

    // loop to go through the array
    for (var i = 0; i < sectionNumberArr.length; i++) {

        // if target element matches a number in section number array
        if (targetElementDataset === sectionNumberArr[i] || arrowTargetElementDataset === sectionNumberArr[i]) {
            // add active class to button
            numberButtonsSpan[i].classList.add("button-active");
            // remove hidden from respective element and add active
            sections[i].classList.remove("hidden");
            sections[i].classList.add("active");
            // remove hidden class from both left/right arrows
            arrows[0].classList.remove("hidden");
            arrows[1].classList.remove("hidden");
            // change the nextsection dataset for arrows
            arrows[0].dataset.nextsection = sectionNumberArr[i-1];
            arrows[1].dataset.nextsection = sectionNumberArr[i+1];
            // remove hidden class from section-of element
            sectionOf.classList.remove("hidden");
            // change the current section number
            currentSection.innerHTML = sectionNumberArr[i];
            // if statement to prevent showing sections 0 / 9
            if(sectionNumberArr[i] === "0") {
                currentSection.innerHTML = "1";
            } else if (sectionNumberArr[i] === "9") {
                currentSection.innerHTML = "8";
            }

            // clear class attribute
            backgroundImage.setAttribute("class","");
            // re add class to move background
            backgroundImage.classList.add("background-image");
            backgroundImage.classList.add("background-section-" + sectionNumberArr[i]);

            // if first section element contains active, hide left arrow
            if (sections[0].classList.contains("active")) {
                // add hidden class to left arrow
                arrows[0].classList.add("hidden");
                // remove hidden class from right arrow
                arrows[1].classList.remove("hidden");
                // add hidden class and remove active class from section-of element
                sectionOf.classList.add("hidden");
                sectionOf.classList.remove("active");

                // if last section element contains active, hide right arrow
            } else if(sections[9].classList.contains("active")) {
                // add hidden class to right arrow
                arrows[1].classList.add("hidden");
                // remove hidden class from left arrow
                arrows[0].classList.remove("hidden");

                sectionOf.classList.add("hidden");
                sectionOf.classList.remove("active");

            }

        }
    }
}