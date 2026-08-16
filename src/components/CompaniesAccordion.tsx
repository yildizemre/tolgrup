import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import type { Company, Lang } from '@/data/companies';
import { companies, uiText } from '@/data/companies';
import HomeIntro from './HomeIntro';
import CompanyTab from './CompanyTab';
import CompanyPanel from './CompanyPanel';
import VerticalControlRail from './VerticalControlRail';
import ContactModal from './ContactModal';

type Props = {
  lang: Lang;
};

export default function CompaniesAccordion({ lang }: Props) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const activeIndex = companies.findIndex((c) => c.id === activeId);
  const activeCompany = activeIndex >= 0 ? companies[activeIndex] : null;

  const close = useCallback(() => setActiveId(null), []);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        close();
        setMobileMenuOpen(false);
        setContactOpen(false);
      }
    }
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [close]);

  const handleActivate = (id: string) => {
    setActiveId((cur) => (cur === id ? null : id));
    setMobileMenuOpen(false);
  };

  return (
    <div className="relative flex h-full w-full overflow-hidden">
      <AnimatePresence>
        {activeCompany && <VerticalControlRail key="rail" lang={lang} onClose={close} />}
      </AnimatePresence>

      <div className="relative flex h-full flex-1 overflow-hidden">
        <AnimatePresence mode="wait">
          {activeCompany ? (
            <OpenLayout
              key="open"
              lang={lang}
              activeCompany={activeCompany}
              activeIndex={activeIndex}
              onActivate={handleActivate}
              onClose={close}
            />
          ) : (
            <ClosedLayout
              key="closed"
              lang={lang}
              onActivate={handleActivate}
              onOpenMobileMenu={() => setMobileMenuOpen(true)}
              onContact={() => setContactOpen(true)}
            />
          )}
        </AnimatePresence>
      </div>

      {/* Mobile slide-in menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <MobileMenu
            key="mobile-menu"
            lang={lang}
            onActivate={handleActivate}
            onClose={() => setMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Contact modal */}
      <AnimatePresence>
        {contactOpen && <ContactModal key="contact" lang={lang} onClose={() => setContactOpen(false)} />}
      </AnimatePresence>
    </div>
  );
}

/* ----------------------------- CLOSED (home) ----------------------------- */

function ClosedLayout({
  lang,
  onActivate,
  onOpenMobileMenu,
  onContact,
}: {
  lang: Lang;
  onActivate: (id: string) => void;
  onOpenMobileMenu: () => void;
  onContact: () => void;
}) {
  return (
    <motion.div
      className="flex h-full w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
    >
      {/* LEFT: intro (desktop only) */}
      <section className="hidden h-full w-[42%] flex-col px-6 pb-8 pt-6 sm:px-10 lg:flex lg:px-14 xl:w-[40%]">
        <HomeIntro lang={lang} onContact={onContact} />
      </section>

      {/* RIGHT: columns (desktop only) */}
      <section className="hidden h-full flex-1 flex-col border-l border-[#e6e6e6] px-6 pt-6 sm:px-10 lg:flex lg:px-14">
        <div className="flex items-center gap-3 pb-4">
          <span className="font-display text-[12px] font-semibold tracking-[0.25em] text-[#141414] uppercase">
            {uiText.companiesLabel[lang]}
          </span>
          <span className="h-px w-10 bg-[#141414]" aria-hidden="true" />
        </div>

        <div className="flex flex-1 items-end">
          <div className="flex h-full w-full items-end justify-end gap-0">
            {companies.map((c) => (
              <ColumnBar key={c.id} company={c} lang={lang} onClick={() => onActivate(c.id)} />
            ))}
          </div>
        </div>
      </section>

      {/* Mobile: intro + company grid */}
      <div className="flex h-full w-full flex-col overflow-y-auto lg:hidden">
        <div className="px-5 pb-6 pt-4 sm:px-8 sm:pb-8 sm:pt-6">
          <HomeIntro lang={lang} onContact={onContact} />
        </div>
        <MobileCompanies lang={lang} onActivate={onActivate} onOpenMenu={onOpenMobileMenu} />
      </div>
    </motion.div>
  );
}

function ColumnBar({
  company,
  lang,
  onClick,
}: {
  company: Company;
  lang: Lang;
  onClick: () => void;
}) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      aria-label={company.name[lang]}
      className="focus-ring group relative flex shrink-0 cursor-pointer flex-col items-center justify-end border-0 p-0"
      style={{ backgroundColor: company.color, height: '100%' }}
      whileHover={{ width: 84 }}
      animate={{ width: 76 }}
      transition={{ type: 'spring', stiffness: 260, damping: 30 }}
    >
      <span
        className="vertical-rl-up absolute bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap font-display text-[11px] font-bold uppercase tracking-[0.2em] text-white lg:text-[12px]"
      >
        {company.name[lang]}
      </span>
    </motion.button>
  );
}

/* ----------------------------- OPEN (panel) ----------------------------- */

