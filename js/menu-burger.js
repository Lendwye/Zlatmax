const menuBurger = document.querySelector("[menu-burger]");
const menuBurgerMenu = document.getElementById("menu-burger");
const menuBurgerCatalog = document.getElementById("menu-burger__catalogs");
const menuBurgerItemsList = document.getElementById("menu-burger__items-list");
const menuBurgerLinks = document.querySelectorAll("[data-menu-burger-to]");
menuBurgerLinks.forEach(item => {
	item.addEventListener("click", function(e){
		e.stopPropagation();
		let block = document.querySelector("#menu-burger__" + e.target.getAttribute("data-menu-burger-to"));
		block.classList.toggle("active");
	});
})
menuBurger.addEventListener("click", function(e) {
	menuBurger.classList.toggle("active");
	menuBurgerMenu.classList.toggle("active");
})

