const columns = document.querySelectorAll(".activity__column");
columns.forEach((column) => {
	if (column.classList.contains("activity__column-cases")) {
		column.setAttribute("data-count", column.querySelectorAll(".activity__slide-actual").length);
		return;
	}
	column.setAttribute("data-count", column.querySelectorAll(".swiper-slide").length);
});
