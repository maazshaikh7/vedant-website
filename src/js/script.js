// Check what section is in viewport on page load and set active link class
window.onload = (event) => {
  sections.forEach((section, i) => {
    if (isInViewport(section)) {
      navLinks[i].classList.add('active--navlink');
    } else {
      navLinks[i].classList.remove('active--navlink');
    }
  });
};

// Cash DOM elements
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.navbar__link');
const sections = document.querySelectorAll('section');
const skillsBars = document.querySelectorAll('.skill__graph--bar');

// Cash navbar height as percent for scroll calculations
const navRect = navbar.getBoundingClientRect();
const navbarHeightPercent = Math.floor(
  (navRect.height / window.innerHeight) * 100
);

// Cash inner window height as a percent for scroll calculations
const windowHeight = 100;

/**
 * Checks if DOM element is within the viewport
 * @param {Object} element DOM element
 * @returns true/flase
 */
const isInViewport = (element) => {
  //
  // Get element positional stats
  const rect = element.getBoundingClientRect();

  // Convert elements top position to percentage
  const rectTopPercent =
    Math.floor((rect.top / window.innerHeight) * 100) - navbarHeightPercent;

  // Convert elements bottom position to percentage
  const rectBottomPercent =
    Math.floor((rect.bottom / window.innerHeight) * 100) - navbarHeightPercent;

  // If top element top + bottom are out of viewport return false
  return rectTopPercent <= 5 && rectBottomPercent >= 5;
};

// If website section in viewport apply/remove active link classes
window.addEventListener('scroll', (event) => {
  sections.forEach((section, i) => {
    if (isInViewport(section)) {
      //
      // Add active nav link class if section in window
      navLinks[i].classList.add('active--navlink');

      // Section 3 skills
      if (section.id === 'section--three') {
        skillsBars.forEach((bar) => {
          const skillLevel = bar.dataset.skillLevel;
          bar.style.width = `${skillLevel}%`;
          if (skillLevel >= 66) {
            bar.style.backgroundColor = '#39b54a';
          } else if (skillLevel > 33 && skillLevel < 66) {
            bar.style.backgroundColor = '#00b6af';
          } else {
            bar.style.backgroundColor = '#ef486e';
          }
        });
      }
    } else {
      //
      // Remove active nav link class if section in window
      navLinks[i].classList.remove('active--navlink');
    }
  });
});

// Skills graph
