const baseURL = "https://nasbf.github.io/wdd230/";
const linksURL = `https://nasbf.github.io/wdd230/data/links.json`;

async function getLinks() {
    try {
        const response = await fetch(linksURL);
        if (!response.ok) 
            throw new Error("File JSON is not accesible");
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
            
            
            