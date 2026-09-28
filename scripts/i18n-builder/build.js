const fs = require('fs');
const path = require('path');

const keysData = require('../../keys_export.json');
const { zhPart1, koPart1, jaPart1 } = require('./part1.js');
const { zhPart2, koPart2, jaPart2 } = require('./part2.js');
const { zhPart3, koPart3, jaPart3 } = require('./part3.js');

const zh = { ...zhPart1, ...zhPart2, ...zhPart3 };
const ko = { ...koPart1, ...koPart2, ...koPart3 };
const ja = { ...jaPart1, ...jaPart2, ...jaPart3 };

const expectedKeys = Object.keys(keysData.en);
console.log(`Expected key count: ${expectedKeys.length}`);

// Validation
const missingZh = expectedKeys.filter(k => zh[k] === undefined);
const missingKo = expectedKeys.filter(k => ko[k] === undefined);
const missingJa = expectedKeys.filter(k => ja[k] === undefined);

if (missingZh.length > 0) {
  console.error(`Missing in ZH (${missingZh.length}):`, missingZh);
  process.exit(1);
}
if (missingKo.length > 0) {
  console.error(`Missing in KO (${missingKo.length}):`, missingKo);
  process.exit(1);
}
if (missingJa.length > 0) {
  console.error(`Missing in JA (${missingJa.length}):`, missingJa);
  process.exit(1);
}

console.log('✅ Validation passed! All 438 keys present in ZH, KO, and JA.');
console.log(`ZH keys count: ${Object.keys(zh).length}`);
console.log(`KO keys count: ${Object.keys(ko).length}`);
console.log(`JA keys count: ${Object.keys(ja).length}`);

// Build complete dictionary
const completeDict = {
  en: keysData.en,
  vn: keysData.vn,
  zh: zh,
  ko: ko,
  ja: ja
};

