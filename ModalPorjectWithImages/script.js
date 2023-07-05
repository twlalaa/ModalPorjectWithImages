"use strict";

let btn = document.querySelectorAll("i");
let modal = document.querySelector(".myModal");
let modalImage = document.querySelector(".modal-image img");

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", (e) => {
    modal.classList.remove("isHidden");
    modalImage.src = btn[i].previousElementSibling.src;
  });
}

window.addEventListener("keydown", (e) => {
  if (e.code === "Escape") {
    modal.classList.add("isHidden");
  }
});
