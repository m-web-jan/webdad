let mob_menu = document.getElementsByClassName('mob_menu')[0];
let burger = document.getElementsByClassName('burger-icon')[0];

burger.onclick = () => {
    mob_menu.classList.toggle('open');
    document.body.classList.toggle('noscroll');
}

mob_menu.addEventListener('click', function () {
    mob_menu.classList.toggle('open');
    document.body.classList.toggle('noscroll');
});