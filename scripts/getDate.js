const modified = document.querySelector('#modified');
const info = document.querySelector('#info');

const currentYear = new Date().getFullYear();
info.textContent = `© ${currentYear} Alexandra Suárez Bogotá - Colombia`;

const modifiedDate = document.lastModified;
modified.textContent = `Last modification: ${modifiedDate}`;

/*Hamburguer menu*/

const menuList = document.getElementById('menuList');
const menuBtn = document.getElementById('menuBtn');
menuBtn.addEventListener('click', () => {
    menuList.classList.toggle('show');
    menuBtn.classList.toggle('show');
})

/*dark mode*/

const bgrbtnDiv = document.getElementById("bgrbtn-div");
const main = document.querySelector("main");
const firstTitle = document.querySelector('#firstTitle');

bgrbtnDiv.addEventListener("click", () => {
    if (bgrbtnDiv.textContent.includes("🌓")) {
        main.style.background = "#000";
        main.style.color = "#fff";
        firstTitle.style.color = "white";

        bgrbtnDiv.textContent = "🔆";
    } else {
        main.style.background = "#eee";
        main.style.color = "#000";
        bgrbtnDiv.textContent = "🌓";
    }
});
const visitsDisplay = document.querySelector('.counterVisits');

let numVisits = Number(window.localStorage.getItem('visits_Is')) || 0;

if (numVisits !== 0) {
    visitsDisplay.textContent = numVisits;
} else {
    visitsDisplay.textContent = `Welcome, this is your first visit`;
}
numVisits++;

localStorage.setItem("visits_Is", numVisits);


/*----Section Weather information ----*/

const town = document.querySelector("#town");
const icon = document.querySelector("#icon");
const description = document.querySelector("#description");
const temp = document.querySelector("#temp");

const key = "1118b069ab8a6351502bfa2c17d8d44b";
const lat = "4.85";
const long = "-74.26";
const url = `//api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${key}&units=imperial`;



async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResult(data);

        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }

}
function displayResult(data){
    town.innerHTML=data.name;
    temp.innerHTML=`${data.main.temp}&deg;F`;
    description.innerHTML=data.weather[0].description;
    const iconsrc= `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    icon.setAttribute('src',iconsrc);
    icon.setAttribute('alt', data.weather[0].description,)
    
    

}
apiFetch();
