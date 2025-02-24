document.addEventListener("DOMContentLoaded", function () {
    console.log("Script chargé et exécuté"); // Vérifie que le script est bien pris en compte

    // ✅ Smooth scroll pour la navigation
    document.querySelectorAll('nav .nav-principale ul li a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1); // Récupère l'ID cible
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 60, // Ajustement pour la hauteur du header
                    behavior: 'smooth'
                });
            }
        });
    });

    // ✅ Animation de l'apparition des sections
    const sections = document.querySelectorAll('section');

    function revealSections() {
        const windowHeight = window.innerHeight;

        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const sectionBottom = section.getBoundingClientRect().bottom;

            if (sectionTop < windowHeight - 100 && sectionBottom > 0) {
                section.classList.add('visible');
            } else {
                section.classList.remove('visible');
            }
        });
    }

    window.addEventListener('scroll', () => {
        requestAnimationFrame(revealSections);
    });

    // Appelle revealSections au chargement de la page
    revealSections();

    // ✅ Affichage des images dans la section Portfolio au clic sur "Voir le projet"
    const buttons = document.querySelectorAll(".portfolio-item .btn");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const portfolioItem = this.closest(".portfolio-item");

            if (portfolioItem) {
                const imageContainer = portfolioItem.querySelector(".image-container");

                if (imageContainer) {
                    // Toggle de l'affichage
                    imageContainer.style.display = (imageContainer.style.display === "none" || imageContainer.style.display === "") ? "block" : "none";
                }
            }
        });
    });
});
