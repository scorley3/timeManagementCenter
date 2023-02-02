

var addCatButton = document.getElementById("plus");
addCatButton.addEventListener("click", addCat);
function addCat() {
	var div = document.createElement("div"); 
	var textBox = document.createElement("input");
	textBox.type = "text"; 
	var submitButton = document.createElement("input"); 
	submitButton.type = "button"; 
	submitButton.value = "Submit"; 
	div.appendChild(textBox);
	div.appendChild(submitButton);
	document.getElementById("controlPanel").appendChild(div);

}