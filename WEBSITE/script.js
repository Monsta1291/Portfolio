document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.getElementById('menuButton');
    const nav = document.querySelector('nav');

    menuButton.addEventListener('click', function () {
        nav.classList.toggle('open');
    });

    // Example of modular function for reusable code
    function toggleVisibility(element) {
        element.classList.toggle('hidden');
    }

    // Add any additional interactive functionality here
});
