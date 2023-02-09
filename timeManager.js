
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
	var categoryNumber = event.target.id.substring(12);
	div.id = "category" + categoryNumber;
	catIdArray.push(div.id);
	console.log(div.id);
	var title = document.createElement("h3");
	title.innerHTML = catDiv.childNodes[0].value;
	div.appendChild(title);
	var textAr = document.createElement("p");
	textAr.innerHTML = "example text example text";
	div.appendChild(textAr);
	var buttonsDiv = document.createElement("div");
	buttonsDiv.id = "buttonsDiv" + categoryNumber;
	var editButton = document.createElement("input");
	editButton.type = "button";
	editButton.value = "Edit Category";
	editButton.id = "editButton" + categoryNumber;
	editButton.addEventListener("click", editCategory);
	var addButton = document.createElement("input");
	addButton.type = "button"
	addButton.value = "Add Task";
	addButton.id = "addButton" + categoryNumber;
	buttonsDiv.appendChild(editButton);
	buttonsDiv.appendChild(addButton);
	div.appendChild(buttonsDiv);
	document.getElementById("dashboard").appendChild(div);
}
function editCategory(event) {
	categoryNumber = event.target.id.substring(10);
	buttonsDiv = document.getElementById("buttonsDiv" + categoryNumber);
	buttonsDiv.style.visibility = "hidden"; 
	buttonsDiv.style.width = "0px";
	buttonsDiv.style.height = "0px";
	if (document.getElementById("editDiv" + categoryNumber) == null) {
		console.log(categoryNumber);
		var catDiv = document.getElementById("category" + categoryNumber);
		var editDiv = document.createElement("div");
		editDiv.id = "editDiv" + categoryNumber;
		var newTitle = document.createElement("input");
		newTitle.type = "text";
		newTitle.id = "editTitle" + categoryNumber;
		var titleLabel = document.createElement("label");
		titleLabel.innerHTML = "New Title";
		titleLabel.htmlFor = newTitle.id;
		var newDescription = document.createElement("input");
		newDescription.type = "text";
		newTitle.id = "editDesc" + categoryNumber;
		var descLabel = document.createElement("label");
		descLabel.innerHTML = "New Description";
		descLabel.htmlFor = newDescription.id;
		var saveButton = document.createElement("input");
		saveButton.type = "button";
		saveButton.value = "Save";
		saveButton.id = "saveButton" + categoryNumber;
		editDiv.appendChild(titleLabel);
		editDiv.appendChild(newTitle);
		editDiv.appendChild(descLabel);
		editDiv.appendChild(newDescription);
		editDiv.appendChild(saveButton);
		catDiv.appendChild(editDiv);
	}
	
}
//in each section, what do we want? 
//ability to add/edit title and description 
//ability to add a task 