const footerRealCheckbox = document.getElementById("footer-realCheckbox");
const footerCustomCheckbox = document.getElementById("footer-customCheckbox");
const realCheckbox = document.querySelectorAll("[data-real-checkbox]");
const customCheckbox = document.querySelectorAll("[data-custom-checkbox]");
function printLastCheckboxIndex()
{
	console.log("Last button index");
	console.log(realCheckbox.length + 1);
	console.log("Last toggle index");
	console.log(customCheckbox.length + 1);
}
function checkboxClick(e)
{
	for(let i = 0; i < realCheckbox.length ; i++)
		if(e.target.getAttribute("data-custom-checkbox") == realCheckbox[i].getAttribute("data-real-checkbox"))
		{
			if(!realCheckbox[i].hasAttribute("checked"))
			{
				realCheckbox[i].setAttribute("checked", "checked");
			}
			else
			{
				realCheckbox[i].removeAttribute("checked");
			}
		}
}
customCheckbox.forEach(item => {
	item.addEventListener("click", checkboxClick);
})
footerCustomCheckbox.addEventListener("click", (e) => {
	if(!footerRealCheckbox.hasAttribute("checked"))
	{
		footerRealCheckbox.setAttribute("checked", "checked");
	}
	else
	{
		footerRealCheckbox.removeAttribute("checked");
	}
})
