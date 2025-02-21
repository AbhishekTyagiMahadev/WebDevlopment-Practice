// Application Programing Interface(API)
let URL = "http://api.weatherapi.com/v1/current.json?key=1996e991d0aa4376b4c105918252002&q=,,new york&aqi=no"

const weather = document.querySelector('.weather')
const locationElement = document.querySelector('.location')
const temperatureElement = document.querySelector('.temperature')
const conditionElement = document.querySelector('.condition')
const btn = document.querySelector('.btn')

let fetchAPI = async () => {
    try {
        let response = await fetch(URL)
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText)
        }
        let data = await response.json()
        console.log(data)

        // Update the HTML elements with the fetched data
        locationElement.textContent = `Location: ${data.location.name}`
        temperatureElement.textContent = `Temperature: ${data.current.temp_c}°C`
        conditionElement.textContent = `Condition: ${data.current.condition.text}`

    } catch (error) {
        console.error('Fetch error: ', error)
    }
}

btn.addEventListener('click', fetchAPI)
// fetchAPI()