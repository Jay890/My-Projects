// addTask = document.getElementById("submit");
var addTask = document.getElementById("userInput");
var listing = document.getElementById("listing");
var submitButton = document.getElementById("submit");

const hoverFunction = (e) => {
  console.log(e.srcElement.id);
  console.log(e.target.value);
};

document.addEventListener("click", hoverFunction, true);

var submit = function () {
  node = document.createElement("LI");
  input = addTask.value;
  textnode = document.createTextNode(input);
  node.appendChild(textnode);
  listing.appendChild(node);
  addTask.value = "";
};

submitButton.addEventListener("click", submit, true);

listing.addEventListener("click", function (e) {
  target = e.target;
  target.parentNode.removeChild(target);
});

addTask.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    submitButton.click();
  }
});
