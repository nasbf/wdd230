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
		displayMembers(data.members);
	} catch (error) {
		console.error("error", error);
	}
}
getMembers();

function displayMembers(members) {
	members.forEach(member => {
		const grid = document.querySelector(".grid");
		
		const cardDirectory = document.createElement("section");
		const fullName = document.createElement("h2");
		const dir = document.createElement("p");
		const phone = document.createElement("p");
		const mail = document.createElement("p");
		const website = document.createElement("a");
		const level = document.createElement("p");
		const portrait = document.createElement("img");

		fullName.textContent = `${member.company}`;
		dir.textContent = `${member.dir}`;
		phone.textContent = `${member.phone}`;
		mail.textContent = `${member.mail}`;
		website.setAttribute ("href",member.website);
		website.textContent = member.website;

		level.textContent = `${member.level}`;
		portrait.setAttribute("src", member.img);
        portrait.setAttribute("alt", `Portrait of ${member.company}`);
        portrait.setAttribute("loading", "lazy");
        portrait.setAttribute("width", "180");
        portrait.setAttribute("height", "180");
		
		cardDirectory.appendChild(fullName);
		cardDirectory.appendChild(dir);
		cardDirectory.appendChild(phone);
		cardDirectory.appendChild(mail);
		cardDirectory.appendChild(website);
		cardDirectory.appendChild(level);
		cardDirectory.appendChild(portrait);

		grid.appendChild(cardDirectory);
	});
}

/*------button grid and list -----*/
const gridStyle = document.querySelector("#grid");
const listStyle = document.querySelector("#list");
const display = document.querySelector("article");

gridStyle.addEventListener ("click", () => {
	display.classList.add ("grid");
	display.classList.remove ("list");
});

listStyle.addEventListener ("click", showList);

function showList(){
	display.classList.add("list");
	display.classList.remove("grid");
}



/*---------VISITIS --------*/

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


