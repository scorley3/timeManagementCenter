
var catCount = 0;
var catIdArray = [];
var addCatButton = document.getElementById("plus");
addCatButton.addEventListener("click", addCat);
function addCat() {
	var div = document.createElement("div"); 
	div.style.border = "2px solid black";
	div.style.padding = "4px";
	div.style.width = "450px";
	div.style.margin = "10px";
	
	var textBox = document.createElement("input");
	textBox.type = "text"; 
	textBox.placeholder = "Title";
	textBox.className = "setOrig";
	
	var descText = document.createElement("input");
	descText.type = "text";
	descText.placeholder = "Description";
	descText.className = "setOrig";
	
	var submitButton = document.createElement("input"); 
	submitButton.type = "button"; 
	submitButton.value = "Submit"; 
	submitButton.addEventListener("click", createSection);
	submitButton.id = "submitButton" + catCount;
	submitButton.className = "submitButtons";
	
	catCount++;
	div.appendChild(textBox);
	div.appendChild(descText);
	div.appendChild(submitButton);
	document.getElementById("controlPanel").appendChild(div);

}
function createSection(event) {
	var div = document.createElement("div"); 
	div.style.border = "2px solid black";
	div.style.padding = "4px";
	div.style.width = "600px";
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
	title.id = "title" + categoryNumber;
	div.appendChild(title);
	
	var textAr = document.createElement("p");
	textAr.innerHTML = catDiv.childNodes[1].value;
	textAr.id = "description" + categoryNumber;
	div.appendChild(textAr);
	
	var buttonsDiv = document.createElement("div");
	buttonsDiv.id = "buttonsDiv" + categoryNumber;
	buttonsDiv.className = "buttonsDiv";
	
	var editButton = document.createElement("input");
	editButton.type = "button";
	editButton.value = "Edit Category";
	editButton.id = "editButton" + categoryNumber;
	editButton.addEventListener("click", editCategory);
	editButton.className = "editButtons";
	
	var addButton = document.createElement("input");
	addButton.type = "button"
	addButton.value = "Add Task";
	addButton.id = "addButton" + categoryNumber;
	addButton.className = "editButtons";
	
	buttonsDiv.appendChild(editButton);
	buttonsDiv.appendChild(addButton);
	div.appendChild(buttonsDiv);
	document.getElementById("dashboard").appendChild(div);
}
function editCategory(event) {
	categoryNumber = event.target.id.substring(10);
	var editDiv;
	
	buttonsDiv = document.getElementById("buttonsDiv" + categoryNumber);
	buttonsDiv.style.visibility = "hidden"; 
	buttonsDiv.style.width = "0px";
	buttonsDiv.style.height = "0px";
	
	if (document.getElementById("editDiv" + categoryNumber) == null) {
		console.log(categoryNumber);
		var catDiv = document.getElementById("category" + categoryNumber);
		
		editDiv = document.createElement("div");
		editDiv.id = "editDiv" + categoryNumber;
		editDiv.className = "editDiv";
		
		var newTitle = document.createElement("input");
		newTitle.type = "text";
		newTitle.id = "editTitle" + categoryNumber;
		
		var titleLabel = document.createElement("label");
		titleLabel.innerHTML = "New Title";
		titleLabel.htmlFor = newTitle.id;
		
		var newDescription = document.createElement("input");
		newDescription.type = "text";
		newDescription.id = "editDesc" + categoryNumber;
		
		var descLabel = document.createElement("label");
		descLabel.innerHTML = "New Description";
		descLabel.htmlFor = newDescription.id;
		
		var saveButton = document.createElement("input");
		saveButton.type = "button";
		saveButton.value = "Save";
		saveButton.id = "saveButton" + categoryNumber;
		saveButton.className = "saveButtons";
		saveButton.addEventListener("click", saveTitleDesc);
		
		editDiv.appendChild(titleLabel);
		editDiv.appendChild(newTitle);
		editDiv.appendChild(descLabel);
		editDiv.appendChild(newDescription);
		editDiv.appendChild(saveButton);
		
		catDiv.appendChild(editDiv);
		
		
	}
	editDiv = document.getElementById("editDiv" + categoryNumber);
	editDiv.style.visibility = "visible"; 
	editDiv.style.width = "600px";
	editDiv.style.height = "20px";
	
}
function saveTitleDesc(event) {
	categoryNumber = event.target.id.substring(10);
	console.log(categoryNumber);
	var title = document.getElementById("title" + categoryNumber);
	var description = document.getElementById("description" + categoryNumber);
	var titleText = document.getElementById("editTitle" + categoryNumber);
	var descText = document.getElementById("editDesc" + categoryNumber);
	
	if (titleText.value != "") {
		title.innerHTML = titleText.value;
	}
	if (descText.value != "") {
		description.innerHTML = descText.value;
	}
	
	var editDiv = document.getElementById("editDiv" + categoryNumber);
	var buttonsDiv = document.getElementById("buttonsDiv" + categoryNumber);
	
	editDiv.style.visibility = "hidden"; 
	editDiv.style.width = "0px";
	editDiv.style.height = "0px";
	
	buttonsDiv.style.visibility = "visible"; 
	buttonsDiv.style.width = "600px";
	buttonsDiv.style.height = "20px";
}
//in each section, what do we want? 
//ability to add/edit title and description 
//ability to add a task 