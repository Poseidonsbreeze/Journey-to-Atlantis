let slideIndex = 1;
let slideshowInterval;
let isPlaying = true;

function openSlideshow() {
    document.getElementById("slideshowModal").style.display = "block";
    showSlides(slideIndex);
    startSlideshow();
}

function closeSlideshow() {
    document.getElementById("slideshowModal").style.display = "none";
    stopSlideshow();
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    const slides = document.getElementsByClassName("mySlides");
    slideIndex = (n > slides.length) ? 1 : (n < 1) ? slides.length : n;

    Array.from(slides).forEach((slide, index) => {
        slide.style.display = (index === slideIndex - 1) ? "block" : "none";
    });
}

function startSlideshow() {
    if (isPlaying) {
        slideshowInterval = setInterval(() => plusSlides(1), 3000); // Change slide every 3 seconds
    }
}

function stopSlideshow() {
    clearInterval(slideshowInterval);
}

function toggleSlideshow() {
    isPlaying = !isPlaying; // Toggle play state
    const playPauseIcon = document.getElementById("playPauseBtn").getElementsByTagName('i')[0];
    
    if (isPlaying) {
        startSlideshow();
        playPauseIcon.className = "fas fa-pause"; // Change icon to pause
    } else {
        stopSlideshow();
        playPauseIcon.className = "fas fa-play"; // Change icon to play
    }
}
