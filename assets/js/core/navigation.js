/**
 * DANANG FOR LESS - GLOBAL NAVIGATION CONTROLLER
 * Handles sticky glass header, mobile hamburger drawer, and language switcher
 */

document.addEventListener('DOMContentLoaded', () => {
  initStickyHeader();
  initMobileMenu();
  initLanguageSwitcher();
});

function initStickyHeader() {
  const header = document.querySelector('header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 40) {
      header.classList.add('bg-white/95', 'backdrop-blur-md', 'shadow-md', 'border-b', 'border-gray-200/80');
      header.classList.remove('bg-white/80', 'bg-transparent');
    } else {
      if (header.dataset.transparentHero === 'true') {
        header.classList.remove('bg-white/95', 'backdrop-blur-md', 'shadow-md', 'border-gray-200/80');
        header.classList.add('bg-white/90', 'backdrop-blur-md');
      }
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

function initMobileMenu() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const drawer = document.getElementById('mobile-drawer');
  const closeBtn = document.getElementById('mobile-close-btn');
  const overlay = document.getElementById('mobile-drawer-overlay');

  if (!menuBtn || !drawer) return;

  const openDrawer = () => {
    drawer.classList.remove('translate-x-full');
    drawer.classList.add('translate-x-0');
    if (overlay) overlay.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  };

  const closeDrawer = () => {
    drawer.classList.add('translate-x-full');
    drawer.classList.remove('translate-x-0');
    if (overlay) overlay.classList.add('hidden');
    document.body.style.overflow = '';
  };

  menuBtn.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  if (overlay) overlay.addEventListener('click', closeDrawer);
}

function initLanguageSwitcher() {
  const langPills = document.querySelectorAll('.lang-pill-switch');
  langPills.forEach(pill => {
    pill.addEventListener('click', (e) => {
      const target = e.target.closest('[data-lang]');
      if (!target) return;
      const lang = target.dataset.lang;
      if (window.dnI18n) {
        window.dnI18n.setLanguage(lang);
      }
    });
  });
}
