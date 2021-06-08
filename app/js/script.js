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

// Form functionality
// ------------------------------------
// Grab elements from the DOM
const go_form = document.getElementById("go-form");

// Add an event listener to the form when it's submitted
go_form.addEventListener("submit", (e) => {
   // Prevent the form from being submitted
   e.preventDefault();

   // Get the value of the email field and trim any whitespaces
   const input_el = document.getElementById("email");
   const input_value = input_el.value.trim();

   // Check if email field is blank
   if (input_value === "") {
      set_error_state(input_el, "Please enter an email address");
      remove_state(input_el);
      // Check if email is valid
   } else if (!is_email(input_value)) {
      set_error_state(input_el, "Please insert a valid email");
      remove_state(input_el);
   } else {
      set_success_state(input_el, "Email is valid. Thank you ( ͡ᵔ ͜ʖ ͡ᵔ )");
      remove_state(input_el);
   }
});

// Define a function to display an error if email is NOT valid
// It takes in the element to set the error on and the error message
function set_error_state(el, message) {
   const control_el = el.parentElement;

   control_el.querySelector("small").innerText = message;
   control_el.querySelector("small").classList.add("error");
}

// Define a function that will show success message
function set_success_state(el, message) {
   const control_el = el.parentElement;

   control_el.querySelector("small").innerText = message;
   control_el.querySelector("small").classList.add("error");
   go_form.reset();
}

// Define a function to remove the error after 2s
function remove_state(el) {
   const control_el = el.parentElement;
   setTimeout(() => {
      control_el.querySelector("small").classList.remove("error");
   }, 2000);
}

// Define a function that uses regular expressions to check if the email is valid
function is_email(email) {
   return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
   );
}
