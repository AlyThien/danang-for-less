/**
 * DANANG FOR LESS - FILTER & SEARCH ENGINE
 * Powers real-time interactive filtering on Stays and Tours listing pages
 */

document.addEventListener('DOMContentLoaded', () => {
  initPriceSlider();
  initAreaPills();
  initSortingDropdown();
});

function initPriceSlider() {
  const slider = document.getElementById('price-range-slider');
  const priceDisplay = document.getElementById('price-range-display');
  if (!slider || !priceDisplay) return;

  slider.addEventListener('input', (e) => {
    priceDisplay.textContent = `$${e.target.value}`;
    triggerFilterUpdate();
  });
}

function initAreaPills() {
  const pills = document.querySelectorAll('.area-filter-pill');
  if (!pills.length) return;

  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      pill.classList.toggle('bg-primary-crimson');
      pill.classList.toggle('text-white');
      pill.classList.toggle('bg-gray-100');
      pill.classList.toggle('text-gray-700');
      triggerFilterUpdate();
    });
  });
}

function initSortingDropdown() {
  const sortSelect = document.getElementById('sort-by-select');
  if (!sortSelect) return;

  sortSelect.addEventListener('change', () => {
    triggerFilterUpdate();
  });
}

function triggerFilterUpdate() {
  // Dispatches custom event for page controllers
  window.dispatchEvent(new CustomEvent('dn:filter-changed'));
}
