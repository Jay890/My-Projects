// addTask = document.getElementById("submit");
var addTask = document.getElementById("userInput");

var submitButton = document.getElementById("submit");

// var dayslist = document.getElementById("weekday-option").value;

// Id for each day
var mondayToDo = document.getElementById("monday-work");
var tuesdayToDo = document.getElementById("tuesday-work");
var wednesdayToDo = document.getElementById("wednesday-work");
var thursdayToDo = document.getElementById("thursday-work");
var fridayToDo = document.getElementById("friday-work");
var saturdayToDo = document.getElementById("saturday-work");
var sundayToDo = document.getElementById("sunday-work");

const hoverFunction = (e) => {
  // console.log(e.srcElement.id);
  console.log(e.target.value);
};

document.addEventListener("click", hoverFunction, true);

// var submit = function () {
//   node = document.createElement("LI");
//   input = addTask.value;
//   textnode = document.createTextNode(input);
//   node.appendChild(textnode);
//   listing.appendChild(node);
//   addTask.value = "";
// };

var appendToList = function () {
  var dayslist = document.getElementById("weekday-option").value;
  if (dayslist === "monday") {
    mondayToDo.appendChild(node);
  } else if (dayslist === "tuesday") {
    tuesdayToDo.appendChild(node);
  } else if (dayslist === "wednesday") {
    wednesdayToDo.appendChild(node);
  } else if (dayslist === "thursday") {
    thursdayToDo.appendChild(node);
  } else if (dayslist === "friday") {
    fridayToDo.appendChild(node);
  } else if (dayslist === "saturday") {
    saturdayToDo.appendChild(node);
  } else {
    sundayToDo.appendChild(node);
  }
};

//Add a task to the list, if empty add nothing
var submit = function () {
  if (addTask.value == "") {
    // Do nothing
  } else {
    node = document.createElement("LI");
    input = addTask.value;
    textnode = document.createTextNode(input);
    node.appendChild(textnode);
    appendToList();
    addTask.value = "";
  }
};

submitButton.addEventListener("click", submit, true);

mondayToDo.addEventListener("click", function (e) {
  target = e.target;
  target.parentNode.removeChild(target);
});

tuesdayToDo.addEventListener("click", function (e) {
  target = e.target;
  target.parentNode.removeChild(target);
});

wednesdayToDo.addEventListener("click", function (e) {
  target = e.target;
  target.parentNode.removeChild(target);
});

thursdayToDo.addEventListener("click", function (e) {
  target = e.target;
  target.parentNode.removeChild(target);
});

fridayToDo.addEventListener("click", function (e) {
  target = e.target;
  target.parentNode.removeChild(target);
});

saturdayToDo.addEventListener("click", function (e) {
  target = e.target;
  target.parentNode.removeChild(target);
});

sundayToDo.addEventListener("click", function (e) {
  target = e.target;
  target.parentNode.removeChild(target);
});

addTask.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    submitButton.click();
  }
});
