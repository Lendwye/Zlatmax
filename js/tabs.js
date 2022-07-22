const tabs = document.querySelectorAll("[data-tab]");
const toggles = document.querySelectorAll("[data-tab-toggle");

toggles.forEach(function(item) {
	item.addEventListener("click", function(e) {
		tabs.forEach(function(item) {
			item.classList.remove("active");
		})
		toggles.forEach(function(item) {
			item.classList.remove("active");
		})
		index = e.target.getAttribute("data-tab-toggle") - 1;
		toggles[index*2].classList.toggle("active");
		tabs[index].classList.toggle("active");
	})
})