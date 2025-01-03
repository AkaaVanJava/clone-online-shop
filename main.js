const hamburger = document.querySelector(".hamburger");
const search = document.querySelector(".user-input");
const banner = document.querySelector(".banner");
hamburger.addEventListener("click", function () {
  search.classList.toggle("show");
  banner.classList.toggle("push");
});
