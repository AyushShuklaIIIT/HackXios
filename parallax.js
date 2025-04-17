document.addEventListener('DOMContentLoaded', function() {
    const stickyContainer = document.querySelector('.sticky-container');
    const scrollImages = document.querySelectorAll('.scroll-image');
    
    // Calculate when to show each image
    function updateAnimation() {
        const containerRect = stickyContainer.getBoundingClientRect();
        const containerTop = containerRect.top;
        const containerHeight = containerRect.height;
        const windowHeight = window.innerHeight;
        
        // How far we've scrolled through the container (0 to 1)
        const scrollProgress = Math.min(1, Math.max(0, 
            (-containerTop) / (containerHeight - windowHeight)
        ));
        
        // Show images at different scroll points
        scrollImages.forEach((img, index) => {
            const showAt = (index + 0.5) * 0.3; // Adjust timing here
            if (scrollProgress > showAt - 0.15 && scrollProgress < showAt + 0.15) {
                img.style.opacity = 1;
                img.style.transform = `translateX(-50%) translateY(${index * 5}px)`;
            } else if (scrollProgress > showAt + 0.15) {
                img.style.opacity = 0;
                img.style.transform = `translateX(-50%) translateY(${index * 20}px)`;
            } else {
                img.style.opacity = 0;
            }
        });
    }
    
    // Run on scroll and initially
    window.addEventListener('scroll', updateAnimation);
    updateAnimation();
  });