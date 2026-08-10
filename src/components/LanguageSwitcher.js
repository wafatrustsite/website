'use client';

import { useEffect, useState } from 'react';

// The four languages the trust asked for. `code` is the Google Translate
// language code; `dir` flags right-to-left scripts (Urdu, Arabic).
const LANGUAGES = [
  { code: 'en', label: 'English', native: 'English', dir: 'ltr' },
  { code: 'hi', label: 'Hindi', native: 'हिन्दी', dir: 'ltr' },
  { code: 'ur', label: 'Urdu', native: 'اردو', dir: 'rtl' },
  { code: 'ar', label: 'Arabic', native: 'العربية', dir: 'rtl' },
];

// Read the current language out of the `googtrans` cookie Google sets
// (format: `/en/hi`). Falls back to English.
function currentLangFromCookie() {
  if (typeof document === 'undefined') return 'en';
  const m = document.cookie.match(/(?:^|;\s*)googtrans=([^;]+)/);
  if (!m) return 'en';
  const parts = decodeURIComponent(m[1]).split('/');
  return parts[2] || 'en';
}

export default function LanguageSwitcher() {
  const [lang, setLang] = useState('en');

  // Load the Google Translate script once and initialise the (hidden) widget.
  useEffect(() => {
    setLang(currentLangFromCookie());

    window.googleTranslateElementInit = function () {
      if (!window.google || !window.google.translate) return;
      /* eslint-disable no-new */
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'en',
          includedLanguages: LANGUAGES.map((l) => l.code).join(','),
          autoDisplay: false,
        },
        'google_translate_element'
      );
    };

    if (!document.getElementById('google-translate-script')) {
      const s = document.createElement('script');
      s.id = 'google-translate-script';
      s.src =
        'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      s.async = true;
      document.body.appendChild(s);
    } else if (window.google && window.google.translate) {
      window.googleTranslateElementInit();
    }
  }, []);

  const changeLanguage = (code) => {
    setLang(code);

    // Drive Google's hidden <select> if it has mounted yet.
    const tryCombo = (attempt = 0) => {
      const combo = document.querySelector('.goog-te-combo');
      if (combo) {
        combo.value = code;
        combo.dispatchEvent(new Event('change'));
      } else if (attempt < 20) {
        setTimeout(() => tryCombo(attempt + 1), 150);
      }
    };
    tryCombo();

    // Persist via the googtrans cookie so a full page reload keeps the choice.
    const host = window.location.hostname;
    const value = code === 'en' ? '/en/en' : `/en/${code}`;
    const cookie = `googtrans=${value};path=/;`;
    document.cookie = cookie;
    // Also set on the bare + dotted domain so subdomains stay in sync.
    document.cookie = `${cookie}domain=${host};`;
    if (host.split('.').length > 1) {
      document.cookie = `${cookie}domain=.${host.replace(/^www\./, '')};`;
    }

    // Selecting English can't be undone by Google's combo alone; reload clears it.
    if (code === 'en') {
      window.location.reload();
    }
  };

  const active = LANGUAGES.find((l) => l.code === lang) || LANGUAGES[0];

  return (
    <div className="lang-switcher" translate="no">
      {/* Google renders its (hidden) widget into this node */}
      <div id="google_translate_element" aria-hidden="true" />

      <span className="lang-switcher-icon" aria-hidden="true">
        {/* globe */}
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      </span>

      <select
        className="lang-switcher-select"
        aria-label="Select language"
        value={active.code}
        onChange={(e) => changeLanguage(e.target.value)}
      >
        {LANGUAGES.map((l) => (
          <option key={l.code} value={l.code}>
            {l.native}
          </option>
        ))}
      </select>
    </div>
  );
}
