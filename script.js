"use strict";

const accordions = document.querySelectorAll(".accordion-question h2");

accordions.forEach((accordion) => {
  const btn = accordion.querySelector(".accordion-trigger");
  const panel = accordion.parentElement.nextElementSibling;
  const img = btn.querySelector("img");

  btn.addEventListener("click", function () {
    panel.classList.toggle("show");
    if (panel.classList.contains("show")) {
      panel.style.maxHeight = panel.scrollHeight + "px";
      img.setAttribute("src", "./icon-minus.svg");

      btn.setAttribute("aria-expanded", "true");
    } else {
      panel.style.maxHeight = 0 + "px";
      img.setAttribute("src", "./icon-plus.svg");
    }
  });
});
