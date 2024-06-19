// Lightbox functionality
function openLightbox(element) {
    document.getElementById('lightbox-img').src = element.src;
    document.getElementById('lightbox').style.display = "flex";
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = "none";
}

// Code for menu toggle functionality
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', function() {
    navLinks.classList.toggle('active');
});

// Ensure the lightbox is hidden on page load
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('lightbox').style.display = "none";
});