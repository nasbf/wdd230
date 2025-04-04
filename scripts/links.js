const baseURL = "https://nasbf.github.io/wdd230";
const linksURL = "https://nasbf.github.io/wdd230/data/links.json";
const font = "data/links.json";

async function getlinks() {
    
        const response = await fetch(font);
        const data = await response.json();
        displayLinks(data.weeks);

}

const displayLinks = (weeks) => {
    const ulNumberWeek = document.querySelector("weeks"); 
    let card = document.createElement('section');
    let fullName = document.createElement('h2');
    
    fullName.textContent = `${weeks.week}`;
    card.appendChild(fullName);
    ulNumberWeek.appendChild(card); // Agrega la tarjeta al contenedor de semanas

        /* const ulLinks = document.createElement("ul"); 



        week.links.forEach((linkData) => {
            if (linkData.url) {
                const li = document.createElement("li");
                const link = document.createElement("a");
                link.setAttribute("href", linkData.url);
                link.textContent = linkData.title || linkData.url;
                link.target = "_blank"; // Abre en nueva pestaña

                li.appendChild(link);
                ulLinks.appendChild(li);
            }
        });

        liWeek.appendChild(ulLinks); // Agrega la lista de enlaces dentro del li de la semana
        ulNumberWeek.appendChild(liWeek); // Agrega todo al <ul class="numberWeek"> */
    });
};

getlinks();

    
            
            
            
        

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