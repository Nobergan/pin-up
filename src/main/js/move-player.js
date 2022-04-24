let bg = document.querySelector('.hero__img');
window.addEventListener('mousemove', function (e) {
    let x = e.clientX / window.innerWidth;
    bg.style.transform = 'translate(+' + x * 100 + 'px)';

    const backdrop = document.querySelector('.backdrop');
    if (!backdrop.classList.contains('is-hidden')) {
        bg.style.transform = 'translate(-' + 0 + 'px)';
    }
});