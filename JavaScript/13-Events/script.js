// Select an element
let button = document.querySelector('button');
let h1 = document.querySelector('h1');

// Add a click event listener
// button.addEventListener('click', function() {
//     alert('Button was clicked!');
// });

// Add double click event listener
button.addEventListener('dblclick', function() {
    document.body.style.backgroundColor = 'blue';
});

// Add mouseover event listener
button.addEventListener('mouseover', function() {
    button.style.backgroundColor = 'red';
});

// Add mouseout event listener
button.addEventListener('mouseout', function() {
    button.style.backgroundColor = 'aqua';
});

// keyboard events
document.addEventListener('keydown', function(event) {
    console.log(event);
});

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// setinterval
setInterval(() => {
    document.body.style.backgroundColor = getRandomColor();
    h1.style.backgroundColor = getRandomColor();
    h1.style.color = getRandomColor();
    button.style.backgroundColor = getRandomColor();
    button.style.color = getRandomColor();
}, 2000);

// setTimeout
// setTimeout(() => {
//     document.body.style.backgroundColor = getRandomColor();
//     button.style.backgroundColor = getRandomColor();
// }, 3000);
