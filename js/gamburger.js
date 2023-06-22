let menuLinks = document.querySelectorAll(".gamburger-menu__link");
let menuBtnClose = document.querySelector(".gamburger-menu-btn_close");
let menuBtn = document.querySelector(".gamburger-menu-btn");
let menu = document.querySelector(".gamburger-menu");

menuLinks.forEach((el) => {
  el.addEventListener("click", function () {
    menuBtn.classList.toggle("active");
    menu.classList.toggle("active");
  });
});

menuBtnClose.addEventListener("click", function () {
  menuBtn.classList.toggle("active");
  menu.classList.toggle("active");
});

menuBtn.addEventListener("click", function () {
  menuBtn.classList.toggle("active");
  menu.classList.toggle("active");
});