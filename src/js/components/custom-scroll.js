import Swiper, { Scrollbar, Mousewheel } from "swiper";
Swiper.use([Scrollbar, Mousewheel]);

const swiper = new Swiper(document.querySelector(".hero__slider"), {
	spaceBetween: 13,
	watchSlidesProgress: true,
	slideVisibleClass: "hero__slide-visible",
	mousewheel: true,
	scrollbar: {
		el: ".hero__scrollbar",
		draggable: true,
	},
	breakpoints: {
		1151: {
			slidesPerView: 5,
		},
		769: {
			slidesPerView: 4,
		},
		636: {
			slidesPerView: 6,
		},
		481: {
			slidesPerView: 4,
			spaceBetween: 20,
		},
		319: {
			slidesPerView: 3,
			spaceBetween: 25,
		},
	},
});

const swiper1 = new Swiper(document.querySelector(".activity__slider-1"), {
	spaceBetween: 50,
	mousewheel: true,
	scrollbar: {
		el: ".activity__scrollbar-1",
		draggable: true,
	},
	breakpoints: {
		1151: {
			slidesPerView: 7,
		},
		921: {
			slidesPerView: 6,
		},
		752: {
			slidesPerView: 5,
		},
		400: {
			slidesPerView: 4,
			spaceBetween: 25,
		},
		319: {
			spaceBetween: 15,
			slidesPerView: 3,
		},
	},
});

const swiper2 = new Swiper(document.querySelector(".activity__slider-2"), {
	spaceBetween: 25,
	mousewheel: true,
	scrollbar: {
		el: ".activity__scrollbar-2",
		draggable: true,
	},
	breakpoints: {
		921: {
			slidesPerView: 2,
			direction: "vertical",
		},
		521: {
			slidesPerView: 2,
		},
		0: {
			slidesPerView: 1,
			spaceBetween: 38,
			direction: "horizontal",
		},
	},
});

const swiper3 = new Swiper(document.querySelector(".activity__slider-3"), {
	spaceBetween: 25,
	mousewheel: true,
	scrollbar: {
		el: ".activity__scrollbar-3",
		draggable: true,
	},
	breakpoints: {
		921: {
			slidesPerView: 2,
			direction: "vertical",
		},
		521: {
			slidesPerView: 2,
		},
		0: {
			slidesPerView: 1,
			spaceBetween: 38,
			direction: "horizontal",
		},
	},
});

const swiper4 = new Swiper(document.querySelector(".activity__slider-4"), {
	spaceBetween: 50,
	mousewheel: true,
	scrollbar: {
		el: ".activity__scrollbar-4",
		draggable: true,
	},
	on: {
		beforeInit: () => {
			const mediaQuery520 = window.matchMedia("(max-width: 520px)");

			if (mediaQuery520.matches) {
				const wrongSlides = document.querySelectorAll(".activity__item-case");
				const swiperWrapper = document.querySelector(".activity__list-cases");
				swiperWrapper.innerHTML = "";
				wrongSlides.forEach((wrongSlide) => {
					swiperWrapper.innerHTML = swiperWrapper.innerHTML + wrongSlide.innerHTML;
				});
				const actualSlides = document.querySelectorAll(".activity__slide-actual");
				actualSlides.forEach((slide) => {
					slide.classList.add("swiper-slide");
				});
			}
		},
	},
	breakpoints: {
		521: {
			direction: "vertical",
			slidesPerView: 3,
		},
		0: {
			slidesPerView: 1,
			spaceBetween: 15,
			direction: "horizontal",
		},
	},
});
