document.addEventListener('DOMContentLoaded', function() {

    gsap.utils.toArray('.animated-text').forEach(text => {
        const originalText = text.textContent;
        ScrollTrigger.create({
            trigger: text,
            start: "top 95%",
            once: true,
            onEnter: () => {
                gsap.to(text, {
                    duration: 1.5,
                    scrambleText: {
                        text: originalText,
                        chars: "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
                        speed: 0.7,
                        rightToLeft: false,
                        randomChars: true
                    },
                });
            },

        });
    });
   

    gsap.utils.toArray('.scramble-text').forEach(element => {
      const originalText = element.textContent;
      
      element.addEventListener("mouseenter", () => {
        gsap.to(element, {
          duration: 0.8, 
          scrambleText: {
            text: originalText, 
            characters: "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789", 
            speed: 0.7,
            tweenLength: false, 
          },
          ease: "power1.out",
        });
      });
    });

    // В JS после загрузки DOM
gsap.utils.toArray('.text-reveal p').forEach(text => {
    const fill = document.createElement('span');
    fill.className = 'fill';
    fill.textContent = text.textContent;
    text.appendChild(fill);
    
    gsap.to(fill, {
      scrollTrigger: {
        trigger: text,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      },
      width: "100%",
      ease: "none"
    });
  });
});
