document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu
  const menuIcon = document.querySelector('.menu i');
  const navbar = document.querySelector('.navbar');

  const closeMenu = () => {
    navbar.classList.remove('active');
    if (menuIcon) {
      menuIcon.classList.add('fa-bars');
      menuIcon.classList.remove('fa-times');
    }
  };

  if (menuIcon && navbar) {
    menuIcon.addEventListener('click', () => {
      navbar.classList.toggle('active');
      menuIcon.classList.toggle('fa-bars');
      menuIcon.classList.toggle('fa-times');
    });

    // Auto-close on link click (mobile UX)
    navbar.querySelectorAll('a').forEach(a =>
      a.addEventListener('click', () => closeMenu())
    );
  }

  // Theme toggle with persistence
  const themeToggle = document.getElementById('theme-icon');
  const body = document.body;

  if (themeToggle) {
    body.classList.add('theme-transition');

    const saved = localStorage.getItem('theme');
    if (saved === 'light') {
      body.classList.add('light-mode');
      themeToggle.classList.replace('fa-moon', 'fa-sun');
    }

    themeToggle.addEventListener('click', () => {
      body.classList.toggle('light-mode');
      const isLight = body.classList.contains('light-mode');

      themeToggle.classList.toggle('fa-moon', !isLight);
      themeToggle.classList.toggle('fa-sun', isLight);

      localStorage.setItem('theme', isLight ? 'light' : 'dark');
    });
  }

  // Swiper (Certifications)
  if (document.querySelector('.certification-swiper')) {
    new Swiper('.certification-swiper', {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      pagination: { el: '.swiper-pagination', clickable: true },
      navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
      breakpoints: {
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 }
      }
    });
  }

  // AOS
  if (window.AOS) {
    AOS.init({ duration: 700, once: true });
  }
});

