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