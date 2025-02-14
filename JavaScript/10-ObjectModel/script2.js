let boxes = document.getElementsByClassName("box");
console.log(boxes);

// class selector
boxes[0].style.backgroundColor = "yellow";
boxes[0].style.color = "black";
boxes[1].style.backgroundColor = "green";

// id selector
document.getElementById("box3").style.backgroundColor = "aqua";

// query selector
document.querySelector(".container").style.backgroundColor = "purple";

// query selector all
let boxList = document.querySelectorAll(".box");
boxList.forEach(function(box) {
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

// tag selector
let h1 = document.getElementsByTagName("h1");
h1[0].style.color = "red";
h1[0].style.textAlign = "center";
h1[1].style.color = "blue";
h1[2].style.color = "green";
