/**
 * DANANG FOR LESS - CLIENT-SIDE AUTHENTICATION CONTROLLER
 * Manages login state, demo credentials, header user dropdown, and login/signup triggers
 */

class AuthManager {
  constructor() {
    this.storageKey = 'dn_user';
    this.currentUser = this.loadUser();
  }

  loadUser() {
    if (typeof localStorage === 'undefined') return null;
    try {
      const data = localStorage.getItem(this.storageKey);
      return data ? JSON.parse(data) : null;
    } catch (e) {
      console.warn('Error loading user from localStorage:', e);
      return null;
    }
  }

  saveUser(user) {
    if (typeof localStorage === 'undefined') return;
    try {
      if (user) {
        localStorage.setItem(this.storageKey, JSON.stringify(user));
        this.currentUser = user;
      } else {
        localStorage.removeItem(this.storageKey);
        this.currentUser = null;
      }
      this.render();
      window.dispatchEvent(new CustomEvent('dn:auth-changed', { detail: { user: this.currentUser } }));
    } catch (e) {
      console.warn('Error saving user to localStorage:', e);
    }
  }

  login(email, password) {
    // Determine user role and details based on login input
    const isAdmin = email.toLowerCase().includes('admin');
    const user = {
      name: isAdmin ? 'Admin Da Nang' : 'Tuấn Nguyễn',
      email: email || 'tuan.nguyen@example.com',
      role: isAdmin ? 'admin' : 'user',
      avatar: isAdmin ? 'AD' : 'TN',
      points: isAdmin ? 99999 : 12450,
      savings: isAdmin ? '$84,200' : '$1,240'
    };
    this.saveUser(user);
    return user;
  }

  logout() {
    this.saveUser(null);
    // If currently in a protected portal page, redirect to home
    const path = window.location.pathname;
    if (path.includes('/portal/')) {
      const isNested = path.includes('/pages/portal/');
      window.location.href = isNested ? '../../index.html' : 'index.html';
    }
  }

  register(fullName, email, phone) {
    const initials = fullName ? fullName.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase() : 'DN';
    const user = {
      name: fullName || 'Thành Viên Mới',
      email: email || 'member@example.com',
      phone: phone || '',
      role: 'user',
      avatar: initials,
      points: 500, // 500 welcome points
      savings: '$0'
    };
    this.saveUser(user);
    return user;
  }

  getRelativePath(target) {
    // Detect nesting level to produce correct relative link
    const path = window.location.pathname;
    const isPagesDir = path.includes('/pages/');
    return isPagesDir ? '../../' + target : target;
  }

