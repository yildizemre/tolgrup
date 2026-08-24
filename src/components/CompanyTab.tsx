import { motion } from 'framer-motion';
import type { Company, Lang } from '@/data/companies';

type Props = {
  company: Company;
  lang: Lang;
  active: boolean;
  collapsed: boolean;
  onActivate: () => void;
};

/**
 * A single vertical column. When `collapsed` is false it's a full-height bar
 * on the home screen. When `collapsed` is true it shrinks to a narrow tab
 * (used in the accordion open state on the opposite side of the panel).
 */
export default function CompanyTab({ company, lang, active, collapsed, onActivate }: Props) {
  const label = company.name[lang];

  return (
    <motion.button
      type="button"
      onClick={onActivate}
      aria-expanded={active}
      aria-label={label}
      role="tab"
      className="focus-ring group relative flex h-full cursor-pointer flex-col justify-end overflow-hidden border-0 p-0"
      animate={{
        width: collapsed ? 34 : 64,
      }}
      transition={{ type: 'spring', stiffness: 260, damping: 30, duration: 0.3 }}
      style={{ backgroundColor: company.color }}
      whileHover={{ width: collapsed ? 38 : 68 }}
    >
      {/* vertical label */}
      <span
        className="vertical-rl-up absolute bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap font-display text-[14px] font-bold uppercase tracking-[0.2em] text-white"
      >
        {label}
      </span>
    </motion.button>
  );
}
