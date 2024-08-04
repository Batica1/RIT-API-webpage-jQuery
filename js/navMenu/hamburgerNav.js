

const navLogo = document.querySelector('#burgerResponsive');
const menu = document.querySelector('#navLinks');


navLogo.addEventListener('click', function(params){
    params.preventDefault();
    menu.classList.toggle('is-active');
});


