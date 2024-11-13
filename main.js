function toggleNav() {
    var nav = document.getElementById('nav');
    if (nav.style.display === 'flex') {
        nav.style.display = 'none';
    } else {
        nav.style.display = 'flex';
    }
}

function toggleDetails(id) {
    var details = document.getElementById(id);
    if (details.style.display === "none" || details.style.display === "") {
        details.style.display = "block";
    } else {
        details.style.display = "none";
    }
}



$(document).ready(function() {
    $('.header').ripples({
        dropRadius: 15,
        perturbance: 0.1
    });
});




function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function toggleInputField() {
    var inputArea = document.getElementById("input-area");
    if (inputArea.classList.contains('visible')) {
        inputArea.classList.remove('visible');
        setTimeout(function() {
            inputArea.style.display = "none"; // Hide after animation
        }, 500); // Match this time with the CSS transition duration
    } else {
        inputArea.style.display = "block"; // Show immediately
        setTimeout(function() {
            inputArea.classList.add('visible'); // Start the animation
        }, 10); // Small delay to allow display to take effect
    }
}


window.onload = function() {
    const video = document.getElementById('myVideo');
    const playButton = document.querySelector('.play-button');
    const thumbnail = document.querySelector('.video-thumbnail');
    const loadingScreen = document.getElementById('loadingScreen');
    const mainContent = document.getElementById('mainContent');

    console.log('Video element:', video);
    console.log('Play button element:', playButton);

    // Check if video element is null
    if (!video) {
        console.error('Video element not found!');
        return;
    }

    // Function to hide the loading screen and show the main content
    function hideLoadingScreen() {
        // Forcefully hide the loading screen
        loadingScreen.style.display = 'none';
        // Show the main content
        mainContent.style.display = 'block';
    }

    // Simulate loading process
    setTimeout(hideLoadingScreen, 2000); // Adjust the time as needed

    // Add an event listener to the video to pause it when ended
    video.addEventListener('ended', () => {
        console.log('Video ended!');
        thumbnail.style.display = 'block';
        playButton.style.display = 'block';
        video.style.display = 'none';
    });

    // Add an event listener to the play button
    playButton.addEventListener('click', () => {
        console.log('Play button clicked!');
        thumbnail.style.display = 'none';
        video.style.display = 'block';
        playButton.style.display = 'none';
        video.play().catch(error => {
            console.error('Error playing video:', error);
        });
        console.log('Video playing...');
    });
};
