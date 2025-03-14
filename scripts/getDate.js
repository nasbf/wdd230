const modified = document.querySelector('#modified');
const info = document.querySelector('#info');

const currentYear = new Date().getFullYear();
info.textContent = `© ${currentYear} Alexandra Suárez Bogotá - Colombia`;

const modifiedDate = document.lastModified;
modified.textContent = `Last modification: ${modifiedDate}`;

const navlist = document.querySelector('.menu');
const hamburguer = document.querySelector('#hamb');
hamburguer.addEventListener('click', () => {
    navlist.classList.toggle('display');
    hamburguer.classList.toggle('display'); 
})