const menu = document.querySelector(".menu");
const burger = document.querySelector(".burger");

burger.addEventListener("click", () => {
	menu.classList.toggle("menu-active");
	burger.classList.toggle("burger--active");
});
