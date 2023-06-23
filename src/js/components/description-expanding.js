const itemsList = document.querySelector(".hero__list");
const items = document.querySelectorAll(".hero__item");

const fullItemsListHeight = itemsList.offsetHeight;

const cssAnimationDuration = 300;

// обработка исходного количества айтемов
const maxiItemsCount = 6;

if (items.length > 0) {
	for (let i = 0; i < maxiItemsCount; i++) {
		items[i].classList.remove("hero__item-hidden");
	}
}

if (items.length > maxiItemsCount - 1) {
	// создание кнопки "еще" в начале списка
	const moreElement = document.createElement("li");
	moreElement.classList = "hero__item hero__item-more";
	moreElement.innerHTML = `
		<span>Еще</span>
		<img
			loading="lazy"
			src="./img/bottom-white-arrow.svg"
			class="image hero__icon-arrow-bottom-white"
			width="18"
			height="10"
			alt="Стрелка вниз"
		/>
	`;
	items[maxiItemsCount].insertAdjacentElement("beforebegin", moreElement);

	// создание кнопки "еще" в конце списка
	const lastElement = document.createElement("li");
	lastElement.classList = "hero__item hero__item-more hero__item-last";
	lastElement.innerHTML = `
		<span>Еще</span>
		<img
			loading="lazy"
			src="./img/bottom-white-arrow.svg"
			class="image hero__icon-arrow-bottom-white"
			width="18"
			height="10"
			alt="Стрелка вверх"
		/>
	`;
	lastElement.classList.add("hero__item-hidden");
	itemsList.insertAdjacentElement("beforeend", lastElement);

	// вычисление количества рядов в списке элементов
	const maximimVisibleRowsCount = 2;
	const listRowGap = 15;
	const listRowHeight = items[0].offsetHeight + listRowGap;
	const rowsCount = (itemsList.offsetHeight + listRowGap) / listRowHeight;
	const newRowsCount = rowsCount - maximimVisibleRowsCount;

	const heroRowSlider = document.getElementById("heroRowSlider");
	const heroRowWrapper = document.getElementById("heroRowWrapper");
	const heroTitleRow = document.querySelector(".hero__title-row-docs");
	const heroScrollbar = document.querySelector(".hero__scrollbar");
	// const shortedRowHeight = fullRowHeight - (newRowsCount * listRowHeight - (newRowsCount - 1 * listRowGap));

	const fullRowHeight = heroRowSlider.offsetHeight;
	const shortedRowHeight = fullRowHeight - fullItemsListHeight - listRowGap;

	if (rowsCount > maximimVisibleRowsCount) {
		showSlider(true);
	}

	function showSlider(firstUsage = false) {
		itemsList.style.maxHeight = maximimVisibleRowsCount * listRowHeight - listRowGap + "px";
		if (heroRowWrapper !== null && firstUsage == false) {
			heroRowSlider.style.maxHeight = fullRowHeight + "px";
			heroRowWrapper.style.opacity = "1";
			heroTitleRow.style.transform = `translateY(0)`;
			heroScrollbar.style.transform = `translateY(0)`;
			heroScrollbar.style.pointerEvents = "unset";
		}
	}
	function hideSlider() {
		heroRowWrapper.style.opacity = `0`;
		// heroTitleRow.style.transform = `translateY(${heroRowWrapper.offsetHeight - heightDifference}px)`;
		heroScrollbar.style.transform = `translateY(-${heroRowWrapper.offsetHeight - listRowGap / 2}px)`;
		heroScrollbar.style.pointerEvents = "none";
		heroRowSlider.style.maxHeight = shortedRowHeight + itemsList.offsetHeight + "px";
	}

	// механика плавного изменения текста
	const moreItem = document.querySelector(".hero__item-more");
	const lastItem = document.querySelector(".hero__item-last");
	const hiddenItems = document.querySelectorAll(".hero__item-hidden");

	if (moreItem !== null && lastItem !== null && hiddenItems.length > 0) {
		const moreItemText = document.querySelector(".hero__item-more span");
		const moreItemImage = document.querySelector(".hero__item-more img");

		moreItem.addEventListener("click", () => {
			hideSlider();
			moreItemText.style.opacity = "0";
			moreItemImage.style.opacity = "0";
			setTimeout(() => {
				itemsList.style.maxHeight = rowsCount * listRowHeight - listRowGap + "px";
				moreItemText.innerHTML = items[maxiItemsCount].innerHTML;
				items[maxiItemsCount].style.display = "none";
				moreItem.classList.add("hero__item-more-active");
				moreItem.style.maxWidth = moreItemText.offsetWidth + 30 + "px";
				moreItemText.style.opacity = "1";
				hiddenItems.forEach((item) => {
					item.classList.toggle("hero__item-hidden");
				});
			}, cssAnimationDuration * 2);
		});

		lastItem.addEventListener("click", () => {
			moreItemText.style.opacity = "0";
			hiddenItems.forEach((item) => {
				item.classList.toggle("hero__item-hidden");
			});
			setTimeout(() => {
				moreItem.classList.remove("hero__item-more-active");
				moreItemText.innerHTML = "Еще";
				moreItem.style.maxWidth = "98px";
				items[maxiItemsCount].style.display = "unset";
				moreItemImage.style.opacity = "1";
				moreItemText.style.opacity = "1";
				showSlider();
			}, cssAnimationDuration);
		});
	}
}
