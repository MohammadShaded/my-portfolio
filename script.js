document.addEventListener('DOMContentLoaded', function () {
    // Typing animation for hero section
    if (document.getElementById('typed-text')) {
        new Typed('#typed-text', {
            strings: ['Frontend Developer', 'Computer Engineer', 'Mobile Developer'],
            typeSpeed: 70,
            backSpeed: 40,
            backDelay: 1500,
            loop: true,
            smartBackspace: true,
        });
    }

    // Subtle parallax effect on hero section
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.addEventListener('mousemove', function (e) {
            const { clientX, clientY } = e;
            const { offsetWidth, offsetHeight } = hero;
            const xPos = (clientX / offsetWidth - 0.5) * 30; // Multiplier controls intensity
            const yPos = (clientY / offsetHeight - 0.5) * 30;

            const avatar = document.querySelector('.avatar-wrapper');
            const heroContent = document.querySelector('.hero-content');
            const floatingLogo = document.querySelector('.floating-logo-container');

            if (avatar) {
                avatar.style.transform = `translate(${xPos * 0.3}px, ${yPos * 0.3}px)`;
            }
            if (heroContent) {
                heroContent.style.transform = `translate(${xPos * -0.2}px, ${yPos * -0.2}px)`;
            }
            if (floatingLogo) {
                floatingLogo.style.transform = `translate(${xPos * 0.5}px, ${yPos * 0.5}px)`;
            }
        });
    }
});
