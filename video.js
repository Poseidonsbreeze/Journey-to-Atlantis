  // Get the video and play button elements
  const video = document.getElementById('myVideo');
  const playButton = document.querySelector('.play-button');
  const thumbnail = document.querySelector('.video-thumbnail');
  
  console.log('Video element:', video);
  console.log('Play button element:', playButton);
  
  window.onload = function() {
      console.log('Window loaded');
  
      // Check if video element is null
      if (!video) {
          console.error('Video element not found!');
          return;
      }
  
      // Add an event listener to the video to pause it when ended
      video.addEventListener('ended', () => {
          console.log('Video ended!');
          // Show the thumbnail image
          thumbnail.style.display = 'block';
          // Show the play button
          playButton.style.display = 'block';
          // Hide the video
          video.style.display = 'none';
      });
  
      // Add an event listener to the play button
      playButton.addEventListener('click', () => {
          console.log('Play button clicked!');
          // Hide the thumbnail image
          thumbnail.style.display = 'none';
          // Show the video
          video.style.display = 'block';
          // Hide the play button
          playButton.style.display = 'none';
          // Play the video
          video.play().catch(error => {
              console.error('Error playing video:', error);
          });
          console.log('Video playing...');
      });
  };
  