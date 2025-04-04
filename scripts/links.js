const baseURL = "https://nasbf.github.io/wdd230/";
const linksURL = `${baseURL}data/links.json`;

async function getLinks() {
    try {
        const response = await fetch(linksURL);
        if (!response.ok) 
            throw new Error("Fil JSON is not accesible");
        const data = await response.json();
        displayLinks(data.weeks);
    } catch (error) {
        console.error("error", error);
    }
}

function displayLinks(weeks) {
    const weeksList = document.getElementById("weeks-list");
    weeksList.innerHTML = "";

    weeks.forEach(week => {
        const weekItem = document.createElement("li");
        weekItem.textContent = week.week;

        const activitiesList = document.createElement("ul");

        week.links.forEach(link => {
            const linkItem = document.createElement("li");
            const a = document.createElement("a");
            a.href = link.url;
            a.textContent = link.title;
            linkItem.appendChild(a);
            activitiesList.appendChild(linkItem);
        });

        weekItem.appendChild(activitiesList);
        weeksList.appendChild(weekItem);
    });
}

getLinks();
            
            
            
        

        /* 
        const cardDiv= document.createElement ("div");
        
        const fullName = document.createElement("h2");
        fullName.textContent = `${weeks.week}}`;

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
 */