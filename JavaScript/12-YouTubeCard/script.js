function createCard(title, cName, views, monthsOld, duration, thumbnail) {
    // Finish this function
    let viewStr
    if (views < 1000) {
        viewStr = views;
    }
    else if (views > 1000000) {
        viewStr = views / 1000000 + "M";
    }
    else {
        viewStr = views / 1000 + "K";
    }
    let html = `<div class="card">
            <div class="left">
                <img src="${thumbnail}" alt="image">
                <button class="duration">${duration}</button>
            </div>
            <div class="right">
                <div class="up">
                    <h1>${title}</h1>
                </div>
                <div class="down">
                    <p>${cName} . ${viewStr} views . ${monthsOld} month ago</p>
                </div>
            </div>
        </div>`

    document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html
}


createCard("This is My first video | Welcome to my channel #1", "Abhishek Tyagi", 560000, 7, "31:22", "image.jpg")
