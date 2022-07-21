const navLinkContainer = document.querySelector('.nav-link-container');
const navlinks = document.querySelectorAll('.nav-link-container > a');
const hamburgerMenu = document.querySelector('.hamburger-menu');
const lines = document.querySelectorAll('.line');
const projectLinks = document.querySelectorAll('#project-external-link');

hamburgerMenu.addEventListener('click', (event) => {
  // Apply classes on click
  if (hamburgerMenu.classList.contains('open')) {
    navLinkContainer.style.cssText = 'height: 0; margin: 0;';
    hamburgerMenu.classList.remove('open');
    lines.forEach((line, i) => line.classList.remove(`line${i + 1}-open-menu`));
  } else {
    navLinkContainer.style.cssText = 'height: 20rem; margin: 1rem 0 0 0;';
    hamburgerMenu.classList.add('open');
    lines.forEach((line, i) => line.classList.add(`line${i + 1}-open-menu`));
  }
});

navlinks.forEach((link) =>
  link.addEventListener('click', () => {
    if (window.innerWidth < 768) {
      navLinkContainer.style.cssText = 'height: 0; margin: 0;';
      hamburgerMenu.classList.remove('open');
      lines.forEach((line, i) =>
        line.classList.remove(`line${i + 1}-open-menu`)
      );
    }
  })
);

projectLinks.forEach((link) =>
  link.addEventListener('click', (e) => {
    alert('Project Demo Coming Soon!');
  })
);
