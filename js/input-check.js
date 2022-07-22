const input = document.querySelector("[data-toggle-input]");
const toggle = document.querySelector("[data-toggle-options]");
let innerInput = input.innerHTML;
function change()
{
	if(innerInput !== document.querySelector("[data-toggle-input]").innerHTML)
		toggle.classList.add("active");
}
setInterval(change, 100);