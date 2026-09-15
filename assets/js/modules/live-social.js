/**
 * DANANG FOR LESS - SOCIAL PROOF & LIVE ACTIVITY TICKER
 * Displays realistic live booking notifications to boost confidence & engagement
 */

document.addEventListener('DOMContentLoaded', () => {
  if (typeof DANANG_DATA === 'undefined' || !DANANG_DATA.liveBookings) return;

  // Create toast container if not present
  let container = document.getElementById('live-social-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'live-social-container';
    container.className = 'fixed bottom-6 left-6 z-50 pointer-events-none flex flex-col gap-3 max-w-sm w-full';
    document.body.appendChild(container);
  }

  let index = 0;
  const showNextToast = () => {
    const item = DANANG_DATA.liveBookings[index % DANANG_DATA.liveBookings.length];
    index++;

    const toast = document.createElement('div');
    toast.className = 'pointer-events-auto bg-white/95 backdrop-blur-md border border-gray-200/90 rounded-2xl p-3.5 shadow-2xl flex items-center gap-3.5 toast-enter transition-all duration-300';
    
    toast.innerHTML = `
      <div class="relative flex-shrink-0">
        <div class="w-10 h-10 rounded-full bg-primary-tint text-primary-crimson font-bold text-xs flex items-center justify-center border border-red-100 shadow-sm">
          ${item.avatar}
        </div>
        <span class="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-500 border-2 border-white pulse-dot-green"></span>
      </div>
      <div class="flex-1 min-w-0 pr-2">
        <div class="flex items-center justify-between">
          <p class="text-xs font-bold text-gray-900 truncate">${item.name}</p>
          <span class="text-[10px] text-gray-400 ml-2 whitespace-nowrap">${item.timeAgo}</span>
        </div>
        <p class="text-[11px] text-gray-600 truncate mt-0.5">${item.action}</p>
        <div class="mt-1 flex items-center gap-1.5">
          <span class="text-[10px] bg-emerald-50 text-emerald-700 font-semibold px-1.5 py-0.5 rounded border border-emerald-100">
            Tiết kiệm: ${item.savings}
          </span>
          <span class="text-[10px] text-gray-400">• Đã xác thực</span>
        </div>
      </div>
      <button class="text-gray-300 hover:text-gray-600 transition p-1" title="Đóng">
        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
      </button>
    `;

    // Close button
    const closeBtn = toast.querySelector('button');
    closeBtn.addEventListener('click', () => dismissToast(toast));

    container.appendChild(toast);

    // Auto dismiss after 6 seconds
    setTimeout(() => {
      dismissToast(toast);
    }, 6000);
  };

  const dismissToast = (toast) => {
    if (!toast || !toast.parentNode) return;
    toast.classList.remove('toast-enter');
    toast.classList.add('toast-exit');
    setTimeout(() => {
      if (toast.parentNode) toast.remove();
    }, 450);
  };

  // Start after 3.5 seconds, repeating every 14 seconds
  setTimeout(() => {
    showNextToast();
    setInterval(showNextToast, 14000);
  }, 3500);
});
