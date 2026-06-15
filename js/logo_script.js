document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    if (!header) return;

    function isMobile() {
        return window.innerWidth <= 768;
    }

    let lastShrink = false;
    let ticking = false;

    function updateHeader() {
        const scrollY = window.pageYOffset || document.documentElement.scrollTop;
        const shouldShrink = isMobile() && scrollY > 5;

        if (shouldShrink === lastShrink) return;

        if (shouldShrink) {
            header.classList.add('shrink');
        } else {
            header.classList.remove('shrink');
        }
        lastShrink = shouldShrink;
    }

    window.addEventListener('scroll', function() {
        if (!ticking) {
            requestAnimationFrame(function() {
                updateHeader();
                ticking = false;
            });
            ticking = true;
        }
    }, { passive: true });

    window.addEventListener('resize', updateHeader);
    updateHeader(); // начальная проверка
});
