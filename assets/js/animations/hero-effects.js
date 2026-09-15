/**
 * DANANG FOR LESS - HERO EFFECTS & SEARCH INTERACTION
 * Handles interactive tabs, floating parallax, and counter animations
 */

document.addEventListener('DOMContentLoaded', () => {
  initSearchTabs();
  initParallaxTilt();
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
    const isVn = (window.dnI18n && window.dnI18n.currentLang === 'vn');
    if (mode === 'tours') {
      if (destinationInput) destinationInput.placeholder = isVn ? 'Bà Nà, Hội An, Sơn Trà...' : 'Where are you going?';
      if (dateInput) {
        dateInput.textContent = isVn ? 'Chọn ngày khởi hành' : 'Select Departure Date';
        dateInput.removeAttribute('data-i18n');
      }
      if (guestsInput) {
        guestsInput.textContent = isVn ? '2 Người lớn · Tour ghép' : '2 adults · Group Tour';
        guestsInput.removeAttribute('data-i18n');
      }
      if (searchBtn) searchBtn.setAttribute('data-target-url', 'pages/tours/index.html');
    } else if (mode === 'hotels') {
      if (destinationInput) destinationInput.placeholder = isVn ? 'Bãi biển Mỹ Khê, Bán đảo Sơn Trà...' : 'My Khe Beach, Son Tra Peninsula...';
      if (dateInput) {
        dateInput.textContent = isVn ? 'Nhận phòng — Trả phòng' : 'Check-in — Check-out';
        dateInput.removeAttribute('data-i18n');
      }
      if (guestsInput) {
        guestsInput.textContent = isVn ? '2 Người lớn · 1 Phòng' : '2 adults · 1 room';
        guestsInput.removeAttribute('data-i18n');
      }
      if (searchBtn) searchBtn.setAttribute('data-target-url', 'pages/stays/index.html');
    } else {
      if (destinationInput) destinationInput.placeholder = isVn ? 'Combo Tour + Khách sạn tiết kiệm...' : 'Special Tour + Hotel Combos...';
      if (dateInput) {
        dateInput.textContent = isVn ? 'Thời gian linh hoạt' : 'Flexible Dates';
        dateInput.removeAttribute('data-i18n');
      }
      if (guestsInput) {
        guestsInput.textContent = isVn ? '2 Người lớn' : '2 Adults';
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

function initParallaxTilt() {
  const heroCard = document.querySelector('.hero-tilt-card');
  if (!heroCard) return;

  heroCard.addEventListener('mousemove', (e) => {
    const rect = heroCard.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    const rotateX = -(y / rect.height) * 8;
    const rotateY = (x / rect.width) * 8;

    heroCard.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  heroCard.addEventListener('mouseleave', () => {
    heroCard.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
  });
}

function initCounters() {
  const counterElements = document.querySelectorAll('[data-counter]');
  if (!counterElements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const targetNum = parseInt(el.dataset.counter, 10);
        const prefix = el.dataset.prefix || '';
        const suffix = el.dataset.suffix || '';
        const duration = 1800; // ms
        const startTime = performance.now();

        const updateCount = (currentTime) => {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          // Ease out cubic
          const easeProgress = 1 - Math.pow(1 - progress, 3);
          const currentVal = Math.floor(easeProgress * targetNum);
          
          el.textContent = `${prefix}${currentVal.toLocaleString()}${suffix}`;

          if (progress < 1) {
            requestAnimationFrame(updateCount);
          } else {
            el.textContent = `${prefix}${targetNum.toLocaleString()}${suffix}`;
          }
        };

        requestAnimationFrame(updateCount);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.2 });

  counterElements.forEach(el => observer.observe(el));
}
