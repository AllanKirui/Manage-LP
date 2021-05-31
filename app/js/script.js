// Get the header
const header_el = document.getElementById("header");

header_el.addEventListener("click", () => {
   if (header_el.classList.contains("open")) {
      header_el.classList.remove("open");
   } else {
      header_el.classList.add("open");
   }
});
