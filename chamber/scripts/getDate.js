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
	visitsDisplay.textContent = `You last visited ${numVisits} days ago.`;
}


numVisits++;

localStorage.setItem("visits_Is", numVisits);
