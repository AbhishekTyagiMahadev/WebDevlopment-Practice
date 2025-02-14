let container = document.querySelector('.container');
console.log(container);

// Create a new element
let newElement = document.createElement('div');
newElement.textContent = 'I am a new element';
newElement.style.backgroundColor = 'yellow';
newElement.style.border = '2px solid black';
newElement.style.padding = '10px';
newElement.style.margin = '10px';
newElement.style.height = '100px';
newElement.style.width = '100px';


// Append the new element to the container
container.appendChild(newElement);

// Insert another new element before the first child of the container
let anotherElement = document.createElement('div');
anotherElement.textContent = 'I am another new element';
anotherElement.style.backgroundColor = 'lightblue';
anotherElement.style.border = '2px solid black';
anotherElement.style.padding = '10px';
anotherElement.style.margin = '10px';
anotherElement.style.height = '100px';
anotherElement.style.width = '100px';

let firstChild = container.firstElementChild;
container.insertBefore(anotherElement, firstChild);

// Remove the first child of the container
// container.removeChild(firstChild);

// Remove the container itself
// container.remove();