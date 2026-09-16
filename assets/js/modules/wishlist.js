/**
 * DANANG FOR LESS - WISHLIST / SAVED ITEMS (HEART CART) MODULE
 * Manages saving tours & hotels to local wishlist, badge counters,
 * interactive heart buttons on cards, and slide-over cart drawer.
 */

class WishlistManager {
  constructor() {
    this.storageKey = 'dn_wishlist';
    this.currentFilter = 'all'; // 'all' | 'tour' | 'stay'
    this.items = this.loadItems();
    this.isOpen = false;
  }

  init() {
    if (typeof document === 'undefined') return;

    this.mountHeaderTrigger();
    this.mountDrawerUI();
    this.mountToastContainer();
    this.bindEvents();
    this.syncAllCardButtons();
    this.updateBadges();

    // Listen to global language change
    window.addEventListener('dn:language-changed', () => {
      this.renderDrawer();
      this.updateBadges();
    });
  }

  loadItems() {
    try {
      const stored = localStorage.getItem(this.storageKey);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (e) {
      console.warn('Could not load wishlist from localStorage', e);
    }

    // Default sample items for great immediate first impression
    const defaultItems = [
      {
        id: 'tour-bana-hills',
        type: 'tour',
        title: 'Ba Na Hills Full Day',
        subtitle: 'Ba Na Hills - Golden Bridge',
        location: 'Ba Na Hills, Da Nang',
        price: 44,
        originalPrice: 55,
        rating: 4.8,
        reviewsCount: 124,
        duration: '8 Hours',
        image: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=600&auto=format&fit=crop&q=80',
        url: '/pages/tours/detail.html'
      },
      {
        id: 'hotel-bliss-oceanfront',
        type: 'stay',
        title: 'The Bliss Oceanfront Hotel',
        subtitle: 'Beachfront Resort & Spa',
        location: 'My Khe Beach, Da Nang',
        price: 85,
        originalPrice: 120,
        rating: 5.0,
        reviewsCount: 420,
        duration: 'Per Night',
        image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&auto=format&fit=crop&q=80',
        url: '/pages/stays/detail.html'
      }
    ];

    try {
      localStorage.setItem(this.storageKey, JSON.stringify(defaultItems));
    } catch (e) {}

    return defaultItems;
  }

  saveItems() {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(this.items));
    } catch (e) {
      console.warn('Could not save wishlist to localStorage', e);
    }
    this.updateBadges();
    this.syncAllCardButtons();
    if (this.isOpen) {
      this.renderDrawer();
    }
  }

  getItems() {
    return this.items;
  }

  hasItem(id) {
    return this.items.some(item => String(item.id) === String(id));
  }

  addItem(item) {
    if (this.hasItem(item.id)) return;
    this.items.push(item);
    this.saveItems();

    // Trigger badge pulse
    this.pulseBadge();

    // Show Toast
    const isVn = this.getLang() === 'vn';
    const msg = isVn 
      ? `Đã thêm <strong>${item.title}</strong> vào danh sách yêu thích!`
      : `Saved <strong>${item.title}</strong> to your Wishlist!`;
    this.showToast(msg, 'added');
  }

  removeItem(id) {
    const item = this.items.find(i => String(i.id) === String(id));
    this.items = this.items.filter(i => String(i.id) !== String(id));
    this.saveItems();

    if (item) {
      const isVn = this.getLang() === 'vn';
      const msg = isVn 
        ? `Đã xóa <strong>${item.title}</strong> khỏi danh sách yêu thích.`
        : `Removed <strong>${item.title}</strong> from Wishlist.`;
      this.showToast(msg, 'removed');
    }
  }

  toggleItem(item) {
    if (this.hasItem(item.id)) {
      this.removeItem(item.id);
      return false;
    } else {
      this.addItem(item);
      return true;
    }
  }

  clearAll() {
    this.items = [];
    this.saveItems();
    const isVn = this.getLang() === 'vn';
    this.showToast(isVn ? 'Đã xóa toàn bộ danh sách lưu.' : 'Cleared all saved items.', 'removed');
  }

  getCount() {
    return this.items.length;
  }

  getLang() {
    if (typeof window !== 'undefined' && window.dnI18n && window.dnI18n.currentLang) {
      return window.dnI18n.currentLang;
    }
    return (typeof localStorage !== 'undefined' && localStorage.getItem('dn_lang')) || 'en';
  }

  t(key, defaultText) {
    if (typeof window !== 'undefined' && window.dnI18n && typeof window.dnI18n.t === 'function') {
      const text = window.dnI18n.t(key);
      if (text && text !== key) return text;
    }
    return defaultText;
  }

  resolveItemUrl(rawUrl, type) {
    const isHttp = typeof window !== 'undefined' && window.location.protocol.startsWith('http');
    if (isHttp) {
      if (rawUrl && (rawUrl.startsWith('http://') || rawUrl.startsWith('https://') || rawUrl.startsWith('/'))) {
        return rawUrl;
      }
      return type === 'stay' ? '/pages/stays/detail.html' : '/pages/tours/detail.html';
    } else {
      const path = (typeof window !== 'undefined' ? window.location.pathname.replace(/\\/g, '/') : '');
      const isInPagesSubdir = path.includes('/pages/');
      const prefix = isInPagesSubdir ? '../' : 'pages/';
      return type === 'stay' ? `${prefix}stays/detail.html` : `${prefix}tours/detail.html`;
    }
  }

  getNavUrl(target) {
    const isHttp = typeof window !== 'undefined' && window.location.protocol.startsWith('http');
    if (isHttp) {
      return target === 'stays' ? '/pages/stays/index.html' : '/pages/tours/index.html';
    } else {
      const path = (typeof window !== 'undefined' ? window.location.pathname.replace(/\\/g, '/') : '');
      const isInPagesSubdir = path.includes('/pages/');
      const prefix = isInPagesSubdir ? '../' : 'pages/';
      return target === 'stays' ? `${prefix}stays/index.html` : `${prefix}tours/index.html`;
    }
  }

  /**
   * Mounts the Wishlist Trigger (Heart Button) into the Header and Mobile Drawer.
   */
  mountHeaderTrigger() {
    // 1. Desktop Header
    const authContainers = document.querySelectorAll('.header-auth-container');
    authContainers.forEach(container => {
      if (container.parentElement && !container.parentElement.querySelector('#wishlist-btn')) {
        const btn = document.createElement('button');
        btn.id = 'wishlist-btn';
        btn.type = 'button';
        btn.className = 'relative p-2 sm:p-2.5 rounded-xl text-gray-700 hover:text-brand-crimson hover:bg-red-50 transition flex items-center justify-center cursor-pointer group';
        btn.setAttribute('aria-label', 'Saved Items / Danh sách yêu thích');
        btn.setAttribute('title', 'Saved Items');
        btn.innerHTML = `
          <i class="fa-regular fa-heart text-lg group-hover:scale-110 transition-transform"></i>
          <span class="wishlist-badge absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1 rounded-full bg-brand-crimson text-white text-[10px] font-black flex items-center justify-center shadow-md scale-95 transition-all">0</span>
        `;
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          this.openDrawer();
        });
        // Insert right before or inside right controls
        container.parentNode.insertBefore(btn, container);
      }
    });

    // 2. Mobile Drawer Navigation Row
    const mobileNav = document.querySelector('#mobile-drawer nav');
    if (mobileNav && !mobileNav.querySelector('#mobile-wishlist-row')) {
      const row = document.createElement('a');
      row.id = 'mobile-wishlist-row';
      row.href = '#';
      row.className = 'flex items-center justify-between p-2 rounded-xl hover:bg-red-50 hover:text-brand-crimson transition text-gray-700 font-semibold cursor-pointer';
      row.innerHTML = `
        <div class="flex items-center gap-3">
          <i class="fa-regular fa-heart w-5 text-brand-crimson text-lg"></i>
          <span class="wishlist-mobile-label">Saved Items</span>
        </div>
        <span class="wishlist-badge px-2 py-0.5 rounded-full bg-brand-crimson text-white text-[10px] font-bold">0</span>
      `;
      row.addEventListener('click', (e) => {
        e.preventDefault();
        // Close mobile drawer if open
        const mobileDrawer = document.getElementById('mobile-drawer');
        const overlay = document.getElementById('mobile-drawer-overlay');
        if (mobileDrawer) mobileDrawer.classList.add('translate-x-full');
        if (overlay) overlay.classList.add('hidden');
        document.body.style.overflow = '';
        this.openDrawer();
      });
      mobileNav.appendChild(row);
    }
  }

  /**
   * Injects the Slide-Over Cart Drawer HTML into body.
   */
  mountDrawerUI() {
    if (document.getElementById('wishlist-drawer')) return;

    // Overlay
    const overlay = document.createElement('div');
    overlay.id = 'wishlist-drawer-overlay';
    overlay.className = 'fixed inset-0 bg-espresso/60 backdrop-blur-sm z-[70] hidden transition-opacity duration-300 opacity-0';
    overlay.addEventListener('click', () => this.closeDrawer());

    // Drawer Panel
    const drawer = document.createElement('div');
    drawer.id = 'wishlist-drawer';
    drawer.className = 'fixed top-0 right-0 w-full sm:w-[440px] h-full bg-white z-[80] shadow-2xl flex flex-col transform translate-x-full transition-transform duration-300 ease-in-out';
    drawer.setAttribute('role', 'dialog');
    drawer.setAttribute('aria-modal', 'true');

    drawer.innerHTML = `
      <!-- Header -->
      <div class="p-5 border-b border-gray-100 flex items-center justify-between bg-cream">
        <div class="flex items-center gap-2.5">
          <div class="w-9 h-9 rounded-xl bg-red-50 text-brand-crimson flex items-center justify-center text-base shadow-sm">
            <i class="fa-solid fa-heart"></i>
          </div>
          <div>
            <h2 id="wishlist-drawer-title" class="font-extrabold text-lg text-espresso tracking-tight">Saved Items</h2>
            <p id="wishlist-drawer-count" class="text-xs text-gray-500 font-medium">2 items saved</p>
          </div>
        </div>
        <button id="wishlist-close-btn" class="w-8 h-8 rounded-full border border-gray-200 bg-white hover:bg-gray-100 flex items-center justify-center text-gray-500 hover:text-espresso transition cursor-pointer">
          <i class="fa-solid fa-xmark text-sm"></i>
        </button>
      </div>

      <!-- Category Filter Tabs -->
      <div class="px-5 py-3 border-b border-gray-100 bg-white flex items-center gap-2 text-xs font-bold">
        <button data-wishlist-filter="all" class="wishlist-tab-btn px-3 py-1.5 rounded-lg bg-brand-crimson text-white transition cursor-pointer">All (<span class="tab-count-all">0</span>)</button>
        <button data-wishlist-filter="tour" class="wishlist-tab-btn px-3 py-1.5 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-600 transition cursor-pointer">Tours (<span class="tab-count-tours">0</span>)</button>
        <button data-wishlist-filter="stay" class="wishlist-tab-btn px-3 py-1.5 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-600 transition cursor-pointer">Hotels (<span class="tab-count-stays">0</span>)</button>
      </div>

      <!-- Scrollable List of Items -->
      <div id="wishlist-items-container" class="flex-1 overflow-y-auto p-5 space-y-3.5 divide-y-0"></div>

      <!-- Footer Summary & Actions -->
      <div id="wishlist-drawer-footer" class="p-5 border-t border-gray-100 bg-cream/80 space-y-3">
        <div class="flex items-center justify-between">
          <span id="wishlist-total-label" class="text-xs text-gray-500 font-semibold uppercase tracking-wider">Estimated Total:</span>
          <span id="wishlist-total-price" class="text-2xl font-black text-brand-crimson">$0.00</span>
        </div>
        <div class="flex items-center gap-2 pt-1">
          <button id="wishlist-clear-btn" class="px-4 py-2.5 rounded-xl border border-gray-200 bg-white hover:bg-red-50 text-gray-600 hover:text-brand-crimson text-xs font-bold transition cursor-pointer">
            <i class="fa-regular fa-trash-can mr-1"></i> <span id="wishlist-clear-text">Clear All</span>
          </button>
          <a id="wishlist-explore-cta" href="/pages/tours/index.html" class="flex-1 text-center py-2.5 rounded-xl brand-btn-primary text-xs font-bold shadow-md shadow-brand-crimson/20">
            <span id="wishlist-explore-text">Explore More</span>
          </a>
        </div>
      </div>
    `;

    document.body.appendChild(overlay);
    document.body.appendChild(drawer);

    // Event listeners inside drawer
    document.getElementById('wishlist-close-btn').addEventListener('click', () => this.closeDrawer());
    document.getElementById('wishlist-clear-btn').addEventListener('click', () => {
      if (confirm(this.getLang() === 'vn' ? 'Bạn có chắc muốn xóa tất cả địa điểm đã lưu?' : 'Are you sure you want to clear your saved items?')) {
        this.clearAll();
      }
    });

    // Tab filter buttons
    drawer.querySelectorAll('.wishlist-tab-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const filter = btn.dataset.wishlistFilter;
        this.currentFilter = filter;
        drawer.querySelectorAll('.wishlist-tab-btn').forEach(b => {
          b.className = 'wishlist-tab-btn px-3 py-1.5 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-600 transition cursor-pointer';
        });
        btn.className = 'wishlist-tab-btn px-3 py-1.5 rounded-lg bg-brand-crimson text-white transition cursor-pointer';
        this.renderDrawer();
      });
    });
  }

  /**
   * Mounts the toast container for feedback.
   */
  mountToastContainer() {
    if (document.getElementById('wishlist-toast-container')) return;
    const container = document.createElement('div');
    container.id = 'wishlist-toast-container';
    container.className = 'fixed bottom-5 right-5 z-[90] space-y-2 pointer-events-none flex flex-col items-end';
    document.body.appendChild(container);
  }

  showToast(messageHtml, type = 'added') {
    if (typeof document === 'undefined') return;
    const container = document.getElementById('wishlist-toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'pointer-events-auto flex items-center gap-3 bg-white/95 backdrop-blur-md px-4 py-3 rounded-2xl shadow-xl border border-gray-200 text-xs text-espresso font-medium transform translate-y-3 opacity-0 transition-all duration-300 max-w-sm';
    
    const iconHtml = type === 'added'
      ? `<div class="w-7 h-7 rounded-full bg-red-100 text-brand-crimson flex items-center justify-center shrink-0"><i class="fa-solid fa-heart text-xs"></i></div>`
      : `<div class="w-7 h-7 rounded-full bg-gray-100 text-gray-500 flex items-center justify-center shrink-0"><i class="fa-regular fa-trash-can text-xs"></i></div>`;

    toast.innerHTML = `
      ${iconHtml}
      <div class="flex-1">${messageHtml}</div>
      <button class="text-gray-400 hover:text-gray-600 text-xs p-1 cursor-pointer" onclick="this.parentElement.remove()"><i class="fa-solid fa-xmark"></i></button>
    `;

    container.appendChild(toast);

    // Animate in
    requestAnimationFrame(() => {
      toast.classList.remove('translate-y-3', 'opacity-0');
      toast.classList.add('translate-y-0', 'opacity-100');
    });

    // Auto dismiss
    setTimeout(() => {
      toast.classList.add('translate-y-3', 'opacity-0');
      setTimeout(() => toast.remove(), 300);
    }, 3200);
  }

  openDrawer() {
    const drawer = document.getElementById('wishlist-drawer');
    const overlay = document.getElementById('wishlist-drawer-overlay');
    if (!drawer || !overlay) return;

    this.isOpen = true;
    this.renderDrawer();

    overlay.classList.remove('hidden');
    requestAnimationFrame(() => {
      overlay.classList.remove('opacity-0');
      overlay.classList.add('opacity-100');
      drawer.classList.remove('translate-x-full');
      drawer.classList.add('translate-x-0');
    });
    document.body.style.overflow = 'hidden';
  }

  closeDrawer() {
    const drawer = document.getElementById('wishlist-drawer');
    const overlay = document.getElementById('wishlist-drawer-overlay');
    if (!drawer || !overlay) return;

    this.isOpen = false;
    drawer.classList.add('translate-x-full');
    drawer.classList.remove('translate-x-0');
    overlay.classList.remove('opacity-100');
    overlay.classList.add('opacity-0');
    setTimeout(() => {
      overlay.classList.add('hidden');
      document.body.style.overflow = '';
    }, 300);
  }

  renderDrawer() {
    const container = document.getElementById('wishlist-items-container');
    const titleEl = document.getElementById('wishlist-drawer-title');
    const countEl = document.getElementById('wishlist-drawer-count');
    const footer = document.getElementById('wishlist-drawer-footer');
    const totalPriceEl = document.getElementById('wishlist-total-price');
    const totalLabelEl = document.getElementById('wishlist-total-label');
    const clearTextEl = document.getElementById('wishlist-clear-text');
    const exploreTextEl = document.getElementById('wishlist-explore-text');

    if (!container) return;

    const isVn = this.getLang() === 'vn';
    const totalCount = this.items.length;
    const toursCount = this.items.filter(i => i.type === 'tour').length;
    const staysCount = this.items.filter(i => i.type === 'stay').length;

    // Update Tab count numbers
    const tabAll = document.querySelector('.tab-count-all');
    const tabTours = document.querySelector('.tab-count-tours');
    const tabStays = document.querySelector('.tab-count-stays');
    if (tabAll) tabAll.textContent = totalCount;
    if (tabTours) tabTours.textContent = toursCount;
    if (tabStays) tabStays.textContent = staysCount;

    // Filter items
    let filtered = this.items;
    if (this.currentFilter === 'tour') filtered = this.items.filter(i => i.type === 'tour');
    if (this.currentFilter === 'stay') filtered = this.items.filter(i => i.type === 'stay');

    // Header labels
    if (titleEl) titleEl.textContent = isVn ? 'Danh sách đã lưu' : 'Saved Items';
    if (countEl) countEl.textContent = isVn ? `${totalCount} địa điểm trong danh sách` : `${totalCount} item${totalCount === 1 ? '' : 's'} saved`;
    if (totalLabelEl) totalLabelEl.textContent = isVn ? 'Tạm tính tổng cộng:' : 'Estimated Total:';
    if (clearTextEl) clearTextEl.textContent = isVn ? 'Xóa tất cả' : 'Clear All';
    if (exploreTextEl) exploreTextEl.textContent = isVn ? 'Khám phá thêm' : 'Explore More';
    const exploreCta = document.getElementById('wishlist-explore-cta');
    if (exploreCta) {
      exploreCta.setAttribute('href', this.getNavUrl('tours'));
    }

    // Calculate total price
    const totalPrice = this.items.reduce((sum, item) => sum + (Number(item.price) || 0), 0);
    if (totalPriceEl) totalPriceEl.textContent = `$${totalPrice.toFixed(2)}`;

    // Empty state
    if (filtered.length === 0) {
      if (footer) footer.classList.add('hidden');
      container.innerHTML = `
        <div class="h-full flex flex-col items-center justify-center text-center p-6 space-y-4 my-auto">
          <div class="w-20 h-20 rounded-3xl bg-red-50 text-brand-crimson flex items-center justify-center text-4xl shadow-inner animate-pulse">
            <i class="fa-solid fa-heart-crack"></i>
          </div>
          <div class="space-y-1 max-w-xs">
            <h3 class="font-extrabold text-base text-espresso">
              ${isVn ? 'Chưa có địa điểm nào được lưu' : 'Your Wishlist is Empty'}
            </h3>
            <p class="text-xs text-gray-500 leading-relaxed">
              ${isVn ? 'Hãy bấm vào biểu tượng hình trái tim trên bất kỳ tour hoặc khách sạn nào để lưu lại xem sau!' : 'Save your favorite tours and hotels with the heart icon to easily compare and book later!'}
            </p>
          </div>
          <div class="flex gap-2 pt-2">
            <a href="${this.getNavUrl('tours')}" class="px-4 py-2 rounded-xl bg-brand-crimson text-white text-xs font-bold shadow-md hover:bg-brand-darkcrimson transition">
              ${isVn ? 'Xem Tours' : 'Browse Tours'}
            </a>
            <a href="${this.getNavUrl('stays')}" class="px-4 py-2 rounded-xl border border-gray-200 bg-white hover:bg-gray-100 text-espresso text-xs font-bold transition">
              ${isVn ? 'Xem Khách sạn' : 'Browse Stays'}
            </a>
          </div>
        </div>
      `;
      return;
    }

    if (footer) footer.classList.remove('hidden');

    // Render cards
    container.innerHTML = filtered.map(item => {
      const typeBadge = item.type === 'tour'
        ? `<span class="px-2 py-0.5 rounded-md bg-amber-50 text-amber-700 text-[10px] font-bold border border-amber-200"><i class="fa-solid fa-compass text-[9px] mr-1"></i>Tour</span>`
        : `<span class="px-2 py-0.5 rounded-md bg-blue-50 text-blue-700 text-[10px] font-bold border border-blue-200"><i class="fa-solid fa-hotel text-[9px] mr-1"></i>Stay</span>`;

      const detailUrl = this.resolveItemUrl(item.url, item.type);

      return `
        <div class="bg-white rounded-2xl p-3.5 border border-gray-200/80 shadow-sm hover:shadow-md transition flex gap-3.5 group relative">
          <!-- Thumbnail -->
          <a href="${detailUrl}" class="w-20 h-20 rounded-xl overflow-hidden shrink-0 relative block">
            <img src="${item.image || 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=300'}" 
                 alt="${item.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300">
          </a>

          <!-- Info -->
          <div class="flex-1 min-w-0 flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between gap-1 mb-1">
                ${typeBadge}
                <button data-remove-wishlist="${item.id}" class="text-gray-400 hover:text-brand-crimson p-1 text-xs transition cursor-pointer" title="Remove">
                  <i class="fa-regular fa-trash-can"></i>
                </button>
              </div>

              <h4 class="font-bold text-xs sm:text-sm text-espresso hover:text-brand-crimson transition line-clamp-1">
                <a href="${detailUrl}">${item.title}</a>
              </h4>

              <div class="flex items-center gap-2 text-[11px] text-gray-500 mt-0.5">
                <span class="flex items-center gap-0.5 text-amber-500 font-bold">
                  <i class="fa-solid fa-star text-[10px]"></i> ${item.rating || '4.8'}
                </span>
                <span>•</span>
                <span class="truncate">${item.location || 'Da Nang'}</span>
              </div>
            </div>

            <!-- Bottom Price & Book Button -->
            <div class="flex items-center justify-between pt-2 mt-1 border-t border-gray-100">
              <div class="flex items-baseline gap-1">
                ${item.originalPrice ? `<span class="text-[10px] text-gray-400 line-through">$${item.originalPrice}</span>` : ''}
                <span class="text-sm sm:text-base font-black text-brand-crimson">$${item.price}</span>
                <span class="text-[10px] text-gray-400 font-normal">${item.duration || ''}</span>
              </div>
              <a href="${detailUrl}" class="px-3 py-1 rounded-lg brand-btn-primary text-[11px] font-bold shadow-sm">
                ${isVn ? 'Đặt ngay' : 'Book Now'}
              </a>
            </div>
          </div>
        </div>
      `;
    }).join('');

    // Wire remove buttons
    container.querySelectorAll('[data-remove-wishlist]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const id = btn.dataset.removeWishlist;
        this.removeItem(id);
      });
    });
  }

  updateBadges() {
    if (typeof document === 'undefined') return;
    const count = this.getCount();
    document.querySelectorAll('.wishlist-badge').forEach(badge => {
      badge.textContent = count;
      if (count > 0) {
        badge.classList.remove('hidden');
        badge.style.display = 'flex';
      } else {
        badge.textContent = '0';
      }
    });

    // Update mobile menu label
    const isVn = this.getLang() === 'vn';
    document.querySelectorAll('.wishlist-mobile-label').forEach(lbl => {
      lbl.textContent = isVn ? 'Danh sách đã lưu' : 'Saved Items';
    });

    // Update header heart icon appearance (solid red if has items, regular if empty)
    const headerBtn = document.getElementById('wishlist-btn');
    if (headerBtn) {
      const icon = headerBtn.querySelector('i');
      if (icon) {
        if (count > 0) {
          icon.className = 'fa-solid fa-heart text-lg text-brand-crimson group-hover:scale-110 transition-transform';
        } else {
          icon.className = 'fa-regular fa-heart text-lg text-gray-700 group-hover:text-brand-crimson group-hover:scale-110 transition-transform';
        }
      }
    }
  }

  pulseBadge() {
    if (typeof document === 'undefined') return;
    document.querySelectorAll('.wishlist-badge').forEach(badge => {
      badge.classList.remove('animate-bounce');
      void badge.offsetWidth; // trigger reflow
      badge.classList.add('animate-bounce');
      setTimeout(() => badge.classList.remove('animate-bounce'), 1500);
    });
  }

  /**
   * Scans cards and updates heart icons to solid or outline.
   */
  syncAllCardButtons() {
    if (typeof document === 'undefined') return;
    document.querySelectorAll('.btn-wishlist, [data-wishlist-id]').forEach(btn => {
      const id = btn.dataset.wishlistId;
      if (!id) return;
      const isSaved = this.hasItem(id);
      const icon = btn.querySelector('i');

      if (icon) {
        if (isSaved) {
          icon.className = 'fa-solid fa-heart text-brand-crimson scale-110 transition-transform';
          btn.classList.add('is-saved', 'bg-white');
          btn.setAttribute('title', this.getLang() === 'vn' ? 'Đã lưu (Bấm để xóa)' : 'Saved (Click to remove)');
        } else {
          icon.className = 'fa-regular fa-heart text-gray-600 hover:text-brand-crimson transition-transform';
          btn.classList.remove('is-saved');
          btn.setAttribute('title', this.getLang() === 'vn' ? 'Lưu vào yêu thích' : 'Save to Wishlist');
        }
      }
    });
  }

  /**
   * Delegated click listener for card heart buttons & portal links.
   */
  bindEvents() {
    document.addEventListener('click', (e) => {
      // 1. Check if clicking on card heart button
      const heartBtn = e.target.closest('.btn-wishlist, [data-wishlist-id]');
      if (heartBtn) {
        // Ignore the header trigger button
        if (heartBtn.id === 'wishlist-btn') return;

        e.preventDefault();
        e.stopPropagation();

        const id = heartBtn.dataset.wishlistId;
        if (!id) return;

        const item = {
          id: id,
          type: heartBtn.dataset.wishlistType || 'tour',
          title: heartBtn.dataset.wishlistTitle || 'Da Nang Experience',
          subtitle: heartBtn.dataset.wishlistSubtitle || '',
          location: heartBtn.dataset.wishlistLocation || 'Da Nang',
          price: Number(heartBtn.dataset.wishlistPrice) || 39,
          originalPrice: Number(heartBtn.dataset.wishlistOriginalPrice) || 0,
          rating: Number(heartBtn.dataset.wishlistRating) || 4.8,
          duration: heartBtn.dataset.wishlistDuration || '',
          image: heartBtn.dataset.wishlistImage || 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=600',
          url: heartBtn.dataset.wishlistUrl || (heartBtn.dataset.wishlistType === 'stay' ? '/pages/stays/detail.html' : '/pages/tours/detail.html')
        };

        // Heart burst animation
        const icon = heartBtn.querySelector('i');
        if (icon) {
          icon.classList.add('scale-125');
          setTimeout(() => icon.classList.remove('scale-125'), 200);
        }

        this.toggleItem(item);
        return;
      }

      // 2. User Portal Wishlist Tab click
      const portalWishlistTab = e.target.closest('[data-i18n="portal.wishlist_tab"]');
      if (portalWishlistTab) {
        e.preventDefault();
        this.openDrawer();
        return;
      }
    });
  }
}

// Global Singleton
if (typeof window !== 'undefined') {
  const dnWishlist = new WishlistManager();
  window.dnWishlist = dnWishlist;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => dnWishlist.init());
  } else {
    dnWishlist.init();
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = WishlistManager;
}
