function add(a, b) {
    return "Sum = "+(a + b);
}

function sub(a, b) {
    return "Sub = "+(a - b);
}

function mul(a, b) {
    return "Multiplication = "+(a * b);
}

function div(a, b) {
    return "Division = "+(a / b);
}

module.exports = {
    add,
    sub,
    mul,
    div
};
// let fn;
// export default fn = {
//     add,
//     sub,
//     mul,
//     div
// };