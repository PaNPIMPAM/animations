
document.addEventListener('DOMContentLoaded', () => {
    const lines = document.querySelectorAll('.line');
    
    lines.forEach(line => {
      const text = line.textContent;
      line.innerHTML = `
        <span class="base">${text}</span>
        <span class="highlight">${text}</span>
      `;
    });
  

    lines.forEach((line, index) => {
      gsap.to(line.querySelector('.highlight'), {
        scrollTrigger: {
          trigger: line,
          start: "top 80%",
          scrub: true,
        },
        width: "100%",
        ease: "none"
      });
    });
  });
  