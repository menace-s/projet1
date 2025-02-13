// Animation du texte d'accueil avec effet de typing
document.addEventListener('DOMContentLoaded', function() {
    const text = "Je suis Aganh Kola Jean Philippe. Je vous invite à découvrir mon parcours et ma passion. Bonne exploration !";
    const accueilP = document.querySelector('.accueil-title p');
    accueilP.textContent = '';
    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            accueilP.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        }
    }

    typeWriter();
});

// Animation des cards au scroll
const cards = document.querySelectorAll('.ag-courses_item');
const animateCards = () => {
    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        const triggerBottom = window.innerHeight * 0.8;

        if (cardTop < triggerBottom) {
            card.style.transform = 'translateX(0)';
            card.style.opacity = '1';
        }
    });
};

// Style initial des cards
cards.forEach(card => {
    card.style.transform = 'translateX(-100px)';
    card.style.opacity = '0';
    card.style.transition = 'all 0.5s ease';
});

window.addEventListener('scroll', animateCards);

// Animation des SVG au survol
const svgs = document.querySelectorAll('.svg-1, .svg-2');
svgs.forEach(svg => {
    svg.addEventListener('mouseover', () => {
        svg.style.transform = 'rotate(180deg)';
    });
    svg.addEventListener('mouseout', () => {
        svg.style.transform = 'rotate(0deg)';
    });
});