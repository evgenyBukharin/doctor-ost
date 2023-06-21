import Swiper, { Scrollbar } from "swiper";
Swiper.use([Scrollbar]);

const swiper = new Swiper(document.querySelector(".hero__slider"), {
	slidesPerView: 5,
	spaceBetween: 13,
	watchSlidesProgress: true,
	slideVisibleClass: "hero__slide-visible",
	scrollbar: {
		el: ".swiper-scrollbar",
		draggable: true,
	},
});
