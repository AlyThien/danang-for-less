/**
 * DANANG FOR LESS - GLOBAL NAVIGATION CONTROLLER
 * Handles sticky glass header, mobile hamburger drawer, language switcher,
 * and robust cross-page URL normalization across Vercel & local environments.
 */

if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    initStickyHeader();
    initMobileMenu();
    initLanguageSwitcher();
    initSmartNavigationLinks();
    updateActiveNavigationState();
  });
}

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

/**
 * Normalizes all navigation, drawer, footer, and brand links to root-relative paths
 * when running on HTTP/HTTPS web servers (such as Vercel or local preview server).
 * Preserves relative paths for local file:/// execution.
 */
function initSmartNavigationLinks() {
  const isHttp = window.location.protocol.startsWith('http');
  if (!isHttp) return;

  const links = document.querySelectorAll('header a, #mobile-drawer a, footer a, nav a, .breadcrumb a, a[data-i18n]');

  links.forEach(a => {
    const rawHref = a.getAttribute('href');
    if (!rawHref) return;

    // Ignore protocols, mail, tel, js, or internal hashes
    if (
      rawHref.startsWith('javascript:') ||
      rawHref.startsWith('mailto:') ||
      rawHref.startsWith('tel:') ||
      rawHref.startsWith('http://') ||
      rawHref.startsWith('https://') ||
      rawHref === '#'
    ) {
      return;
    }

    const i18n = a.getAttribute('data-i18n') || '';
    const hrefLower = rawHref.toLowerCase();
    const textLower = (a.textContent || '').trim().toLowerCase();
    const hasBeachIcon = !!a.querySelector('i.fa-umbrella-beach');

    // Home / Brand logo
    if (
      a.closest('.logo') ||
      hasBeachIcon ||
      hrefLower === '../../index.html' ||
      hrefLower === '../index.html' ||
      (hrefLower === 'index.html' && (textLower.includes('danang') || textLower.includes('home') || i18n === 'brand.name'))
    ) {
      a.setAttribute('href', '/');
      return;
    }

    // Tours navigation
    if (
      i18n === 'nav.tours' ||
      (hrefLower.includes('tours') && !hrefLower.includes('detail')) ||
      (hrefLower === 'index.html' && window.location.pathname.includes('/tours') && (textLower.includes('tour') || a.querySelector('.fa-compass')))
    ) {
      a.setAttribute('href', '/pages/tours/index.html');
      return;
    }

    // Stays / Hotels navigation
    if (
      i18n === 'nav.hotels' ||
      i18n === 'footer.homestays' ||
      (hrefLower.includes('stays') && !hrefLower.includes('detail')) ||
      (hrefLower === 'index.html' && window.location.pathname.includes('/stays') && (textLower.includes('hotel') || textLower.includes('stay') || a.querySelector('.fa-hotel')))
    ) {
      a.setAttribute('href', '/pages/stays/index.html');
      return;
    }

    // Tour Detail
    if (hrefLower.includes('tours/detail') || (hrefLower.includes('detail.html') && window.location.pathname.includes('/tours'))) {
      a.setAttribute('href', '/pages/tours/detail.html');
      return;
    }

    // Stay Detail
    if (hrefLower.includes('stays/detail') || (hrefLower.includes('detail.html') && window.location.pathname.includes('/stays'))) {
      a.setAttribute('href', '/pages/stays/detail.html');
      return;
    }

    // Guides page link
    if (i18n === 'nav.guides' || i18n === 'footer.travel_guide' || hrefLower.includes('guides') || hrefLower.includes('#travel-guide')) {
      a.setAttribute('href', '/pages/guides/index.html');
      return;
    }

    // Offers anchor link
    if (i18n === 'nav.offers' || hrefLower.includes('#secret-deals')) {
      a.setAttribute('href', '/#secret-deals');
      return;
    }

    // User Portal / Bookings
    if (i18n === 'nav.my_bookings' || hrefLower.includes('portal/user')) {
      a.setAttribute('href', '/pages/portal/user.html');
      return;
    }

    // Admin Portal
    if (i18n === 'nav.admin_dashboard' || hrefLower.includes('portal/admin')) {
      a.setAttribute('href', '/pages/portal/admin.html');
      return;
    }

    // Booking Checkout
    if (hrefLower.includes('booking/checkout')) {
      a.setAttribute('href', '/pages/booking/checkout.html');
      return;
    }

    // Booking Confirmation
    if (hrefLower.includes('booking/confirmation')) {
      a.setAttribute('href', '/pages/booking/confirmation.html');
      return;
    }

    // Auth Login
    if (hrefLower.includes('auth/login')) {
      a.setAttribute('href', '/pages/auth/login.html');
      return;
    }

    // Auth Register
    if (hrefLower.includes('auth/register')) {
      a.setAttribute('href', '/pages/auth/register.html');
      return;
    }
  });
}

