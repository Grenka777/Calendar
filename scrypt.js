const flatBtn = document.querySelector(".flatBtn");
const daysContainer = document.querySelector(".days-container");

flatBtn.addEventListener("click", (e) => {
  e.preventDefault();
  daysContainer.classList.toggle("flat");
});