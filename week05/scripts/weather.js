const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const figcaption = document.querySelector("figcaption");

const mykey = "a77ac1328c855c77ce77ae06799f182d"
const lat = "49.74"
const alt = "6.63"

const myurl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${alt}&appid=${mykey}&units=metric`;
async function apiFetch() {
    try {
        const response = await fetch(myurl);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());

        }
    } catch (error) {
        console.log(error);

    }
}


function displayResults(data) {
    console.log('tu puedes, tu puedes eres maravillosa. tranquila');
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', data.weather[0].description)
    figcaption.innerHTML = data.weather[0].description;
}
apiFetch();