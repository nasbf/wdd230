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


