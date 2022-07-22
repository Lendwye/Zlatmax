let currentNumber = 1
let increments = document.querySelectorAll("[data-button-increment]").forEach(function(item) {
	item.addEventListener("click", setNumber);
});
let decrements = document.querySelectorAll("[data-button-decrement]").forEach(function(item) {
	item.addEventListener("click", setNumber);
});
let number = document.querySelector("[data-number-indecrement]");
function setNumber(e)
{
	console.log(e);
	if(e.target.hasAttribute("data-button-increment"))
		currentNumber++;

	else
		currentNumber--;
		
	if(currentNumber < 1)
		currentNumber = 1;

	number.innerText = currentNumber;
}
