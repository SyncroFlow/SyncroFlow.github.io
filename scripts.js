function showSection(sectionId) {
    let section = document.getElementById(sectionId);
    if (!section) return;
    document.querySelectorAll('section').forEach(sec => {
        sec.classList.remove('active');
        sec.style.display = 'none';
    });
    section.classList.add('active');
    section.style.display = 'block';
}

document.addEventListener("DOMContentLoaded", function() {
    showSection('about'); // Asegura que la primera sección visible sea "Sobre Mí"
});