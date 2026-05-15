const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

function setActiveNav() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  navLinks.forEach((link) => {
    const targetPage = link.getAttribute('href').split('/').pop() || 'index.html';
    if (targetPage === currentPage || (targetPage === 'index.html' && currentPage === '')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

navToggle?.addEventListener('click', () => {
  navMenu?.classList.toggle('open');
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    if (navMenu?.classList.contains('open')) {
      navMenu.classList.remove('open');
    }
  });
});

window.addEventListener('DOMContentLoaded', () => {
  setActiveNav();
});

const scrollLinks = document.querySelectorAll('a[href^="#"]');
scrollLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    const anchor = link.getAttribute('href');
    const target = document.querySelector(anchor);
    if (target) {
      event.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
