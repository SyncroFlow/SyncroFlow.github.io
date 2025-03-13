function showSection(sectionId) {
    let section = document.getElementById(sectionId);
    if (!section) return;
    document.querySelectorAll('section').forEach(sec => {
        sec.classList.remove('active');
        sec.style.display = 'none';
    });
    section.classList.add('active');
    section.style.display = 'block';
    const menu = document.querySelector('.menu');
    menu.classList.remove('active');
}

function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active');
}

document.addEventListener("DOMContentLoaded", function() {
    showSection('about'); // Asegura que la primera sección visible sea "Sobre Mí"
});
