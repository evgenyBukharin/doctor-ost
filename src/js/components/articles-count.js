const columns = document.querySelectorAll(".activity__column");
columns.forEach((column) => {
	column.setAttribute("data-count", column.querySelectorAll(".swiper-slide").length);
});
