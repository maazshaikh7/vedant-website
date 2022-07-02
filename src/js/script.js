const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.navbar__link');
const sections = document.querySelectorAll('section');

const navRect = navbar.getBoundingClientRect();
const navHeight = navRect.height;

const isInViewport = (element) => {
  const rect = element.getBoundingClientRect();
  const rectTop = rect.top - navHeight;
  const rectBottom = rect.bottom - navHeight / 2;

  return rectTop >= -window.innerHeight / 2 && rectBottom <= window.innerHeight;
};

window.addEventListener('scroll', (event) => {
  sections.forEach((section, i) => {
    console.log(`${section.id}`, isInViewport(section));
    if (isInViewport(section)) {
      navLinks[i].classList.add('active--navlink');
    } else {
      navLinks[i].classList.remove('active--navlink');
    }
  });
});
