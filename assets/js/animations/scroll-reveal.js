/**
 * DANANG FOR LESS - SCROLL & MICRO-INTERACTION CONTROLLER
 * Smooth stagger reveal effects, scroll progress, sticky header, back-to-top, and micro-interactions
 */

document.addEventListener('DOMContentLoaded', () => {
  initScrollReveals();
  initScrollProgress();
  initHeaderScroll();
  initBackToTop();
  initHeartMicroInteractions();
});

function initScrollReveals() {
  const revealElements = document.querySelectorAll('.reveal-init, .reveal-left, .reveal-right, .reveal-scale');
  if (!revealElements.length) return;

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    root: null,
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));
}

function initScrollProgress() {
  const progressBar = document.getElementById('scroll-progress-bar');
  if (!progressBar) return;

  const updateProgress = () => {
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (scrollHeight <= 0) return;
    const progress = Math.min(Math.max((window.scrollY / scrollHeight) * 100, 0), 100);
    progressBar.style.width = progress + '%';
  };

  window.addEventListener('scroll', updateProgress, { passive: true });
  updateProgress();
}

function initHeaderScroll() {
  const header = document.querySelector('header');
  if (!header) return;

  const onScroll = () => {
    if (window.scrollY > 40) {
      header.classList.add('header-scrolled');
    } else {
      header.classList.remove('header-scrolled');
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

function initBackToTop() {
  const btn = document.getElementById('back-to-top-btn');
  if (!btn) return;

  const toggleBtn = () => {
    if (window.scrollY > 400) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  };

  window.addEventListener('scroll', toggleBtn, { passive: true });
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  toggleBtn();
}

function initHeartMicroInteractions() {
  document.addEventListener('click', (e) => {
    const wishlistBtn = e.target.closest('.btn-wishlist');
    if (!wishlistBtn) return;
    const icon = wishlistBtn.querySelector('i');
    if (icon) {
      icon.classList.remove('heart-pop');
      void icon.offsetWidth; // trigger reflow
      icon.classList.add('heart-pop');
    }
  });
}

