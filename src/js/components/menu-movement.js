const menu = document.querySelector(".menu");
const burger = document.querySelector(".burger");
const body = document.querySelector(".page__body");

burger.addEventListener("click", () => {
	menu.classList.toggle("menu-active");
	burger.classList.toggle("burger--active");
	if (body.style.overflowY == "hidden") {
		body.style.overflowY = "unset";
		body.style.paddingRight = "0";
	} else {
		body.style.paddingRight = window.innerWidth - body.offsetWidth + "px";
		body.style.overflowY = "hidden";
	}
});
