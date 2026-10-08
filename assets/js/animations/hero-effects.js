/**
 * DANANG FOR LESS - HERO EFFECTS & SEARCH INTERACTION
 * Handles interactive tabs, floating parallax, and counter animations
 */

document.addEventListener('DOMContentLoaded', () => {
  initHeroSlider();
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

/**
 * Hero Background Image Slider (Smooth, Automatic Slide Transition)
 * Rotates between the uploaded Da Nang highlights with tactile dots & swipe
 */
function initHeroSlider() {
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.hero-slider-dot');
  const captionEl = document.getElementById('hero-slide-caption');
  const prevBtn = document.getElementById('hero-slider-prev');
  const nextBtn = document.getElementById('hero-slider-next');
  const heroSection = document.getElementById('hero-section');

  if (slides.length <= 1) return;

  let currentIndex = 0;
  let isTransitioning = false;
  let autoplayTimer = null;
  const slideDuration = 5500; // 5.5s per image

  function updateDotsAndCaption(index) {
    dots.forEach((dot, idx) => {
      if (idx === index) {
        dot.classList.add('w-7', 'bg-white');
        dot.classList.remove('w-2', 'bg-white/50');
      } else {
        dot.classList.remove('w-7', 'bg-white');
        dot.classList.add('w-2', 'bg-white/50');
      }
    });

    if (captionEl && slides[index]) {
      const caption = slides[index].getAttribute('data-caption') || '';
      captionEl.style.opacity = '0';
      setTimeout(() => {
        captionEl.textContent = caption;
        captionEl.style.opacity = '1';
      }, 200);
    }
  }

  function goToSlide(nextIndex, direction = 'next') {
    if (isTransitioning || nextIndex === currentIndex) return;
    isTransitioning = true;

    const currentSlide = slides[currentIndex];
    const targetSlide = slides[nextIndex];

    // Position target slide offstage in the appropriate direction
    targetSlide.style.transition = 'none';
    targetSlide.style.transform = direction === 'next' ? 'translateX(100%)' : 'translateX(-100%)';
    targetSlide.style.opacity = '0';
    void targetSlide.offsetWidth; // Force reflow

    // Re-enable smooth transition
    targetSlide.style.transition = '';
    currentSlide.style.transition = '';

    // Animate current out
    currentSlide.classList.remove('is-active');
    currentSlide.classList.add('is-leaving');
    currentSlide.style.transform = direction === 'next' ? 'translateX(-100%)' : 'translateX(100%)';
    currentSlide.style.opacity = '0';

    // Animate target in
    targetSlide.classList.add('is-active');
    targetSlide.classList.remove('is-leaving');
    targetSlide.style.transform = 'translateX(0)';
    targetSlide.style.opacity = '1';

    currentIndex = nextIndex;
    updateDotsAndCaption(currentIndex);

    setTimeout(() => {
      currentSlide.classList.remove('is-leaving');
      currentSlide.style.transition = 'none';
      currentSlide.style.transform = 'translateX(100%)';
      currentSlide.style.opacity = '0';
      void currentSlide.offsetWidth;
      currentSlide.style.transition = '';
      isTransitioning = false;
    }, 1250);
  }

  function nextSlide() {
    const next = (currentIndex + 1) % slides.length;
    goToSlide(next, 'next');
  }

  function prevSlide() {
    const prev = (currentIndex - 1 + slides.length) % slides.length;
    goToSlide(prev, 'prev');
  }

  function startAutoplay() {
    stopAutoplay();
    autoplayTimer = setInterval(nextSlide, slideDuration);
  }

  function stopAutoplay() {
    if (autoplayTimer) {
      clearInterval(autoplayTimer);
      autoplayTimer = null;
    }
  }

  dots.forEach((dot, idx) => {
    dot.addEventListener('click', (e) => {
      e.preventDefault();
      if (idx !== currentIndex) {
        goToSlide(idx, idx > currentIndex ? 'next' : 'prev');
        startAutoplay();
      }
    });
  });

  if (prevBtn) {
    prevBtn.addEventListener('click', (e) => {
      e.preventDefault();
      prevSlide();
      startAutoplay();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', (e) => {
      e.preventDefault();
      nextSlide();
      startAutoplay();
    });
  }

  if (heroSection) {
    heroSection.addEventListener('mouseenter', stopAutoplay);
    heroSection.addEventListener('mouseleave', startAutoplay);

    // Touch swipe support on mobile
    let touchStartX = 0;
    let touchEndX = 0;
    heroSection.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });
    heroSection.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      if (touchStartX - touchEndX > 45) {
        nextSlide();
        startAutoplay();
      } else if (touchEndX - touchStartX > 45) {
        prevSlide();
        startAutoplay();
      }
    }, { passive: true });
  }

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      stopAutoplay();
    } else {
      startAutoplay();
    }
  });

  if (captionEl) {
    captionEl.style.transition = 'opacity 0.2s ease';
  }

  updateDotsAndCaption(0);
  startAutoplay();
}
