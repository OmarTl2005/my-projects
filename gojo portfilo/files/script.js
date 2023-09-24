let menuButton  = document.getElementById('menu-button');
let menu = document.getElementById('menu');
let close = document.getElementById('close');

const menuStyle = () => {
    menu.style.display = 'block';
}
menuButton.addEventListener('click', menuStyle);

const menuClose = () => {
    menu.style.display = 'none';
}
close.addEventListener('click', menuClose);