// Generate updated i18n.js
const i18nTemplate = `/**
 * DANANG FOR LESS - INTERNATIONALIZATION (i18n) ENGINE
 * Complete multilingual dictionary: EN, VN, ZH (中文), KO (한국어), JA (日本語)
 * Persists selection in localStorage, dispatches global events, and supports dynamic switcher
 */

const DN_LANGUAGES = {
  vn: { code: 'vn', htmlLang: 'vi', label: 'Tiếng Việt', short: 'VN', flag: '🇻🇳' },
  en: { code: 'en', htmlLang: 'en', label: 'English', short: 'EN', flag: '🇬🇧' },
  zh: { code: 'zh', htmlLang: 'zh-CN', label: '简体中文', short: '中', flag: '🇨🇳' },
  ko: { code: 'ko', htmlLang: 'ko', label: '한국어', short: '한', flag: '🇰🇷' },
  ja: { code: 'ja', htmlLang: 'ja', label: '日本語', short: '日', flag: '🇯🇵' }
};

const DN_I18N_DICTIONARY = ${JSON.stringify(completeDict, null, 2)};

class LanguageManager {
  constructor() {
    const validLangs = ['vn', 'en', 'zh', 'ko', 'ja'];
    let saved = 'vn';
    if (typeof localStorage !== 'undefined') {
      saved = localStorage.getItem('dn_lang') || 'vn';
    }
    this.currentLang = validLangs.includes(saved) ? saved : 'vn';
    this.dict = DN_I18N_DICTIONARY;
  }

  init() {
    if (typeof document === 'undefined') return;
    this.applyLanguage(this.currentLang, false);
    this.bindEvents();
  }

  setLanguage(lang) {
    const validLangs = ['vn', 'en', 'zh', 'ko', 'ja'];
    if (!validLangs.includes(lang)) return;
    this.currentLang = lang;
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('dn_lang', lang);
    }
    this.applyLanguage(lang, true);
  }

  applyLanguage(lang, animate = true) {
    const texts = this.dict[lang] || this.dict['en'];
    if (!texts || typeof document === 'undefined') return;

    // Optional smooth transition effect
    if (animate) {
      document.body.style.transition = 'opacity 0.15s ease';
      document.body.style.opacity = '0.96';
      setTimeout(() => {
        document.body.style.opacity = '1';
      }, 150);
    }

    // 1. Text Content Translation
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (texts[key]) {
        el.textContent = texts[key];
      }
    });

    // 2. HTML Content Translation
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      if (texts[key]) {
        el.innerHTML = texts[key];
      }
    });

    // 3. Placeholder Translation
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (texts[key]) {
        el.setAttribute('placeholder', texts[key]);
      }
    });

    // 4. Title / Tooltip Translation
    document.querySelectorAll('[data-i18n-title]').forEach(el => {
      const key = el.getAttribute('data-i18n-title');
      if (texts[key]) {
        el.setAttribute('title', texts[key]);
      }
    });

    // 5. Update visual state on all language switcher UI elements
    this.updatePillUI(lang);

    // 6. Update document lang attribute
    const meta = DN_LANGUAGES[lang] || DN_LANGUAGES.vn;
    document.documentElement.lang = meta.htmlLang;

    // 7. Dispatch global event for interactive modules
    window.dispatchEvent(new CustomEvent('dn:language-changed', { detail: { lang, texts, meta } }));
  }

  updatePillUI(lang) {
    const currentMeta = DN_LANGUAGES[lang] || DN_LANGUAGES.vn;

    // A. Update Dropdown Triggers with active language
    document.querySelectorAll('.current-lang-text').forEach(el => {
      el.textContent = currentMeta.short;
    });
    document.querySelectorAll('.current-lang-label').forEach(el => {
      el.textContent = currentMeta.label;
    });
    document.querySelectorAll('.current-lang-flag').forEach(el => {
      el.textContent = currentMeta.flag;
    });

    // B. Update Dropdown and List items
    document.querySelectorAll('[data-lang]').forEach(item => {
      const targetLang = item.getAttribute('data-lang');
      const isSelected = targetLang === lang;

      // Check if this item is inside an inline pill or dropdown menu
      const isDropdownOption = item.classList.contains('lang-dropdown-opt') || item.closest('.lang-dropdown-menu');

      if (isDropdownOption) {
        if (isSelected) {
          item.classList.add('bg-red-50', 'text-brand-crimson', 'font-bold');
          item.classList.remove('text-gray-700', 'font-medium');
        } else {
          item.classList.remove('bg-red-50', 'text-brand-crimson', 'font-bold');
          item.classList.add('text-gray-700', 'font-medium');
        }
      } else {
        // Simple inline text switchers (legacy or footer pills)
        const isDark = item.closest('footer') || item.closest('.bg-white/10') || item.closest('.dark-pill');
        if (isDark) {
          if (isSelected) {
            item.className = 'text-white font-black cursor-pointer bg-white/20 px-2 py-0.5 rounded-full transition';
          } else {
            item.className = 'text-white/70 hover:text-white cursor-pointer px-1.5 transition';
          }
        } else {
          if (isSelected) {
            item.className = 'text-brand-crimson font-black cursor-pointer transition';
          } else {
            item.className = 'text-gray-400 hover:text-gray-700 cursor-pointer transition';
          }
        }
      }
    });
  }

  bindEvents() {
    // Delegated click listener for all elements with data-lang
    document.addEventListener('click', (e) => {
      const target = e.target.closest('[data-lang]');
      if (target) {
        e.preventDefault();
        const selectedLang = target.getAttribute('data-lang');
        this.setLanguage(selectedLang);
      }
    });
  }

  t(key) {
    const texts = this.dict[this.currentLang] || this.dict['en'];
    return (texts && texts[key]) || key;
  }
}

// Instantiate and attach globally
const dnI18n = new LanguageManager();
if (typeof window !== 'undefined') {
  window.dnI18n = dnI18n;
  window.DN_LANGUAGES = DN_LANGUAGES;
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => dnI18n.init());
  } else {
    dnI18n.init();
  }
}
`;

fs.writeFileSync(path.join(__dirname, '../../assets/js/core/i18n.js'), i18nTemplate, 'utf8');
console.log('✅ assets/js/core/i18n.js successfully updated!');
