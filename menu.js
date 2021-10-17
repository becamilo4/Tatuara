const menu = document.querySelector(".header__menu-span");
const menu_span = document.querySelector(".header__container-menu");
// const prueba = document.querySelector(".menu__container");
const click = document.querySelector('.menu__container');


menu.addEventListener("click", function(){
    menu_span.classList.toggle("active");
});

click.addEventListener("click", function(){
    menu_span.classList.remove("active");
});