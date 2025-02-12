function msg() {
    console.log("Hello World!");
}
msg();

function sum(a, b) {
    return a + b;
}
result = sum(5, 10);
console.log("sum", result);
result = sum(10, 10);
console.log("sum", result);
result = sum(20, 10);
console.log("sum", result);

// Arrow function
const person = (name) => {
    console.log("Hello " + name);
};
person("Abhishek");
person("Vivek");
person("Aditya");
