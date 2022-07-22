let accordionButton = document.querySelectorAll("[data-accordion]");
let accordionToggle = document.querySelectorAll("[data-toggle-accordion]");
function printLastAccordionIndex()
{
	console.log("Last button index");
	console.log(accordionButton.length + 1);
	console.log("Last toggle index");
	console.log(accordionToggle.length + 1);
}
function accordionClick(e)
{
	let i;
	for(i = 0; i < accordionToggle.length ; i++)
		if(e.target.getAttribute("data-accordion") == accordionToggle[i].getAttribute("data-toggle-accordion"))
			accordionToggle[i].classList.toggle("active");
}
accordionButton.forEach(item => {
	item.addEventListener("click", accordionClick);
})