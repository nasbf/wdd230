const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    displayProphets(data.prophets);

}
const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        const card = document.createElement("section");
        
        const cardDiv= document.createElement ("div");
        
        const fullName = document.createElement("h2");
        fullName.textContent = `${prophet.name}${prophet.lastname}`;

        const birthDate = document.createElement("h3");
        birthDate.textContent = `${prophet.birthdate}`;

        const birthPlace = document.createElement("h3");
        birthPlace.textContent = `Place of Birth: ${prophet.birthplace}`;


        const portrait = document.createElement("img");
        portrait.setAttribute("src", prophet.imageurl);
        portrait.setAttribute("alt", `Portrait of ${prophets.name} ${prophets.lastname}`);
        portrait.setAttribute("loading", "lazy");
        portrait.setAttribute("width", "180");
        portrait.setAttribute("height", "250");

        card.appendChild(fullName);
        card.appendChild(birthDate);
        card.appendChild(birthPlace);
        card.appendChild(portrait);

        cards.appendChild(card);



    });
}

getProphetData();
// const result = null;
/* async function getprophetsData(url) {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data.prophets);
}
getprophetsData();
 */
/* if (response.ok) {
    const data = await response.json();

    doStuff(data);
}

}
function doStuff(data) {
result = (data);
console.table(result);

}
getprohetsData(url);
console.log(result); */