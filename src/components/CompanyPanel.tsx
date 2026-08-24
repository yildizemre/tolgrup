import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, X, LogIn, Clock } from 'lucide-react';
import type { Company, Lang } from '@/data/companies';
import { uiText } from '@/data/companies';

type Props = {
  company: Company;
  lang: Lang;
  onClose: () => void;
};

export default function CompanyPanel({ company, lang, onClose }: Props) {
  const titleLines = company.title[lang].split('\n');
  const [comingSoonOpen, setComingSoonOpen] = useState(false);

  return (
    <motion.div
      className="relative flex h-full w-full flex-col overflow-y-auto px-5 py-6 sm:px-10 sm:py-10 lg:px-16 lg:py-12"
      style={{ backgroundColor: company.color }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* close button (mobile / fallback) */}
      <button
        type="button"
        onClick={onClose}
        aria-label={uiText.close[lang]}
        className="focus-ring absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center text-white transition-opacity hover:opacity-60 lg:hidden"
      >
        <X className="h-6 w-6" strokeWidth={1.5} />
      </button>

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        className="flex flex-col"
      >
        {/* small logo */}
        <div className="mb-6 flex h-12 w-12 items-center justify-center border border-white/70 font-display text-xs font-bold tracking-widest text-white">
          {company.shortName.slice(0, 2)}
        </div>

        {/* big two-line title */}
        <h2 className="font-display text-[40px] font-extralight leading-[0.98] tracking-[-0.02em] text-white sm:text-[56px] lg:text-[72px] xl:text-[96px]">
          {titleLines.map((line, i) => (
            <span key={i} className="block">
              {line}
            </span>
          ))}
        </h2>

        {/* description + vertical line */}
        <div className="mt-6 flex max-w-[760px] items-stretch gap-5 sm:mt-8 sm:gap-8">
          <p className="font-display text-[16px] font-light leading-[1.6] text-white/90 sm:text-[18px] lg:text-[20px] xl:text-[22px]">
            {company.description[lang]}
          </p>
          <div
            className="hidden w-px shrink-0 bg-white/30 sm:block"
            aria-hidden="true"
          />
        </div>

        {/* links */}
        <div className="mt-8 flex flex-col gap-4 sm:mt-10 sm:flex-row sm:items-center sm:gap-8">
          {/* visit link */}
          {company.comingSoon ? (
            <button
              type="button"
              onClick={() => setComingSoonOpen(true)}
              className="focus-ring group inline-flex items-center gap-3 self-start"
            >
              <span className="font-display text-[14px] font-bold tracking-[0.18em] text-white uppercase sm:text-[16px]">
                {uiText.visit[lang]}
              </span>
              <motion.span
                whileHover={{ x: 8 }}
                transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                className="inline-flex"
              >
                <ArrowRight className="h-5 w-5 text-white" strokeWidth={1.5} />
              </motion.span>
            </button>
          ) : (
            <a
              href={company.website}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring group inline-flex items-center gap-3 self-start"
            >
              <span className="font-display text-[14px] font-bold tracking-[0.18em] text-white uppercase sm:text-[16px]">
                {uiText.visit[lang]}
              </span>
              <motion.span
                whileHover={{ x: 8 }}
                transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                className="inline-flex"
              >
                <ArrowRight className="h-5 w-5 text-white" strokeWidth={1.5} />
              </motion.span>
            </a>
          )}

          {/* partner login (optional) */}
          {company.partnerLogin && (
            <a
              href={company.partnerLogin}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring group inline-flex items-center gap-2 self-start border border-white/40 px-4 py-2 transition-colors hover:bg-white/10"
            >
              <LogIn className="h-4 w-4 text-white" strokeWidth={1.5} />
              <span className="font-display text-[13px] font-bold tracking-[0.18em] text-white uppercase sm:text-[14px]">
                {uiText.partnerLogin[lang]}
              </span>
            </a>
          )}
        </div>
      </motion.div>

      {/* coming soon popup */}
      <AnimatePresence>
        {comingSoonOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-black/50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setComingSoonOpen(false)}
            />
            <motion.div
              className="fixed left-1/2 top-1/2 z-50 w-[calc(100%-2rem)] max-w-sm -translate-x-1/2 -translate-y-1/2 bg-white px-6 py-8 text-center"
              initial={{ opacity: 0, scale: 0.92, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 10 }}
              transition={{ type: 'spring', stiffness: 320, damping: 28 }}
            >
              <button
                type="button"
                onClick={() => setComingSoonOpen(false)}
                aria-label={uiText.close[lang]}
                className="focus-ring absolute right-4 top-4 flex h-9 w-9 items-center justify-center text-[#141414] transition-opacity hover:opacity-60"
              >
                <X className="h-5 w-5" strokeWidth={1.5} />
              </button>

              <span
                className="mx-auto mb-4 flex h-14 w-14 items-center justify-center text-white"
                style={{ backgroundColor: company.color }}
              >
                <Clock className="h-6 w-6" strokeWidth={1.5} />
              </span>

              <h3 className="font-display text-[20px] font-semibold tracking-[0.02em] text-[#141414]">
                {uiText.comingSoonTitle[lang]}
              </h3>
              <p className="mt-2 font-display text-[14px] font-light leading-[1.6] text-[#555]">
                {uiText.comingSoonMessage[lang]}
              </p>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
