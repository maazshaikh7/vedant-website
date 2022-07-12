const hamburgerMenu = document.querySelector('.hamburger-menu');
const lines = document.querySelectorAll('.line');

hamburgerMenu.addEventListener('click', (event) => {
  // Apply classes on click
  if (hamburgerMenu.classList.contains('open')) {
    hamburgerMenu.classList.remove('open');
    lines.forEach((line, i) => line.classList.remove(`line${i + 1}-open-menu`));
  } else {
    hamburgerMenu.classList.add('open');
    lines.forEach((line, i) => line.classList.add(`line${i + 1}-open-menu`));
  }
});
