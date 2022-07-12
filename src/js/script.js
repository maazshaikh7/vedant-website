const hamburgerMenu = document.querySelector('.hamburger-menu');
const lines = document.querySelectorAll('.line');

hamburgerMenu.addEventListener('click', (event) => {
  const [line1, line2, line3] = lines;

  // Apply classes on click
  if (hamburgerMenu.classList.contains('open')) {
    hamburgerMenu.classList.remove('open');
    line1.classList.remove('line1-open-menu');
    line2.classList.remove('line2-open-menu');
    line3.classList.remove('line3-open-menu');
  } else {
    hamburgerMenu.classList.add('open');
    line1.classList.add('line1-open-menu');
    line2.classList.add('line2-open-menu');
    line3.classList.add('line3-open-menu');
  }
});
