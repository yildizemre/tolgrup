import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import type { Lang } from '@/data/companies';
import { uiText } from '@/data/companies';

type Props = {
  lang: Lang;
  onClose: () => void;
};

export default function VerticalControlRail({ lang, onClose }: Props) {
  return (
    <motion.div
      initial={{ x: -64, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -64, opacity: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 32 }}
      className="z-30 hidden h-full w-16 shrink-0 flex-col items-center justify-between border-r border-[#e6e6e6] bg-white py-6 lg:flex"
    >
      <button
        type="button"
        onClick={onClose}
        aria-label={uiText.close[lang]}
        className="focus-ring flex h-11 w-11 items-center justify-center text-[#141414] transition-transform hover:scale-110"
      >
        <X className="h-6 w-6" strokeWidth={1.5} />
      </button>

      <span className="vertical-rl-up font-display text-[12px] font-semibold tracking-[0.25em] text-[#141414] uppercase">
        {uiText.companiesLabel[lang]}
      </span>

      <span className="h-11 w-11" aria-hidden="true" />
    </motion.div>
  );
}
