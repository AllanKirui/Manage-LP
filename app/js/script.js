// Header functionality
// ------------------------------------
const burger_el = document.getElementById("burger");
const body_el = document.querySelector("body");
const header_el = document.getElementById("header");
const menu = document.getElementById("menu");
const faded_bg = document.getElementById("faded");
const fading_in_el = document.querySelectorAll(".to-fade");

burger.addEventListener("click", () => {
   // Open and close the menu when the burger is clicked
   header_el.classList.toggle("open");
   if (header_el.classList.contains("open")) {
      body_el.classList.add("no-scroll");
      // Loop through elements with the ".to-fade" class and
      // set a specific class one them
      fading_in_el.forEach((el) => {
         el.classList.remove("fades-out");
         el.classList.add("fades-in");
      });
      faded_bg.classList.add("faded-bg");
   } else {
      // Loop through elements with the ".to-fade" class and
      // set a specific class one them
      fading_in_el.forEach((el) => {
         el.classList.remove("fades-in");
         el.classList.add("fades-out");
      });
      body_el.classList.remove("no-scroll");
   }
});

// Slider functionality
// ------------------------------------
// For desktop & tablet screens
const slide_container = document.querySelector(".feature__main-sliders");
const flkty = new Flickity(slide_container, {
   // options
   cellAlign: "center", // set alignment
   wrapAround: true, // Infinite scroll
   prevNextButtons: false, // Hide left & right buttons
   pageDots: false, // Hide default page dots
});

// For mobile screens
const utils = window.fizzyUIUtils;
const flkty2 = new Flickity(".feature__mobile-sliders", {
   // options
   cellAlign: "center",
   wrapAround: true,
   prevNextButtons: false,
   pageDots: false,
});

// Customising dots
const cellsButtonGroup = document.querySelector(".feature__options");
const cellsButtons = utils.makeArray(cellsButtonGroup.children);

// update buttons on select
flkty2.on("select", function () {
   const previousSelectedButton =
      cellsButtonGroup.querySelector(".is-selected");
   const selectedButton = cellsButtonGroup.children[flkty2.selectedIndex];
   previousSelectedButton.classList.remove("is-selected");
   selectedButton.classList.add("is-selected");
});

// cell select
cellsButtonGroup.addEventListener("click", function (event) {
   if (!matchesSelector(event.target, ".feature__options-dot")) {
      return;
   }
   const index = cellsButtons.indexOf(event.target);
   flkty2.select(index);
});
