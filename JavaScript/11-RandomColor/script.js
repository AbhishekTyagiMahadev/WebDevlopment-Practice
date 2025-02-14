function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

document.querySelector('.container').style.backgroundColor = getRandomColor();
document.getElementById("box1").style.backgroundColor = getRandomColor();
document.getElementById("box2").style.backgroundColor = getRandomColor();
document.getElementById("box3").style.backgroundColor = getRandomColor();
document.getElementById("box4").style.backgroundColor = getRandomColor();
document.getElementById("box5").style.backgroundColor = getRandomColor();