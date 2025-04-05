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
getLinks();

const displayLinks = (weeks) => {
    const ulNumbers = document.querySelector("#.sections");
    let section = document.createElement("section");
    let ul = document.createElement("ul");
    let li = document.createElement("li");
    let a = document.createElement("a");
    let weekNumber = document.createElement("h2");
    weekNumber.textContent = `${weeks[0].week}`; 
}
            
            