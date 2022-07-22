const all = document.querySelectorAll("[data-type]");
function addEv(event) {
	if(event.target.getAttribute("data-type") == "shower") {
		let number;
		let searchingIndex = event.target.getAttribute("[data-type-number]");
		for(number = 0; number < all.length; number++)
			if(all[number].getAttribute("data-type-number") == searchingIndex) 
				all[number].classList.toggle("active");
	}	
}
all.forEach(item => {
	item.addEventListener("click", addEv)
});
