// Получить модальный
let modal = document.getElementById("myModal");

// Получить кнопку, которая открывает модальный
let btn = document.querySelectorAll(".modalBtn");

// Получить элемент <span>, который закрывает модальный
let span = document.getElementsByClassName("close")[0];

// Когда пользователь нажимает на кнопку, откройте модальный
btn.forEach(el => el.addEventListener("click",function() {
  modal.style.display = "block";
}));

// Когда пользователь нажимает на <span> (x), закройте модальное окно
span.onclick = function() {
  modal.style.display = "none";
}

// Когда пользователь щелкает в любом месте за пределами модального, закройте его
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}