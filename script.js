document.addEventListener('DOMContentLoaded', function() {
  // Add hover effect to headline letters
  const headlineLetters = document.querySelectorAll('.defcon-headline-letter');
  headlineLetters.forEach(letter => {
    letter.addEventListener('mouseenter', function() {
      this.style.animation = 'defcon-letter-bounce 0.5s ease';
      this.style.color = '#0091ff';
      
      setTimeout(() => {
        this.style.animation = '';
      }, 500);
    });
    
    letter.addEventListener('mouseleave', function() {
      this.style.color = '#06273e';
    });
  });

  // Add hover effect to CTA button particles
  const ctaButton = document.querySelector('.defcon-cta-button');
  if (ctaButton) {
    ctaButton.addEventListener('mouseenter', function() {
      const particles = this.querySelector('.defcon-cta-particles');
      if (particles) {
        particles.innerHTML = '';
        
        for (let i = 0; i < 20; i++) {
          const particle = document.createElement('span');
          particle.style.position = 'absolute';
          particle.style.width = '4px';
          particle.style.height = '4px';
          particle.style.backgroundColor = '#ffffff';
          particle.style.borderRadius = '50%';
          particle.style.left = Math.random() * 100 + '%';
          particle.style.top = Math.random() * 100 + '%';
          particle.style.opacity = '0.8';
          particle.style.transform = 'scale(0)';
          particle.style.transition = 'all 0.5s ease-out';
          
          particles.appendChild(particle);
          
          setTimeout(() => {
            particle.style.transform = 'scale(1) translate(' + 
              (Math.random() * 100 - 50) + 'px, ' + 
              (Math.random() * 100 - 50) + 'px)';
            particle.style.opacity = '0';
          }, 10);
        }
      }
    });
  }

  // Add scroll effect to background text
  window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const bgTexts = document.querySelectorAll('.defcon-bg-text');
    
    bgTexts.forEach((text, index) => {
      const speed = 0.2 + (index * 0.05);
      const offset = scrollPosition * speed;
      text.style.transform = `translateY(${offset}px) rotate(${offset}deg)`;
    });
  });

  // Add morphing text effect
  const morphingTexts = document.querySelectorAll('.defcon-morphing-text');
  let currentIndex = 0;
  
  function cycleMorphingText() {
    morphingTexts.forEach((text, index) => {
      text.style.opacity = index === currentIndex ? '1' : '0';
      text.style.transform = index === currentIndex ? 'translateY(0)' : 'translateY(20px)';
    });
    
    currentIndex = (currentIndex + 1) % morphingTexts.length;
  }
  
  // Start the cycle
  setInterval(cycleMorphingText, 3000);
  
  // Initial call to show first text immediately
  cycleMorphingText();
});

// Add CSS for letter bounce animation
const style = document.createElement('style');
style.textContent = `
  @keyframes defcon-letter-bounce {
    0% { transform: translateY(0); }
    50% { transform: translateY(-15px); }
    100% { transform: translateY(0); }
  }
`;
document.head.appendChild(style);