if (window.NodeList && !NodeList.prototype.forEach) {
	NodeList.prototype.forEach = function (callback, thisArg) {
		thisArg = thisArg || window;
		for (var i = 0; i < this.length; i++) {
			callback.call(thisArg, this[i], i, this);
		}
	};
}
document.querySelectorAll('.item__dropdown').forEach(function (dropDownWrapper) {
	const dropDownBtn = dropDownWrapper.querySelector('.item__dropdown__button');
	const dropDownList = dropDownWrapper.querySelector('.item__dropdown__list');
	const dropDownListItems = dropDownList.querySelectorAll('.item__dropdown__list-item');
	const dropDownInput = dropDownWrapper.querySelector('.item__dropdown__input-hidden');
	dropDownBtn.addEventListener('click', function (e) {
		dropDownList.classList.toggle('item__dropdown__list--visible');
        this.classList.add('item__dropdown__button--active');
	});
	dropDownListItems.forEach(function (listItem) {
		listItem.addEventListener('click', function (e) {
			e.stopPropagation();
			dropDownBtn.innerText = this.innerText;
			dropDownBtn.focus();
			dropDownInput.value = this.dataset.value;
			dropDownList.classList.remove('item__dropdown__list--visible');
		});
	});
	document.addEventListener('click', function (e) {
		if (e.target !== dropDownBtn) {
			dropDownBtn.classList.remove('item__dropdown__button--active');
			dropDownList.classList.remove('item__dropdown__list--visible');
		}
	});
	document.addEventListener('keydown', function (e) {
		if (e.key === 'Tab' || e.key === 'Escape') {
			dropDownBtn.classList.remove('item__dropdown__button--active');
			dropDownList.classList.remove('item__dropdown__list--visible');
		}
	});
});