function OpenLayout({
  lang,
  activeCompany,
  activeIndex,
  onActivate,
  onClose,
}: {
  lang: Lang;
  activeCompany: Company;
  activeIndex: number;
  onActivate: (id: string) => void;
  onClose: () => void;
}) {
  const before = companies.slice(0, activeIndex);
  const after = companies.slice(activeIndex + 1);

  return (
    <motion.div
      className="flex h-full w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
    >
      {/* left tabs (before active) */}
      <div className="hidden h-full shrink-0 lg:flex">
        {before.map((c) => (
          <CompanyTab
            key={c.id}
            company={c}
            lang={lang}
            active={false}
            collapsed
            onActivate={() => onActivate(c.id)}
          />
        ))}
      </div>

      {/* big panel (desktop only) */}
      <motion.div
        className="hidden h-full overflow-hidden lg:block"
        initial={{ width: 0, opacity: 0 }}
        animate={{ width: '65%', opacity: 1 }}
        exit={{ width: 0, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 120, damping: 22, duration: 0.7 }}
      >
        <AnimatePresence mode="wait">
          <CompanyPanel key={activeCompany.id} company={activeCompany} lang={lang} onClose={onClose} />
        </AnimatePresence>
      </motion.div>

      {/* right tabs (after active) */}
      <div className="hidden h-full flex-1 lg:flex">
        {after.map((c) => (
          <CompanyTab
            key={c.id}
            company={c}
            lang={lang}
            active={false}
            collapsed
            onActivate={() => onActivate(c.id)}
          />
        ))}
      </div>

      {/* Mobile open view */}
      <motion.div
        className="flex h-full w-full lg:hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <CompanyPanel company={activeCompany} lang={lang} onClose={onClose} />
      </motion.div>
    </motion.div>
  );
}

/* ----------------------------- MOBILE ----------------------------- */

function MobileCompanies({
  lang,
  onActivate,
  onOpenMenu,
}: {
  lang: Lang;
  onActivate: (id: string) => void;
  onOpenMenu: () => void;
}) {
  return (
    <section className="flex w-full flex-col px-5 pb-8 pt-2 sm:px-8 lg:hidden">
      <div className="flex items-center justify-between pb-4">
        <div className="flex items-center gap-3">
          <span className="font-display text-[11px] font-semibold tracking-[0.25em] text-[#141414] uppercase">
            {uiText.companiesLabel[lang]}
          </span>
          <span className="h-px w-8 bg-[#141414]" aria-hidden="true" />
        </div>
        <button
          type="button"
          onClick={onOpenMenu}
          aria-label={uiText.companiesLabel[lang]}
          className="focus-ring flex h-10 w-10 items-center justify-center text-[#141414] transition-opacity active:opacity-60"
        >
          <Menu className="h-5 w-5" strokeWidth={1.5} />
        </button>
      </div>
      <div className="grid grid-cols-2 gap-2">
        {companies.map((c) => (
          <button
            key={c.id}
            type="button"
            onClick={() => onActivate(c.id)}
            className="focus-ring flex min-h-[64px] w-full items-center justify-center px-3 transition-transform active:scale-[0.97]"
            style={{ backgroundColor: c.color }}
          >
            <span className="font-display text-[13px] font-bold uppercase tracking-[0.12em] text-white">
              {c.name[lang]}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}

function MobileMenu({
  lang,
  onActivate,
  onClose,
}: {
  lang: Lang;
  onActivate: (id: string) => void;
  onClose: () => void;
}) {
  return (
    <>
      <motion.div
        className="fixed inset-0 z-40 bg-black/40 lg:hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        onClick={onClose}
      />
      <motion.div
        className="fixed bottom-0 left-0 right-0 z-50 flex max-h-[80dvh] flex-col bg-white lg:hidden"
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        exit={{ y: '100%' }}
        transition={{ type: 'spring', stiffness: 320, damping: 34 }}
      >
        <div className="flex items-center justify-between border-b border-[#e6e6e6] px-5 py-4">
          <span className="font-display text-[12px] font-semibold tracking-[0.25em] text-[#141414] uppercase">
            {uiText.companiesLabel[lang]}
          </span>
          <button
            type="button"
            onClick={onClose}
            aria-label={uiText.close[lang]}
            className="focus-ring flex h-10 w-10 items-center justify-center text-[#141414]"
          >
            <X className="h-5 w-5" strokeWidth={1.5} />
          </button>
        </div>
        <div className="flex flex-col gap-2 overflow-y-auto p-4">
          {companies.map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => onActivate(c.id)}
              className="focus-ring flex min-h-[56px] w-full items-center px-5 transition-transform active:scale-[0.98]"
              style={{ backgroundColor: c.color }}
            >
              <span className="font-display text-[15px] font-bold uppercase tracking-[0.15em] text-white">
                {c.name[lang]}
              </span>
            </button>
          ))}
        </div>
      </motion.div>
    </>
  );
}
