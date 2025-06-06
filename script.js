document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section');

  // Make last section visible right away
  if (sections.length) {
    sections[sections.length - 1].classList.add('visible');
  }

  function checkSections() {
    const triggerBottom = window.innerHeight * 0.8;

    sections.forEach(section => {
      const rect = section.getBoundingClientRect();

      if (rect.top < triggerBottom) {
        section.classList.add('visible');
      } else {
        section.classList.remove('visible');
      }
    });
  }

  window.addEventListener('scroll', checkSections);
  window.addEventListener('resize', checkSections);
  checkSections(); // initial check on load
  
});
