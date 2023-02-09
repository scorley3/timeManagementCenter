
var catCount = 0;
var catIdArray = [];
var addCatButton = document.getElementById("plus");
addCatButton.addEventListener("click", addCat);
function addCat() {
	var div = document.createElement("div"); 
	div.style.border = "2px solid black";
	div.style.padding = "4px";
	div.style.width = "400px";
	div.style.margin = "10px";
	var textBox = document.createElement("input");
	textBox.type = "text"; 
	var submitButton = document.createElement("input"); 
	submitButton.type = "button"; 
	submitButton.value = "Submit"; 
	submitButton.addEventListener("click", createSection);
	submitButton.id = "submitButton" + catCount;
	catCount++;
	div.appendChild(textBox);
	div.appendChild(submitButton);
	document.getElementById("controlPanel").appendChild(div);

}
function createSection(event) {
	var div = document.createElement("div"); 
	div.style.border = "2px solid black";
	div.style.padding = "4px";
	div.style.width = "400px";
	div.style.margin = "10px";
	//set parent div to not show 
	var catDiv = document.getElementById(event.target.id).parentElement;
	catDiv.style.width = "0px";
	catDiv.style.height = "0px";
	catDiv.style.visibility = "hidden";
	catDiv.style.margin = "0px";
	catDiv.style.padding = "0px";
	catDiv.style.borderWidth = "0px";
	div.id = "category" + event.target.id.substring(12);
	catIdArray.push(div.id);
	console.log(div.id);
	var title = document.createElement("h3");
	title.innerHTML = catDiv.childNodes[0].value;
	div.appendChild(title);
	var textAr = document.createElement("p");
	textAr.innerHTML = "example text example text";
	div.appendChild(textAr);
	document.getElementById("dashboard").appendChild(div);
	
	
	
}