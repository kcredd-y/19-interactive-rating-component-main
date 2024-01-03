const button = document.querySelector(".btn");
const pageOne = document.querySelector(".pageOne");
const thankYou = document.querySelector(".thankYou");

// const button = document.getElementsByClassName("btn");

button.addEventListener("click", function (e) {
  e.preventDefault();
    pageOne.classList.add("hidden");
    thankYou.classList.add("showContainer");
});
