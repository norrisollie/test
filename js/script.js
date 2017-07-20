// function to run when document has loaded
function app() {

    // log to console
    console.log("App is running");

    // store section buttons in dom
    var sectionButtons = document.querySelectorAll(".number-span");

    // for loop to add event listener to buttons
    for (var i = 0; i < sectionButtons.length; i++) {

        // add event listener
        sectionButtons[i].addEventListener("click", clickButtons);

    }

    // store arrows in dom
    var arrow = document.querySelectorAll(".arrow");

    // loop to add event listener to arrow elements
    for (var i = 0; i < arrow.length; i++) {

        //add event listener
        arrow[i].addEventListener("click", clickButtons);
    }

    // click buttons function
    function clickButtons(e) {

        // target element
        var clickTarget = e.target;
        // target element dataset value
        var clickTargetData = e.currentTarget.dataset.section;
        // target element dataset value
        var clickTargetDataArrow = e.currentTarget.dataset.nextsection;
        // store buttons in dom
        var numberButtons = document.querySelectorAll(".number-span");
        // store arrows in DOM
        var arrow = document.querySelectorAll(".arrow");
        // specify arrow left
        var arrowLeft = arrow[0];
        // specify arrow right
        var arrowRight = arrow[1];
        // store current section element in dom
        var currentSection = document.querySelector(".section-current");
        // store section of element in dom
        var sectionOf = document.querySelector(".section-of");
        // store section-container elements in dom
        var sections = document.querySelectorAll(".section");
        // store background container element in div
        var background = document.querySelector(".background-container")

        // for loop to remove number-active class from buttons
        for (var i = 0; i < sectionButtons.length; i++) {

            // remove class from elements
            numberButtons[i].classList.remove("number-active");
        }

        // for loop to remove/add section-active/hidden classes
        for (var i = 0; i < sections.length; i++) {

            // add/remove classes from sections elements
            sections[i].classList.remove("section-active");
            sections[i].classList.add("section-hidden");
        }

        // switch statement to determine what to do when certain button is clicked
        switch (clickTargetData || clickTargetDataArrow) {

            // if target is 0
            case "0":
                // log to console
                // add class to click target
                numberButtons[0].classList.add("number-active");
                // change current section to respective section number
                currentSection.innerHTML = " 1 ";
                // add class to hide element
                sectionOf.classList.add("section-of-hidden");
                // reset class to default
                background.setAttribute("class", "background-container");
                // add class to move background
                background.classList.add("background-section-0");

                // remove hidden on respective section element
                sections[0].classList.remove("section-hidden");

                // if-statement to see whether number buttons element contains active class
                if (numberButtons[0].classList.contains("number-active")) {

                    // add or hide class to arrow element
                    arrow[0].classList.add("arrow-hidden");
                    arrow[1].classList.remove("arrow-hidden");
                }

                 // change the dataset based on 
                arrowLeft.dataset.nextsection = "0";
                arrowRight.dataset.nextsection = "2";

                break;

            // if target is 1
            case "1":
                // add number-active class to target button
                numberButtons[1].classList.add("number-active");
                // change current section to respective section number
                currentSection.innerHTML = " 1 ";
                // remove class to unhide element
                sectionOf.classList.remove("section-of-hidden");
                // reset class to default
                background.setAttribute("class", "background-container");
                // add class to move background
                background.classList.add("background-section-1");

                // remove hidden on respective section element
                sections[1].classList.remove("section-hidden");

                // if-statement to see whether number buttons element contains active class
                if (numberButtons[1].classList.contains("number-active")) {

                    // add or hide class to arrow element
                    arrow[0].classList.remove("arrow-hidden");
                    arrow[1].classList.remove("arrow-hidden");
                }

                // change datasets for arrow based on what section has been clicked
                arrowLeft.dataset.nextsection = "0";
                arrowRight.dataset.nextsection = "2";

                break;

            case "2":
                // add number-active class to target button
                numberButtons[2].classList.add("number-active");
                // change current section to respective section number
                currentSection.innerHTML = " 2 ";
                // remove class to unhide element
                sectionOf.classList.remove("section-of-hidden");
                // reset class to default
                background.setAttribute("class", "background-container");
                // add class to move background
                background.classList.add("background-section-2");

                // remove hidden on respective section element
                sections[2].classList.remove("section-hidden");

                if (numberButtons[2].classList.contains("number-active")) {

                    // add or hide class to arrow element
                    arrow[0].classList.remove("arrow-hidden");
                    arrow[1].classList.remove("arrow-hidden");
                }

                // change datasets for arrow based on what section has been clicked
                arrowLeft.dataset.nextsection = "1";
                arrowRight.dataset.nextsection = "3";

                break;

            case "3":
                // add number-active class to target button
                numberButtons[3].classList.add("number-active");
                // change current section to respective section number
                currentSection.innerHTML = " 3 ";
                // remove class to unhide element
                sectionOf.classList.remove("section-of-hidden");
                // reset class to default
                background.setAttribute("class", "background-container");
                // add class to move background
                background.classList.add("background-section-3");

                // remove hidden on respective section element
                sections[3].classList.remove("section-hidden");

                if (numberButtons[3].classList.contains("number-active")) {

                    // add or hide class to arrow element
                    arrow[0].classList.remove("arrow-hidden");
                    arrow[1].classList.remove("arrow-hidden");
                }

                // change datasets for arrow based on what section has been clicked
                arrowLeft.dataset.nextsection = "2";
                arrowRight.dataset.nextsection = "4";

                break;

            case "4":
                // add number-active class to target button
                numberButtons[4].classList.add("number-active");
                // change current section to respective section number
                currentSection.innerHTML = " 4 ";
                // remove class to unhide element
                sectionOf.classList.remove("section-of-hidden");
                // reset class to default
                background.setAttribute("class", "background-container");
                // add class to move background
                background.classList.add("background-section-4");

                // remove hidden on respective section element
                sections[4].classList.remove("section-hidden");

                if (numberButtons[4].classList.contains("number-active")) {

                    // add or hide class to arrow element
                    arrow[0].classList.remove("arrow-hidden");
                    arrow[1].classList.remove("arrow-hidden");
                }

                // change datasets for arrow based on what section has been clicked
                arrowLeft.dataset.nextsection = "3";
                arrowRight.dataset.nextsection = "5";

                break;

            case "5":
                // add number-active class to target button
                numberButtons[5].classList.add("number-active");
                // change current section to respective section number
                currentSection.innerHTML = " 5 ";
                // remove class to unhide element
                sectionOf.classList.remove("section-of-hidden");
                // reset class to default
                background.setAttribute("class", "background-container");
                // add class to move background
                background.classList.add("background-section-5");


                // remove hidden on respective section element
                sections[5].classList.remove("section-hidden");

                if (numberButtons[5].classList.contains("number-active")) {

                    // add or hide class to arrow element
                    arrow[0].classList.remove("arrow-hidden");
                    arrow[1].classList.remove("arrow-hidden");
                }

                // change datasets for arrow based on what section has been clicked
                arrowLeft.dataset.nextsection = "4";
                arrowRight.dataset.nextsection = "6";

                break;

            case "6":
                // add number-active class to target button
                numberButtons[6].classList.add("number-active");
                // change current section to respective section number
                currentSection.innerHTML = " 6 ";
                // remove class to unhide element
                sectionOf.classList.remove("section-of-hidden");
                // reset class to default
                background.setAttribute("class", "background-container");
                // add class to move background
                background.classList.add("background-section-6");

                // remove hidden on respective section element
                sections[6].classList.remove("section-hidden");

                if (numberButtons[6].classList.contains("number-active")) {

                    // add or hide class to arrow element
                    arrow[0].classList.remove("arrow-hidden");
                    arrow[1].classList.remove("arrow-hidden");
                }

                // change datasets for arrow based on what section has been clicked
                arrowLeft.dataset.nextsection = "5";
                arrowRight.dataset.nextsection = "7";

                break;

            case "7":
                // add number-active class to target button
                numberButtons[7].classList.add("number-active");
                // change current section to respective section number
                currentSection.innerHTML = "7";
                // remove class to unhide element
                sectionOf.classList.remove("section-of-hidden");
                // reset class to default
                background.setAttribute("class", "background-container");
                // add class to move background
                background.classList.add("background-section-7");

                // remove hidden on respective section element
                sections[7].classList.remove("section-hidden");

                if (numberButtons[7].classList.contains("number-active")) {

                    // add or hide class to arrow element
                    arrow[0].classList.remove("arrow-hidden");
                    arrow[1].classList.remove("arrow-hidden");
                }

                // change datasets for arrow based on what section has been clicked
                arrowLeft.dataset.nextsection = "6";
                arrowRight.dataset.nextsection = "8";

                break;

            case "8":
                // add number-active class to target button
                numberButtons[8].classList.add("number-active");
                // change current section to respective section number
                currentSection.innerHTML = "8";
                // remove class to unhide element
                sectionOf.classList.remove("section-of-hidden");
                // reset class to default
                background.setAttribute("class", "background-container");
                // add class to move background
                background.classList.add("background-section-8");

                // remove hidden on respective section element
                sections[8].classList.remove("section-hidden");

                if (numberButtons[8].classList.contains("number-active")) {

                    // add or hide class to arrow element
                    arrow[0].classList.remove("arrow-hidden");
                    arrow[1].classList.remove("arrow-hidden");
                }

                // change datasets for arrow based on what section has been clicked
                arrowLeft.dataset.nextsection = "7";
                arrowRight.dataset.nextsection = "9";

                break;

            case "9":
                // add number-active class to target button
                numberButtons[9].classList.add("number-active");
                // change current section to respective section number
                currentSection.innerHTML = "8";
                // add class to hide element
                sectionOf.classList.add("section-of-hidden");
                // reset class to default
                background.setAttribute("class", "background-container");
                // add class to move background
                background.classList.add("background-section-9");

                // remove hidden on respective section element
                sections[9].classList.remove("section-hidden");

                if (numberButtons[9].classList.contains("number-active")) {

                    // add or hide class to arrow element
                    arrow[1].classList.add("arrow-hidden");
                    arrow[0].classList.remove("arrow-hidden");
                }

                // change datasets for arrow based on what section has been clicked
                arrowLeft.dataset.nextsection = "8";
                arrowRight.dataset.nextsection = "";

                break;

        };
    };
};

document.onload = app();