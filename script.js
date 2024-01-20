document.addEventListener('DOMContentLoaded', function () {
    let currentIndex = 0;
    const images = document.querySelectorAll('.home-background img'); // Get all the images
    const imageCount = images.length;
    const rotationInterval = 5000; // Time each image is displayed, in milliseconds

    // Function to rotate images
    function rotateImages() {
        images[currentIndex].classList.remove('active'); // Remove active class from current image
        currentIndex = (currentIndex + 1) % imageCount; // Move to next image, loop back after last image
        images[currentIndex].classList.add('active'); // Add active class to new current image
    }

    // Start the rotation
    setInterval(rotateImages, rotationInterval);
});