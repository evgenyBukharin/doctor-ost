const overlay = document.querySelector(".overlay");
const textButton = document.querySelector(".hero__button-text");
const textElem = document.querySelector(".hero__text");
const textElemExpanded = document.querySelector(".hero__text-expanded");
const textContainerExpanded = document.querySelector(".hero__container-expanded");

if (
	textButton !== null &&
	overlay !== null &&
	textElem !== null &&
	textElemExpanded !== null &&
	textContainerExpanded !== null
) {
	textButton.addEventListener("click", () => {
		overlay.classList.add("overlay-active");
		textContainerExpanded.classList.toggle("hero__container-expanded-active");
	});
	overlay.addEventListener("click", () => {
		overlay.classList.toggle("overlay-active");
		textContainerExpanded.classList.toggle("hero__container-expanded-active");
	});
	textElemExpanded.innerHTML = textElem.innerHTML;
}
