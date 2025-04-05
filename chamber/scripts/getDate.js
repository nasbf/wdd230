const modified = document.querySelector('#modified');
const info = document.querySelector('#info');

const currentYear = new Date().getFullYear();
info.textContent = `© ${currentYear} Alexandra Suárez Bogotá - Colombia`;

const modifiedDate = document.lastModified;
modified.textContent = `Last modification: ${modifiedDate}`;

const hamburguer = document.querySelector('#boton');
const navlist = document.querySelector('.navlist');

hamburguer.addEventListener('click', () => {
	navlist.classList.toggle("show");
	hamburguer.classList.toggle("show");
})

/*----json to directory.html ----*/

const baseURL = "https://nasbf.github.io/wdd230/";
const linksURL = `https://nasbf.github.io/wdd230/chamber/data/members.json`;

async function getMembers() {
    try {
        const response = await fetch(linksURL);
        if (!response.ok) 
            throw new Error("File JSON is not accesible");
        const data = await response.json();
		console.log(data.members);
        /*displayLinks(data.members);*/
    } catch (error) {
        console.error("error", error);
    }
}
getMembers();





const actualDate = new Date();
const visitsDisplay = document.querySelector('#visitMessage');

let numVisits = Number(window.localStorage.getItem('visits_Is')) || 0;

if (numVisits !== actualDate) {
		visitsDisplay.textContent = `Welcome! Let us know if you have any questions.`;
}
/* else if (numVisits ) {
	visitsDisplay.textContent = `Back so soon! Awesome!`;
}
 */else {
	visitsDisplay.textContent = `Your last visited ${numVisits} days ago.`;
}


numVisits++;

localStorage.setItem("visits_Is", numVisits);


