// Lightbox functionality
function openLightbox(element) {
    document.getElementById('lightbox-img').src = element.src;
    document.getElementById('lightbox').style.display = "flex";
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = "none";
}

// Code for menu toggle functionality
document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', function () {
        navLinks.classList.toggle('active');
    });
});


// Ensure the lightbox is hidden on page load
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('lightbox').style.display = "none";

    // Testimonial Carousel
    let testimonials = document.querySelectorAll('.testimonial');
    let currentIndex = 0;

    function showTestimonial(index) {
        testimonials.forEach((testimonial, i) => {
            testimonial.classList.remove('active');
            if (i === index) {
                testimonial.classList.add('active');
            }
        });
    }

    function nextTestimonial() {
        currentIndex = (currentIndex + 1) % testimonials.length;
        showTestimonial(currentIndex);
    }

    setInterval(nextTestimonial, 5000); // Change testimonial every 5 seconds
    showTestimonial(currentIndex);
});
