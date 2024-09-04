document.addEventListener("DOMContentLoaded", function () {
    const track = document.querySelector('.carousel-track');
    const images = document.querySelectorAll('.pic');
    let imageWidth = images[0].offsetWidth + 10; // Image width plus gap
    let currentIndex = 0;
    let isDragging = false; // Flag to track if the user is swiping
    let startX; // Starting X position for swipe
    let autoSlideInterval; // Interval for auto-sliding (only for larger screens)
    
    const isSmallScreen = window.innerWidth <= 600; // Determine if the screen is 600px or below
  
    // Duplicate images to create a seamless loop effect
    const totalImages = images.length;
    for (let i = 0; i < totalImages; i++) {
      const clone = images[i].cloneNode(true);
      track.appendChild(clone);
    }
  
    // Adjust track width dynamically to accommodate all images
    track.style.width = `${images.length * imageWidth * 2}px`;
  
    function moveCarousel() {
      // Calculate the new transform value
      const newTransformValue = -currentIndex * imageWidth;
  
      // Apply the transform to slide the images
      track.style.transform = `translateX(${newTransformValue}px)`;
  
      // Loop back to the first set of images seamlessly for larger screens
      if (currentIndex === totalImages) {
        setTimeout(() => {
          track.style.transition = 'none'; // Temporarily disable transition
          currentIndex = 0; // Reset index to the start
          track.style.transform = `translateX(0px)`; // Jump back to start
          track.offsetHeight; // Force a reflow
          track.style.transition = 'transform 1s linear'; // Re-enable transition
        }, 1000); // Wait 1 second for the current transition to finish
      }
    }
  
    // Auto slide for larger screens
    if (!isSmallScreen) {
      autoSlideInterval = setInterval(() => {
        currentIndex++;
        moveCarousel();
      }, 3000); // Change image every 3 seconds
    }
  
    // Event Listeners for touch/swipe events for manual slider on small screens
    if (isSmallScreen) {
      track.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX; // Get the initial touch position
        isDragging = true; // Set dragging flag to true
      });
  
      track.addEventListener('touchmove', (e) => {
        if (!isDragging) return; // If not dragging, do nothing
  
        const touch = e.touches[0];
        const moveX = touch.clientX - startX; // Calculate the movement distance
  
        // Swipe left
        if (moveX < -50) {
          nextImage();
          isDragging = false; // Reset dragging flag
        }
  
        // Swipe right
        if (moveX > 50) {
          previousImage();
          isDragging = false; // Reset dragging flag
        }
      });
  
      track.addEventListener('touchend', () => {
        isDragging = false; // Reset dragging flag
      });
    }
  
    function nextImage() {
      if (currentIndex < totalImages - 1) {
        currentIndex++;
      } else {
        currentIndex = 0;
      }
      moveCarousel();
    }
  
    function previousImage() {
      if (currentIndex > 0) {
        currentIndex--;
      } else {
        currentIndex = totalImages - 1;
      }
      moveCarousel();
    }
  
    // Recalculate imageWidth on window resize (to adjust for responsive changes)
    window.addEventListener('resize', () => {
      imageWidth = images[0].offsetWidth + 10; // Width of image plus gap
      clearInterval(autoSlideInterval); // Clear existing interval if any
      const isSmallScreen = window.innerWidth <= 600; // Check again for small screen
  
      if (!isSmallScreen) {
        // Restart auto-slide on larger screens
        autoSlideInterval = setInterval(() => {
          currentIndex++;
          moveCarousel();
        }, 3000); // Change image every 3 seconds
      }
    });
  });
  