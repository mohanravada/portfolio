document.addEventListener('DOMContentLoaded', () => {
  const menuIcon = document.querySelector('.menu i');
  const navbar = document.querySelector('.navbar');

  if (menuIcon && navbar) {
    menuIcon.addEventListener('click', () => {
      navbar.classList.toggle('active');
    });
  }

  const linkedInIcon = document.querySelector('.fa-linkedin');
  linkedInIcon?.addEventListener('click', () => {
    window.open('https://www.linkedin.com/in/mohanravada?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', '_blank');
  });

  const hireBtn = document.querySelector('.btn.hire');
  const contactBtn = document.querySelector('.contact .btn');

  hireBtn?.addEventListener('click', () => {
    window.location.href = 'mailto:ravadamohan2005@gmail.com';
  });

  contactBtn?.addEventListener('click', () => {
    window.location.href = 'mailto:ravadamohan2005@gmail.com';
  });

  const themeToggle = document.getElementById('theme-icon');
  const body = document.body;

  if (themeToggle) {
    // Smooth transition on theme change
    body.classList.add('theme-transition');

    // Load saved theme
    if (localStorage.getItem('theme') === 'light') {
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

  // Swiper only if present
  if (document.querySelector(".certification-swiper")) {
    new Swiper(".certification-swiper", {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }
    });
  }
});
