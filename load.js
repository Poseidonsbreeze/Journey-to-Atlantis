 // Function to hide the loading screen and show the main content
 function hideLoadingScreen() {
    const loadingScreen = document.getElementById('loadingScreen');
    const mainContent = document.getElementById('mainContent');

    // Forcefully hide the loading screen
    loadingScreen.style.display = 'none';
    // Show the main content
    mainContent.style.display = 'block';
}

// Simulate loading process
window.onload = function() {
    // Use a timeout to simulate loading time
    setTimeout(hideLoadingScreen, 2000); // Adjust the time as needed
};