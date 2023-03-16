let hamburger = document.getElementById("hamburger");
let navs = document.getElementById("navs");
let dropdown = document.getElementById("dropdown");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navs.classList.toggle("active");
  dropdown.classList.remove("active");
});
dropdown.addEventListener("click", () => {
  dropdown.classList.toggle("active");
});