  render() {
    if (typeof document === 'undefined') return;
    const authContainers = document.querySelectorAll('.header-auth-container');
    const isVn = (window.dnI18n && window.dnI18n.currentLang === 'vn');

    authContainers.forEach(container => {
      const isNested = window.location.pathname.includes('/pages/');
      const basePath = isNested ? '../../' : '';
      const loginUrl = `${basePath}pages/auth/login.html`;
      const registerUrl = `${basePath}pages/auth/register.html`;
      const userPortalUrl = `${basePath}pages/portal/user.html`;
      const adminPortalUrl = `${basePath}pages/portal/admin.html`;

      if (this.currentUser) {
        // Logged in state
        const user = this.currentUser;
        const isAdmin = user.role === 'admin';
        
        container.innerHTML = `
          <div class="relative group">
            <button id="user-menu-btn" class="flex items-center gap-2 py-1 px-2 rounded-full hover:bg-gray-100 transition focus:outline-none" aria-label="Tài khoản">
              <div class="w-9 h-9 rounded-full ${isAdmin ? 'bg-indigo-600' : 'bg-brand-crimson'} text-white font-bold text-xs flex items-center justify-center shadow-md">
                ${user.avatar || 'TN'}
              </div>
              <span class="hidden xl:inline text-xs font-semibold text-gray-700 max-w-[120px] truncate">${user.name}</span>
              <i class="fa-solid fa-chevron-down text-[10px] text-gray-400"></i>
            </button>

            <!-- Dropdown Menu -->
            <div class="absolute right-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 hidden group-hover:block hover:block z-50 transition-all duration-200">
              <div class="px-4 py-2 border-b border-gray-100">
                <p class="text-xs font-bold text-espresso truncate">${user.name}</p>
                <p class="text-[11px] text-gray-400 truncate">${user.email}</p>
                <div class="mt-1.5 inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold ${isAdmin ? 'bg-indigo-50 text-indigo-700 border border-indigo-200' : 'bg-amber-50 text-amber-700 border border-amber-200'}">
                  <i class="fa-solid ${isAdmin ? 'fa-shield-halved' : 'fa-crown'} text-[9px]"></i>
                  <span>${isAdmin ? 'Quản Trị Viên (Admin)' : `${user.points.toLocaleString()} Loyalty pts`}</span>
                </div>
              </div>

              <div class="py-1 text-xs font-semibold text-gray-700">
                <a href="${userPortalUrl}" class="flex items-center gap-2.5 px-4 py-2 hover:bg-red-50 hover:text-brand-crimson transition">
                  <i class="fa-regular fa-calendar-check w-4 text-brand-crimson"></i>
                  <span>${isVn ? 'Đơn Đặt Chỗ Của Tôi' : 'My Bookings'}</span>
                </a>
                ${isAdmin ? `
                <a href="${adminPortalUrl}" class="flex items-center gap-2.5 px-4 py-2 hover:bg-indigo-50 hover:text-indigo-700 transition">
                  <i class="fa-solid fa-gauge w-4 text-indigo-600"></i>
                  <span>${isVn ? 'Bảng Quản Trị (Admin)' : 'Admin Dashboard'}</span>
                </a>
                ` : ''}
              </div>

              <div class="pt-1 border-t border-gray-100">
                <button onclick="window.dnAuth.logout()" class="w-full text-left flex items-center gap-2.5 px-4 py-2 text-xs font-semibold text-red-600 hover:bg-red-50 transition">
                  <i class="fa-solid fa-arrow-right-from-bracket w-4"></i>
                  <span>${isVn ? 'Đăng Xuất' : 'Sign Out'}</span>
                </button>
              </div>
            </div>
          </div>
        `;
      } else {
        // Guest / Logged out state -> Show Login & Sign Up buttons
        container.innerHTML = `
          <div class="flex items-center space-x-2">
            <a href="${loginUrl}" class="text-xs font-semibold text-gray-700 hover:text-brand-crimson px-3 py-2 rounded-xl hover:bg-gray-100 transition">
              <span>${isVn ? 'Đăng nhập' : 'Sign In'}</span>
            </a>
            <a href="${registerUrl}" class="text-xs font-bold text-white bg-brand-crimson hover:bg-brand-darkcrimson px-3.5 py-2 rounded-xl shadow-md shadow-brand-crimson/20 transition hover:scale-[1.02]">
              <span>${isVn ? 'Đăng ký' : 'Sign Up'}</span>
            </a>
          </div>
        `;
      }
    });

    // Also update mobile drawer auth section if it exists
    this.renderMobileDrawer();
  }

  renderMobileDrawer() {
    const mobileAuthContainer = document.getElementById('mobile-auth-container');
    if (!mobileAuthContainer) return;

    const isVn = (window.dnI18n && window.dnI18n.currentLang === 'vn');
    const isNested = window.location.pathname.includes('/pages/');
    const basePath = isNested ? '../../' : '';

    if (this.currentUser) {
      const user = this.currentUser;
      const isAdmin = user.role === 'admin';
      mobileAuthContainer.innerHTML = `
        <div class="p-3 bg-brand-sand rounded-2xl border border-gray-200/80 mb-4 flex items-center justify-between">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-full ${isAdmin ? 'bg-indigo-600' : 'bg-brand-crimson'} text-white font-bold text-sm flex items-center justify-center shadow">
              ${user.avatar || 'TN'}
            </div>
            <div>
              <p class="text-xs font-bold text-espresso">${user.name}</p>
              <p class="text-[10px] text-gray-500">${user.email}</p>
            </div>
          </div>
          <button onclick="window.dnAuth.logout()" class="text-xs text-red-600 hover:underline font-bold" title="Đăng xuất">
            <i class="fa-solid fa-arrow-right-from-bracket"></i>
          </button>
        </div>
      `;
    } else {
      mobileAuthContainer.innerHTML = `
        <div class="grid grid-cols-2 gap-2 mb-4">
          <a href="${basePath}pages/auth/login.html" class="w-full py-2.5 text-center text-xs font-bold rounded-xl border border-gray-200 text-gray-700 hover:bg-gray-50 transition">
            ${isVn ? 'Đăng nhập' : 'Sign In'}
          </a>
          <a href="${basePath}pages/auth/register.html" class="w-full py-2.5 text-center text-xs font-bold rounded-xl bg-brand-crimson text-white shadow-sm hover:bg-brand-darkcrimson transition">
            ${isVn ? 'Đăng ký' : 'Sign Up'}
          </a>
        </div>
      `;
    }
  }
}

// Global initialization
if (typeof window !== 'undefined') {
  window.dnAuth = new AuthManager();
  document.addEventListener('DOMContentLoaded', () => {
    window.dnAuth.render();
  });
  window.addEventListener('dn:language-changed', () => {
    if (window.dnAuth) window.dnAuth.render();
  });
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = AuthManager;
}
