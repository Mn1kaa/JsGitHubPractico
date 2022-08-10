const navba_Right = document.querySelector('.navbar-email');
const navba_Right_menu =document.querySelector('.desktop-menu');


navba_Right.addEventListener('click', Toogle);

function Toogle(){
    navba_Right_menu.classList.toggle('inactive');
    console.log("hola")

}
