// Make sure DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.querySelector('.menu i');
    const navbar = document.querySelector('.navbar');
  
    menuIcon.addEventListener('click', () => {
      navbar.classList.toggle('active');
    });
  
    // Optional: handle LinkedIn icon click
    const linkedInIcon = document.querySelector('.fa-linkedin');
    if (linkedInIcon) {
      linkedInIcon.addEventListener('click', () => {
        window.open('https://www.linkedin.com/in/YOUR-LINKEDIN-USERNAME', '_blank');
      });
    }
  
    // Mail button handlers
    const hireBtn = document.querySelector('.btn.hire');
    const contactBtn = document.querySelector('.contact .btn');
  
    hireBtn?.addEventListener('click', () => {
      window.location.href = 'mailto:ravadamohan2005@gmail.com';
    });
  
    contactBtn?.addEventListener('click', () => {
      window.location.href = 'mailto:ravadamohan2005@gmail.com';
    });
  });
  