let logo = document.getElementById("logo");
let header__input__button = document.getElementById("header__input__button")
let header__input = document.getElementById("header__input");

if(document.documentElement.clientWidth <= 768)
	logo.src = "img/logo__adaptive.svg";

if(document.documentElement.clientWidth <= 576)
{
	header__input__button.classList.replace("icon-search", "icon-mobile__search");
	header__input.placeholder = "Поиск по сайту";
}

window.addEventListener("resize", function() {

	if(document.documentElement.clientWidth <= 768)
		logo.src = "img/logo__adaptive.svg";

	else if(document.documentElement.clientWidth > 768)
		logo.src = "img/logo.svg";

	if(document.documentElement.clientWidth <= 576)
	{
		header__input__button.classList.replace("icon-search", "icon-mobile__search");
		header__input.placeholder = "Поиск по сайту";
	}
		
	if(document.documentElement.clientWidth > 576)
	{
		header__input.classList.replace("icon-mobile__search", "icon-search");
		header__input.placeholder = "Поиск";
	}
})