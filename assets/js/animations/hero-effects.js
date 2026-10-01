/**
 * DANANG FOR LESS - HERO EFFECTS & SEARCH INTERACTION
 * Handles interactive tabs, floating parallax, and counter animations
 */

document.addEventListener('DOMContentLoaded', () => {
  initSearchTabs();
  initCounters();
});

function initSearchTabs() {
  const tabs = document.querySelectorAll('[data-search-tab]');
  const destinationInput = document.getElementById('search-destination');
  const dateInput = document.getElementById('search-dates');
  const guestsInput = document.getElementById('search-guests');
  const searchBtn = document.getElementById('hero-search-btn');

  if (!tabs.length) return;

  let activeMode = 'tours';

  const updateTabContent = (mode) => {
    const t = (key, fallback) => (window.dnI18n ? window.dnI18n.t(key) : fallback);
    if (mode === 'tours') {
      if (destinationInput) destinationInput.placeholder = t('search.destination_placeholder', 'Bà Nà, Hội An, Sơn Trà...');
      if (dateInput) {
        dateInput.textContent = t('search.dates_tour_placeholder', 'Chọn ngày khởi hành');
        dateInput.removeAttribute('data-i18n');
      }
      if (guestsInput) {
        guestsInput.textContent = t('search.guests_tour_placeholder', '2 Người lớn · Tour ghép');
        guestsInput.removeAttribute('data-i18n');
      }
      if (searchBtn) searchBtn.setAttribute('data-target-url', 'pages/tours/index.html');
    } else if (mode === 'hotels') {
      if (destinationInput) destinationInput.placeholder = t('search.destination_hotel_placeholder', 'Bãi biển Mỹ Khê, Bán đảo Sơn Trà...');
      if (dateInput) {
        dateInput.textContent = t('search.dates_placeholder', 'Nhận phòng — Trả phòng');
        dateInput.removeAttribute('data-i18n');
      }
      if (guestsInput) {
        guestsInput.textContent = t('search.guests_placeholder', '2 Người lớn · 1 Phòng');
        guestsInput.removeAttribute('data-i18n');
      }
      if (searchBtn) searchBtn.setAttribute('data-target-url', 'pages/stays/index.html');
    } else {
      if (destinationInput) destinationInput.placeholder = t('search.destination_combo_placeholder', 'Combo Tour + Khách sạn tiết kiệm...');
      if (dateInput) {
        dateInput.textContent = t('search.dates_placeholder', 'Thời gian linh hoạt');
        dateInput.removeAttribute('data-i18n');
      }
      if (guestsInput) {
        guestsInput.textContent = t('search.guests_placeholder', '2 Người lớn');
        guestsInput.removeAttribute('data-i18n');
      }
      if (searchBtn) searchBtn.setAttribute('data-target-url', 'pages/tours/index.html');
    }
  };

  tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
      e.preventDefault();
      tabs.forEach(t => {
        t.classList.remove('bg-brand-crimson', 'text-white', 'shadow-md');
        t.classList.add('bg-white/80', 'text-gray-700');
      });

      tab.classList.remove('bg-white/80', 'text-gray-700');
      tab.classList.add('bg-brand-crimson', 'text-white', 'shadow-md');

      activeMode = tab.dataset.searchTab;
      updateTabContent(activeMode);
    });
  });

  window.addEventListener('dn:language-changed', () => {
    updateTabContent(activeMode);
  });

  if (searchBtn) {
    searchBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const url = searchBtn.getAttribute('data-target-url') || 'pages/tours/index.html';
      const currentPath = window.location.pathname;
      const isNested = currentPath.includes('/pages/');
      const query = destinationInput ? encodeURIComponent(destinationInput.value.trim()) : '';
      const target = (isNested ? '../../' + url : url) + (query ? `?q=${query}` : '');
      window.location.href = target;
    });
  }
}


function initCounters() {
  const counterElements = document.querySelectorAll('[data-counter]');
  if (!counterElements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const rawTarget = el.dataset.counter;
        const isDecimal = rawTarget.includes('.');
        const targetNum = isDecimal ? parseFloat(rawTarget) : parseInt(rawTarget, 10);
        const decimals = isDecimal ? (rawTarget.split('.')[1] || '').length : 0;
        const prefix = el.dataset.prefix || '';
        const suffix = el.dataset.suffix || '';
        const duration = 1800; // ms
        const startTime = performance.now();

        const updateCount = (currentTime) => {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          // Ease out cubic
          const easeProgress = 1 - Math.pow(1 - progress, 3);
          
          if (isDecimal) {
            const currentVal = (easeProgress * targetNum).toFixed(decimals);
            el.textContent = `${prefix}${currentVal}${suffix}`;
          } else {
            const currentVal = Math.floor(easeProgress * targetNum);
            el.textContent = `${prefix}${currentVal.toLocaleString()}${suffix}`;
          }

          if (progress < 1) {
            requestAnimationFrame(updateCount);
          } else {
            el.textContent = `${prefix}${isDecimal ? targetNum.toFixed(decimals) : targetNum.toLocaleString()}${suffix}`;
          }
        };

        requestAnimationFrame(updateCount);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.2 });

  counterElements.forEach(el => observer.observe(el));
}
