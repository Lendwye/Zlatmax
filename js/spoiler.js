const spoilerLinks = document.querySelectorAll(".header__catalog__menu__list__link");
spoilerLinks.forEach(item => item.addEventListener('click', spoilerDisplay));
const spoilers = document.querySelectorAll(".header__catalog__sub-menu__block");
const spoilersContainer = document.querySelector(".header__catalog__sub-menu");
let block;
function spoilerDisplay(event){
	let i;
	for(i = 0; i < spoilerLinks.length; i++)
		if(spoilerLinks[i] == event.target)
			break;
	if(spoilers[i] != block && block != null && block.classList.contains("active"))
	{
		spoilersContainer.classList.add("active");
		block.classList.toggle("active");
	}
	spoilersContainer.classList.add("active");	
	spoilers[i].classList.toggle("active");
	block = spoilers[i];
	if(block != null)
		if(!(block.classList.contains("active")))
			spoilersContainer.classList.toggle("active");
}