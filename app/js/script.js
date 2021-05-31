// Get the header
const burger_el = document.getElementById("burger");
const body_el = document.querySelector("body");
const header_el = document.getElementById("header");
const menu = document.getElementById("menu");
const faded_bg = document.getElementById("faded");
const fading_in_el = document.querySelectorAll(".to-fade");

burger.addEventListener("click", () => {
   header_el.classList.toggle("open");
   if (header_el.classList.contains("open")) {
      body_el.classList.add("no-scroll");
      fading_in_el.forEach((el) => {
         el.classList.remove("fades-out");
         el.classList.add("fades-in");
      });
      faded_bg.classList.add("faded-bg");
   } else {
      fading_in_el.forEach((el) => {
         el.classList.remove("fades-in");
         el.classList.add("fades-out");
      });
      body_el.classList.remove("no-scroll");
   }
});
