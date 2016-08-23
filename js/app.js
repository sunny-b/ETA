

var taskInput = document.getElementById("new-task");
var addButton = document.querySelector("button.add");
var addInput = document.querySelector("input#new-task");
var incompleteTasksHolder = document.getElementById("incomplete-tasks");
var completedTasksHolder = document.getElementById("completed-tasks");
var plusButton = document.querySelector("button.plus");
var incompleteLi = document.querySelector("ul#incomplete-tasks");
var item = 1;
var item2 = 1;
//Toggle Add Bar
var showNewTask = function(e) {
	var newTask = document.querySelector("div#addTask");
	newTask.classList.toggle("hide");
	var qTest = newTask.classList.contains("hide");
	plusButton.classList.toggle("rotate");
	incompleteLi.classList.toggle("shift");
	taskInput.focus();
};


//Load existing
var existingIncomTasks = function(){
	if (sessionStorage.length === 0){
		return;
	}
	 else {
		for (i=1; i<20; i++) {
			if (sessionStorage.getItem(i) == null) {
				continue;
			} else {
			var listItem = document.createElement("li");
  
  //input checkbox
  var checkBox = document.createElement("input");
    //label
  var label = document.createElement("label");
    //input (text)
  var editInput = document.createElement("input");
    //button.edit
  var editButton = document.createElement("button");
    //button.delete
  var deleteButton = document.createElement("button");
    //Each elements needs modifying
    checkBox.type = "checkbox";
    editInput.type = "text";
  
    listItem.className = i;
    item++;
    item2++;
    editButton.innerText = "Edit";
    editButton.className = "edit";
    deleteButton.innerText = "Delete";
    deleteButton.className = "delete";
  
    label.innerText = sessionStorage.getItem(i);
  
    //Each element needs appending
    listItem.appendChild(checkBox);
    listItem.appendChild(label);  
    listItem.appendChild(editInput);
  listItem.appendChild(editButton);
  listItem.appendChild(deleteButton);
  incompleteTasksHolder.appendChild(listItem);
  bindTaskEvents(listItem, taskCompleted);
  	}
		}
	}
};

var existingComTasks =  function(){
	if (sessionStorage.length === 0){
		return;
	}
	 else {
		for (i=-1; i>-20; i--) {
			if (sessionStorage.getItem(i) == null) {
				continue;
			} else {
			var listItem = document.createElement("li");
  
  //input checkbox
  var checkBox = document.createElement("input");
    //label
  var label = document.createElement("label");
    //input (text)
  var editInput = document.createElement("input");
    //button.edit
  var editButton = document.createElement("button");
    //button.delete
  var deleteButton = document.createElement("button");
    //Each elements needs modifying
    checkBox.type = "checkbox";
    checkBox.checked = true;
    editInput.type = "text";
  
    listItem.className = i;
    
    
    editButton.innerText = "Edit";
    editButton.className = "edit";
    deleteButton.innerText = "Delete";
    deleteButton.className = "delete";
  
    label.innerText = sessionStorage.getItem(i);
  
    //Each element needs appending
    listItem.appendChild(checkBox);
    listItem.appendChild(label);  
    listItem.appendChild(editInput);
  listItem.appendChild(editButton);
  listItem.appendChild(deleteButton);
  completedTasksHolder.appendChild(listItem);
  bindTaskEvents(listItem, taskIncomplete);
  	}
		}
	}
};

//New Task List Item
var createNewTaskElement = function(taskString) {
	
  var listItem = document.createElement("li");
  
  //input checkbox
  var checkBox = document.createElement("input");
    //label
  var label = document.createElement("label");
    //input (text)
  var editInput = document.createElement("input");
    //button.edit
  var editButton = document.createElement("button");
    //button.delete
  var deleteButton = document.createElement("button");
    //Each elements needs modifying
    checkBox.type = "checkbox";
    editInput.type = "text";
  
    listItem.className = item;
    item++;
    editButton.innerText = "Edit";
    editButton.className = "edit";
    deleteButton.innerText = "Delete";
    deleteButton.className = "delete";
  
    label.innerText = taskString;
  
    //Each element needs appending
    listItem.appendChild(checkBox);
    listItem.appendChild(label);  
    listItem.appendChild(editInput);
  listItem.appendChild(editButton);
  listItem.appendChild(deleteButton);
  
  
  return listItem;
};

//add a new task
var addTask = function(e) {
  console.log("Faggy irish face");

  //Create new task with the text from the new task
 var listItem = createNewTaskElement(taskInput.value);
 
 if (taskInput.value === "") {
    return;
 } else {
  
  //append listItem to incompleteTasksHolder
    incompleteTasksHolder.appendChild(listItem);
  bindTaskEvents(listItem, taskCompleted);
 		
  	var inputString = taskInput.value;
 		sessionStorage.setItem(item2, inputString);
  	item2++;
  }
  taskInput.value = "";
 
};  

