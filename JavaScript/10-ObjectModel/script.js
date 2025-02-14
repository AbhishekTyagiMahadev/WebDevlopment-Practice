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
});
