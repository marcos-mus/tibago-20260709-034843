// Mobile menu toggle
const menuToggle = document.querySelector('.mobile-menu-toggle');
const mobileNav = document.getElementById('mobile-menu');
if (menuToggle && mobileNav) {
  menuToggle.addEventListener('click', function () {
    const isOpen = mobileNav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });
  // Close menu on link click
  mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileNav.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href').slice(1);
    const target = document.getElementById(targetId);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Insert current year in footer
document.addEventListener('DOMContentLoaded', function () {
  const yearSpan = document.getElementById('current-year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});

// Contact form validation and fake submission
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const status = document.getElementById('form-status');
    const name = contactForm.name.value.trim();
    const email = contactForm.email.value.trim();
    const message = contactForm.message.value.trim();
    status.textContent = '';
    status.className = 'form-status';

    // Simple validation
    if (!name || !email || !message) {
      status.textContent = 'Please fill in all required fields.';
      status.classList.add('error');
      return;
    }
    // Email format check
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      status.textContent = 'Please enter a valid email address.';
      status.classList.add('error');
      return;
    }
    // Simulate sending
    status.textContent = 'Sending...';
    setTimeout(() => {
      status.textContent = 'Thank you! Your message has been sent.';
      status.classList.remove('error');
      status.classList.add('success');
      contactForm.reset();
    }, 1200);
  });
}