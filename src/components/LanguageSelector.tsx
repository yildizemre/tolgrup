import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Globe } from 'lucide-react';
import type { Lang } from '@/data/companies';
import { uiText } from '@/data/companies';

type Props = {
  lang: Lang;
  setLang: (l: Lang) => void;
};

export default function LanguageSelector({ lang, setLang }: Props) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener('mousedown', onDoc);
    return () => document.removeEventListener('mousedown', onDoc);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Dil seçici / Language selector"
        className="focus-ring flex h-10 w-[140px] items-center justify-between border border-[#1a2a4a] bg-white px-3 text-sm font-medium tracking-wide text-[#141414] transition-colors hover:bg-[#f7f8fb] sm:h-12 sm:w-[180px] sm:px-4"
      >
        <span className="flex items-center gap-2">
          <Globe className="h-4 w-4 text-[#1a2a4a]" strokeWidth={1.5} />
          {uiText.languageName[lang]}
        </span>
        <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.25 }}>
          <ChevronDown className="h-4 w-4 text-[#1a2a4a]" strokeWidth={1.5} />
        </motion.span>
      </button>

      {open && (
        <motion.ul
          role="listbox"
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="absolute right-0 top-[46px] z-50 w-[140px] border border-[#1a2a4a] bg-white sm:top-[54px] sm:w-[180px]"
        >
          {(['tr', 'en', 'de'] as Lang[]).map((l) => (
            <li key={l}>
              <button
                type="button"
                role="option"
                aria-selected={lang === l}
                onClick={() => {
                  setLang(l);
                  setOpen(false);
                }}
                className={`focus-ring flex h-10 w-full items-center px-3 text-sm font-medium tracking-wide transition-colors sm:h-12 sm:px-4 ${
                  lang === l ? 'bg-[#f0f3f9] text-[#1a2a4a]' : 'text-[#141414] hover:bg-[#f7f8fb]'
                }`}
              >
                {uiText.languageName[l]}
              </button>
            </li>
          ))}
        </motion.ul>
      )}
    </div>
  );
}
