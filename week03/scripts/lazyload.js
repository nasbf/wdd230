const modified = document.querySelector('#modified');
const info = document.querySelector('#info');

const currentYear = new Date().getFullYear();
info.textContent = `© ${currentYear} Alexandra Suárez `;

const modifiedDate = document.lastModified;
modified.textContent = `Last modification: ${modifiedDate}`;