//Edit an existing task
var editTask = function(){
  console.log("edit task...");

  var listItem = this.parentNode;
  var editButton = listItem.querySelector("button.edit");
  var editInput = listItem.querySelector("input[type=text]");
  var label = listItem.querySelector("label");
  var containsClass = listItem.classList.contains("editMode");
    
    //if the class of the parent is .editMode
  if (containsClass) {
    
    //label text become the input's value
    label.innerText = editInput.value;
    editButton.innerText = "Edit";
     if (label.innerText.trim() === "") {
    	listItem.parentNode.removeChild(listItem);
    } 
} else {
    //input value becomes the label's text
    editInput.value = label.innerText;
    editButton.innerText = "Save";
    
  }
  
  listItem.classList.toggle("editMode");
  editInput.focus();
  sessionStorage.setItem(parseInt(listItem.className,10), label.innerText);	
};

var editTask2 = function(){
  console.log("edit task...");

  var listItem = document.querySelector('#incomplete-tasks li input:focus').parentNode;
  var editButton = listItem.querySelector("button.edit");
  var editInput = listItem.querySelector("input[type=text]");
  var label = listItem.querySelector("label");
  var containsClass = listItem.classList.contains("editMode");
    
    //if the class of the parent is .editMode
  if (containsClass) {
    
    //label text become the input's value
    label.innerText = editInput.value;
    editButton.innerText = "Edit";
     if (label.innerText.trim() === "") {
    	listItem.parentNode.removeChild(listItem);
    } 
} else {
    //input value becomes the label's text
    editInput.value = label.innerText;
    editButton.innerText = "Save";
    
  }
  
  listItem.classList.toggle("editMode");
  editInput.focus();
  
	sessionStorage.setItem(parseInt(listItem.className,10), label.innerText);	

};



//Delete an existing task
var deleteTask = function(){
console.log("delete task...");

  //Delete the existing list item from the UL.
  var listItem = this.parentNode;
  var ul = listItem.parentNode;
  ul.removeChild(listItem);
  sessionStorage.removeItem(listItem.className);
};  

//Mark a task as complete
var taskCompleted = function() {
console.log("task complete...");
    //Append the task list item to the completed-tasks
  var listItem = this.parentNode;
  var label = listItem.querySelector("label");
  completedTasksHolder.appendChild(listItem);
  bindTaskEvents(listItem, taskIncomplete);
  sessionStorage.removeItem(listItem.className);
  listItem.className = listItem.className * -1;
  sessionStorage.setItem(listItem.className, label.innerText);
};
  

//Mark a task as incomplete
var taskIncomplete = function() {
 console.log("task incomplete...");
  
  
    //Append this to incomplete tasks
  var listItem = this.parentNode;
  var label = listItem.querySelector("label");
  incompleteTasksHolder.appendChild(listItem);
  bindTaskEvents(listItem, taskCompleted);
  sessionStorage.removeItem(listItem.className);
  listItem.className = listItem.className * -1;
  sessionStorage.setItem(listItem.className, label.innerText);
};

var bindTaskEvents = function (taskListItem, checkBoxEventHandler) {
  console.log("bind list item elements..."); 
  
  //select it's children
  var checkBox = taskListItem.querySelector("input[type=checkbox]");
  var editButton = taskListItem.querySelector("button.edit");
  var deleteButton = taskListItem.querySelector("button.delete");
  var editInput = taskListItem.querySelector("input[type=text]");
    
  //bind editTask to edit button
  editButton.onclick = editTask;
  
  editInput.addEventListener("keypress", function(e){
  	var key = e.which || e.keyCode;
  	if(key===13) {
  		editTask2();
  	}
  });
  
 //bind deleteTask to delete button
  deleteButton.onclick = deleteTask;
    
  //bind checkBoxEventHandler to checkbox
  checkBox.onchange = checkBoxEventHandler;
};

//Set the click handler to addTask function
addInput.addEventListener('keypress', function (e) {
    var key = e.which || e.keyCode;
    if (key === 13) { // 13 is enter
     addTask();
     console.log("this worked");
    }
});

addButton.addEventListener("click", addTask);
plusButton.addEventListener("click", showNewTask);
document.addEventListener('keypress', function (e) {
    if(e.target.nodeName.toLowerCase() === 'input'){
        return;
    }
    var key = e.which || e.keyCode;
    if (key === 13) { // 13 is enter
    	showNewTask();
    }
});



//Delete empty task




//cycle over incompleteTasksHolder ul list items
for(var i = 0; i < incompleteTasksHolder.children.length; i++) {
  
    //bind events to list items children (taskCompleted)
  bindTaskEvents(incompleteTasksHolder.children[i], taskCompleted);    
}
  


//cycle over completedTasksHolder ul list items
for(var i = 0; i < completedTasksHolder.children.length; i++) {
  bindTaskEvents(completedTasksHolder.children[i], taskIncomplete);   
    //bind events to list items children (taskIncomplete)
}
  
  
  