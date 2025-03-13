function toggleMenu() {
    const menu = document.querySelector('.menu');
    const menuToggle = document.querySelector('.menu-toggle');
    const isMobileView = window.innerWidth <= 600;

    if (isMobileView) {
        menu.classList.toggle('active');
        if (menu.classList.contains('active')) {
            menuToggle.style.display = 'none';
        } else {
            menuToggle.style.display = 'block';
        }
    }
}

function showSection(sectionId) {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
    const menu = document.querySelector('.menu');
    const menuToggle = document.querySelector('.menu-toggle');
    const isMobileView = window.innerWidth <= 600;

    if (isMobileView) {
        menu.classList.remove('active');
        menuToggle.style.display = 'block';
    }
}

document.addEventListener("DOMContentLoaded", function() {
    showSection('about'); // Asegura que la primera sección visible sea "Sobre Mí"
});
