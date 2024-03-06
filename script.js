const burgerMenu = document.querySelector('.burger-menu');
const menu = document.querySelector('.navbar');
const body = document.querySelector('body');

const menuItems = document.querySelectorAll('.navbar li');

const catalogMenuItem = document.querySelector('.dropdown');
menuItems.forEach(item => {
  item.addEventListener('click', () => {
    if(window.innerWidth >= 768) {
        menuItems.forEach(item => {
            item.classList.remove('active');
        });
        item.classList.add('active');
        menu.classList.remove('active');
        burgerMenu.classList.remove('active');
        body.classList.remove('no-scroll');
    } else {
        if(item != catalogMenuItem) {
            menuItems.forEach(item => {
                item.classList.remove('active');
            });
            item.classList.add('active');
            menu.classList.remove('active');
            burgerMenu.classList.remove('active');
            body.classList.remove('no-scroll');
        }
    }
});
});

burgerMenu.addEventListener('click', (event) => {
  event.stopPropagation(); 
  menu.classList.toggle('active');
  burgerMenu.classList.toggle('active');
  body.classList.toggle('no-scroll');
});


document.addEventListener('click', (event) => {
    const isClickInsideMenu = menu.contains(event.target); 
    const isClickInsideBurgerMenu = burgerMenu.contains(event.target); 
    if (catalogMenuItem && !isClickInsideMenu && !isClickInsideBurgerMenu && menu.classList.contains('active')) {
      menu.classList.remove('active');
      burgerMenu.classList.remove('active');
      body.classList.remove('no-scroll');
    }
});

const fields = [
    { id: "first_name", errorId: "first_name_error", errorMessage: "Введіть ваше ім'я" },
    { id: "last_name", errorId: "last_name_error", errorMessage: "Введіть ваше прізвище" },
    { id: "email_addr", errorId: "email_error", errorMessage: "Введіть вашу електронну адресу" },
    { id: "phone_input", errorId: "phone_error", errorMessage: "Введіть ваш номер телефону" }
];

document.getElementById("contact_form").addEventListener("submit", (event) => {
    let isValid = true;

    fields.forEach(field => {
        const value = document.getElementById(field.id).value.trim();
        const errorElement = document.getElementById(field.errorId);
        if (value === "") {
            document.getElementById(field.id).classList.add('error');
            errorElement.innerText = field.errorMessage;
            isValid = false;
        } else {
            errorElement.innerText = "";
            document.getElementById(field.id).classList.remove('error'); // remove the dot before 'error'
        }
    });

    if (!isValid) {
        event.preventDefault();
    }
});

fields.forEach(field => {
    document.getElementById(field.id).addEventListener('input', () => {
        const value = document.getElementById(field.id).value.trim();
        const errorElement = document.getElementById(field.errorId);
        if (value === "") {
            document.getElementById(field.id).classList.add('error');
            errorElement.innerText = field.errorMessage;
        } else {
            errorElement.innerText = "";
            document.getElementById(field.id).classList.remove('error');
        }
    });
});