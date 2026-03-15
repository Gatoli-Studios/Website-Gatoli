// ANIMATIONS IN SCROLL
function handleScrollAnimations() {
  const elements = document.querySelectorAll('.animate-on-scroll');
  const triggerBottom = window.innerHeight * 0.85;

  elements.forEach(el => {
    const elTop = el.getBoundingClientRect().top;

    if (elTop < triggerBottom) {
      el.classList.add('active');
    }
  });
}

// SCROLL & INITIAL CHARGE
window.addEventListener('scroll', handleScrollAnimations);
window.addEventListener('load', handleScrollAnimations);