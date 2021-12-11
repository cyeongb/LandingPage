const body = document.querySelector("body");

const btnHamburger = document.querySelector("#btnHamburger");

const header = document.querySelector(".header");

const overlay = document.querySelector(".overlay");

const fadeEls = document.querySelectorAll(".has-fade");

btnHamburger.addEventListener("click", function () {
  if (header.classList.contains("open")) {
    //close menu toggle
    body.classList.remove("noscroll");
    header.classList.remove("open");
    fadeEls.forEach(function (el) {
      el.classList.remove("fade-in");
      el.classList.add("fade-out");
    });
  } else {
    //open menu toggle
    body.classList.add("noscroll"); // 메뉴열 때 스크롤 안되게
    header.classList.add("open");
    fadeEls.forEach(function (el) {
      el.classList.remove("fade-out");
      el.classList.add("fade-in");
    });
  }
});
