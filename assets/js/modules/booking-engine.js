/**
 * DANANG FOR LESS - BOOKING CALCULATION & CHECKOUT ENGINE
 * Handles interactive date selection, passenger count, instant price recalculation, and checkout state
 */

document.addEventListener('DOMContentLoaded', () => {
  initTravelerCounters();
  initRoomSelection();
  initPromoCode();
});

function initTravelerCounters() {
  const counterGroups = document.querySelectorAll('[data-counter-group]');
  counterGroups.forEach(group => {
    const minusBtn = group.querySelector('.btn-counter-minus');
    const plusBtn = group.querySelector('.btn-counter-plus');
    const display = group.querySelector('.counter-value');
    const min = parseInt(group.dataset.min || '0', 10);
    const max = parseInt(group.dataset.max || '10', 10);

    if (!minusBtn || !plusBtn || !display) return;

    minusBtn.addEventListener('click', () => {
      let current = parseInt(display.textContent, 10);
      if (current > min) {
        current--;
        display.textContent = current;
        recalcBookingTotal();
      }
    });

    plusBtn.addEventListener('click', () => {
      let current = parseInt(display.textContent, 10);
      if (current < max) {
        current++;
        display.textContent = current;
        recalcBookingTotal();
      }
    });
  });
}

function initRoomSelection() {
  const roomBtns = document.querySelectorAll('.btn-select-room');
  roomBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const roomCard = btn.closest('[data-room-id]');
      const roomId = roomCard?.dataset.roomId;
      const roomPrice = parseFloat(roomCard?.dataset.roomPrice || '85');
      const roomName = roomCard?.dataset.roomName || 'Deluxe City View';

      // Mark selected
      roomBtns.forEach(b => {
        b.textContent = 'Select Room';
        b.className = 'btn-select-room brand-btn-primary px-5 py-2.5 text-xs sm:text-sm';
      });

      btn.textContent = 'Selected ✓';
      btn.className = 'btn-select-room bg-emerald-600 text-white px-5 py-2.5 text-xs sm:text-sm rounded-xl font-semibold shadow-md';

      // Update sticky booking card price
      const priceDisplay = document.getElementById('widget-base-price');
      if (priceDisplay) priceDisplay.textContent = `$${roomPrice}`;

      sessionStorage.setItem('dn_selected_room', JSON.stringify({
        id: roomId,
        name: roomName,
        price: roomPrice
      }));

      recalcBookingTotal();
    });
  });
}

function recalcBookingTotal() {
  const nights = parseInt(document.getElementById('booking-nights-count')?.dataset.nights || '3', 10);
  const adults = parseInt(document.getElementById('count-adults')?.textContent || '2', 10);
  const basePricePerNight = parseFloat(document.getElementById('widget-base-price')?.textContent.replace('$', '') || '85');

  const subtotalEl = document.getElementById('calc-subtotal');
  const serviceFeeEl = document.getElementById('calc-service-fee');
  const discountEl = document.getElementById('calc-discount');
  const totalEl = document.getElementById('calc-total');

  if (!totalEl) return;

  const subtotal = basePricePerNight * nights;
  const serviceFee = parseFloat((subtotal * 0.05).toFixed(2));
  const discountRate = parseFloat(sessionStorage.getItem('dn_discount_rate') || '0');
  const discountAmount = parseFloat((subtotal * discountRate).toFixed(2));
  const total = (subtotal + serviceFee - discountAmount).toFixed(2);

  if (subtotalEl) subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
  if (serviceFeeEl) serviceFeeEl.textContent = `$${serviceFee.toFixed(2)}`;
  if (discountEl) discountEl.textContent = `-$${discountAmount.toFixed(2)}`;
  totalEl.textContent = `$${total}`;

  // Save for checkout
  sessionStorage.setItem('dn_current_booking', JSON.stringify({
    nights,
    adults,
    subtotal,
    serviceFee,
    discountAmount,
    total
  }));
}

function initPromoCode() {
  const applyBtn = document.getElementById('btn-apply-promo');
  const promoInput = document.getElementById('promo-input');
  const promoFeedback = document.getElementById('promo-feedback');

  if (!applyBtn || !promoInput) return;

  applyBtn.addEventListener('click', () => {
    const code = promoInput.value.trim().toUpperCase();
    if (code === 'DANANG15' || code === 'SAVE15') {
      sessionStorage.setItem('dn_discount_rate', '0.15');
      if (promoFeedback) {
        promoFeedback.textContent = 'Mã giảm giá 15% đã được áp dụng thành công! 🎉';
        promoFeedback.className = 'text-xs text-emerald-600 font-semibold mt-1';
      }
      recalcBookingTotal();
    } else {
      if (promoFeedback) {
        promoFeedback.textContent = 'Mã ưu đãi không hợp lệ. Vui lòng thử lại!';
        promoFeedback.className = 'text-xs text-red-500 font-medium mt-1';
      }
    }
  });
}
