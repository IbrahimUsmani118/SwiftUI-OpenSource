// animations.js

// Function to check if an element is in the viewport
function isElementInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to animate elements
function animateElements() {
  const fadeInElements = document.querySelectorAll('.fade-in');
  const slideInElements = document.querySelectorAll('.slide-in');

  fadeInElements.forEach(element => {
    if (isElementInViewport(element)) {
      element.classList.add('visible');
    }
  });

  slideInElements.forEach(element => {
    if (isElementInViewport(element)) {
      element.classList.add('visible');
    }
  });
}

// Call the animateElements function on page load and scroll
window.addEventListener('load', animateElements);
window.addEventListener('scroll', animateElements);
