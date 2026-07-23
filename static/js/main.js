// main.js — students will add JavaScript here as features are built

(function () {
    var trigger = document.getElementById('how-it-works-trigger');
    var overlay = document.getElementById('how-it-works-overlay');
    var closeBtn = document.getElementById('how-it-works-close');
    var iframe = document.getElementById('how-it-works-iframe');
    var videoUrl = 'https://www.youtube.com/embed/dQw4w9WgXcQ';

    if (!trigger || !overlay || !closeBtn || !iframe) return;

    function openModal() {
        iframe.src = videoUrl + '?autoplay=1';
        overlay.classList.add('is-open');
    }

    function closeModal() {
        overlay.classList.remove('is-open');
        iframe.src = '';
    }

    trigger.addEventListener('click', openModal);
    closeBtn.addEventListener('click', closeModal);
    overlay.addEventListener('click', function (event) {
        if (event.target === overlay) closeModal();
    });
})();
