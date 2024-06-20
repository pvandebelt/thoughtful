// Lightbox functionality
function openLightbox(element) {
    document.getElementById('lightbox-img').src = element.src;
    document.getElementById('lightbox').style.display = "flex";
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = "none";
}

// Responsive menu functionality
function toggleMenu() {
    var x = document.getElementById("myTopnav");
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const titleBar = document.getElementById('title-bar');
    let lastScrollTop = 0;

    window.addEventListener('scroll', function () {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop) {
            titleBar.classList.add('hidden');
        } else {
            titleBar.classList.remove('hidden');
        }
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
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
