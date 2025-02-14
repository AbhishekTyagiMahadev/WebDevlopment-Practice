document.title = "Object Model";
console.log(document.title);
console.log(document.body);
document.body.style.backgroundColor = "lightblue";

// Select the container class and apply styles
document.querySelector('.container').style.backgroundColor = "red";
document.querySelector('.container').style.border = "1px solid black";


// Select all elements with class box
let boxes = document.querySelectorAll('.box');

// Iterate over each element and apply styles
boxes.forEach(function(box) {
    box.style.backgroundColor = "aqua";
    box.style.height = "100px";
    box.style.width = "100px";
    box.style.border = "1px solid black";
    box.style.margin = "10px";
    box.style.padding = "10px";
    box.style.display = "inline-block";
    box.style.textAlign = "center";
    box.style.lineHeight = "100px";
    box.style.fontFamily = "Arial";
    box.style.fontSize = "20px";
    box.style.fontWeight = "bold";
});


// document.body.childNodes[1].container 
// document.body.elementchildNodes[1]

// Select children, parent, and sibling nodes
let container = document.querySelector('.container');
let firstChild = container.firstElementChild;
console.log("First Child:", firstChild);

let lastChild = container.lastElementChild;
console.log("Last Child:", lastChild);

let parent = firstChild.parentElement;
console.log("Parent:", parent);

let nextSibling = firstChild.nextElementSibling;
console.log("Next Sibling:", nextSibling);

let previousSibling = lastChild.previousElementSibling;
console.log("Previous Sibling:", previousSibling); 
