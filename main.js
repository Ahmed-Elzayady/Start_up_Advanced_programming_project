let toggler = document.querySelector(".toggle");
let nav = document.querySelector("nav");
let close = document.querySelector(".close");

toggler.onclick = function () {
  nav.classList.add("open");
};

close.onclick = function () {
  this.parentElement.classList.remove("open");
};

var loader = document.getElementById("loaderr");
window.addEventListener("load", function () {
  loader.style.display = "none";
});