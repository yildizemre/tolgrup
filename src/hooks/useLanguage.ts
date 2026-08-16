import { useState, useEffect, useCallback } from 'react';
import type { Lang } from '@/data/companies';

const STORAGE_KEY = 'holding-lang';

export function useLanguage() {
  const [lang, setLang] = useState<Lang>(() => {
    if (typeof window === 'undefined') return 'tr';
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return stored === 'en' || stored === 'tr' || stored === 'de' ? stored : 'tr';
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* ignore */
    }
    document.documentElement.lang = lang;
  }, [lang]);

  const toggle = useCallback(() => {
    setLang((prev) => (prev === 'tr' ? 'en' : prev === 'en' ? 'de' : 'tr'));
  }, []);

  return { lang, setLang, toggle };
}
