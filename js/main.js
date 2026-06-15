document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('.burger-menu');
    const nav = document.getElementById('main-nav');

    burger.addEventListener('click', function() {
        burger.classList.toggle('active');
        nav.classList.toggle('active');
    });

    // Закрытие меню при клике на ссылку (опционально)
    nav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            burger.classList.remove('active');
            nav.classList.remove('active');
        });
    });
});