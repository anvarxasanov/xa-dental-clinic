const btnToggler = document.querySelector('.site-header__toggler');
const header = document.querySelector('.site-header');
const box = document.querySelector('.site-header__hidden-box');

btnToggler.addEventListener('click', () => {
    // Переключаем класс на самом родителе
    header.classList.toggle('site-header--open');
    box.classList.toggle('site-header__hidden-box--active');
});

// Дополнительный бонус: закрываем меню, если окно увеличили
window.addEventListener('resize', () => {
    if (window.innerWidth > 1024) {
        header.classList.remove('site-header--open');
        box.classList.remove('site-header__hidden-box--active');
    }
});