/**
 * Highlights the active page tab on desktop header and mobile drawer.
 * Ensures the Home page does NOT falsely highlight Tours.
 */
function updateActiveNavigationState() {
  const path = window.location.pathname.toLowerCase();
  const isTours = path.includes('/tours') || path.endsWith('tours');
  const isStays = path.includes('/stays') || path.endsWith('stays');
  const isGuides = path.includes('/guides') || path.endsWith('guides');

  // Desktop header links
  const desktopLinks = document.querySelectorAll('header nav a');
  desktopLinks.forEach(a => {
    const i18n = a.getAttribute('data-i18n') || '';
    const href = (a.getAttribute('href') || '').toLowerCase();
    const isTourLink = i18n === 'nav.tours' || href.includes('tours');
    const isStayLink = i18n === 'nav.hotels' || href.includes('stays');
    const isGuideLink = i18n === 'nav.guides' || href.includes('guides');

    if (isTourLink) {
      if (isTours) {
        a.className = 'text-brand-crimson font-bold border-b-2 border-brand-crimson pb-1 flex items-center gap-1.5 transition';
      } else {
        a.className = 'text-gray-600 hover:text-brand-crimson flex items-center gap-1.5 transition font-semibold';
      }
    } else if (isStayLink) {
      if (isStays) {
        a.className = 'text-brand-crimson font-bold border-b-2 border-brand-crimson pb-1 flex items-center gap-1.5 transition';
      } else {
        a.className = 'text-gray-600 hover:text-brand-crimson flex items-center gap-1.5 transition font-semibold';
      }
    } else if (isGuideLink) {
      if (isGuides) {
        a.className = 'text-brand-crimson font-bold border-b-2 border-brand-crimson pb-1 flex items-center gap-1.5 transition';
      } else {
        a.className = 'text-gray-600 hover:text-brand-crimson flex items-center gap-1.5 transition font-semibold';
      }
    }
  });

  // Mobile drawer links
  const mobileLinks = document.querySelectorAll('#mobile-drawer nav a');
  mobileLinks.forEach(a => {
    const text = (a.textContent || '').toLowerCase();
    const isTourLink = text.includes('tour') || !!a.querySelector('.fa-compass');
    const isStayLink = text.includes('hotel') || text.includes('stay') || !!a.querySelector('.fa-hotel');
    const isGuideLink = text.includes('guide') || !!a.querySelector('.fa-map-location-dot');

    if (isTourLink) {
      if (isTours) {
        a.className = 'flex items-center gap-3 p-2 rounded-xl bg-red-50 text-brand-crimson font-bold';
      } else {
        a.className = 'flex items-center gap-3 p-2 rounded-xl hover:bg-red-50 hover:text-brand-crimson transition text-gray-700 font-semibold';
      }
    } else if (isStayLink) {
      if (isStays) {
        a.className = 'flex items-center gap-3 p-2 rounded-xl bg-red-50 text-brand-crimson font-bold';
      } else {
        a.className = 'flex items-center gap-3 p-2 rounded-xl hover:bg-red-50 hover:text-brand-crimson transition text-gray-700 font-semibold';
      }
    } else if (isGuideLink) {
      if (isGuides) {
        a.className = 'flex items-center gap-3 p-2 rounded-xl bg-red-50 text-brand-crimson font-bold';
      } else {
        a.className = 'flex items-center gap-3 p-2 rounded-xl hover:bg-red-50 hover:text-brand-crimson transition text-gray-700 font-semibold';
      }
    }
  });
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { initStickyHeader, initMobileMenu, initLanguageSwitcher, initSmartNavigationLinks, updateActiveNavigationState };
}
