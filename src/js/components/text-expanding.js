const overlay = document.querySelector(".overlay");
const textButton = document.querySelector(".hero__container-expanding");
const textElem = document.querySelector(".hero__text");
const textElemExpanded = document.querySelector(".hero__text-expanded");
const textContainerExpanded = document.querySelector(".hero__container-expanded");

import { disableScroll } from "../functions/disable-scroll";
import { enableScroll } from "../functions/enable-scroll";

textButton.style.cursor = "pointer";

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
		textButton.style.cursor = "default";
		textButton.style.opacity = "0";
		disableScroll();
	});
	overlay.addEventListener("click", () => {
		overlay.classList.toggle("overlay-active");
		textContainerExpanded.classList.toggle("hero__container-expanded-active");
		textButton.style.cursor = "pointer";
		textButton.style.opacity = "1";
		enableScroll();
	});
	textElemExpanded.innerHTML = textElem.innerHTML;
}
