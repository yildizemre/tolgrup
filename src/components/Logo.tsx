import { holdingInfo } from '@/data/companies';
import type { Lang } from '@/data/companies';

type LogoProps = {
  lang?: Lang;
  className?: string;
  variant?: 'holding' | 'company';
};

export default function Logo({ lang = 'tr', className = '', variant = 'holding' }: LogoProps) {
  const text = variant === 'holding' ? 'TG' : 'CO';
  return (
    <div className={`flex items-center gap-2 sm:gap-3 ${className}`}>
      <div
        className="flex h-8 w-8 items-center justify-center border border-[#141414] font-display text-xs font-bold tracking-widest text-[#141414] sm:h-10 sm:w-10 sm:text-sm"
        aria-hidden="true"
      >
        {text}
      </div>
      {variant === 'holding' && (
        <span className="font-display text-[13px] font-semibold tracking-[0.2em] text-[#141414] sm:text-base">
          {holdingInfo.holdingName[lang]}
        </span>
      )}
    </div>
  );
}
