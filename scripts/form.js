let range = document.getElementById("range");
let rangeValue = document.getElementById("rangevalue");
range.addEventListener("input", function () {
    rangeValue.textContent = range.value;
});

const first_password = document.querySelector("#password");
const second_password = document.querySelector("#confirm_upassword");
const displayAlert = document.querySelector("#alert_message");

second_password.addEventListener('focusout', controlar)

function controlar() {
    if (first_password.value !== second_password.value) {
        first_password.value = ""
        second_password.value = ""
        first_password.focus()
        displayAlert.textContent = "Your password doesn't match, try again"

    } else {
        displayAlert.textContent = ""
    }
}

const modified = document.querySelector('#modified');
const info = document.querySelector('#info');

const currentYear = new Date().getFullYear();
info.textContent = `© ${currentYear} Alexandra Suárez Bogotá - Colombia`;

const modifiedDate = document.lastModified;
modified.textContent = `Last modification: ${modifiedDate}`;

/*Hamburguer menu*/

const menuList = document.getElementById('menuList');
const menuBtn = document.getElementById('menuBtn');
menuBtn.addEventListener('click', () => {
    menuList.classList.toggle('show');
    menuBtn.classList.toggle('show');
})

/*dark mode*/

