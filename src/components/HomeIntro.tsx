import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { holdingInfo, uiText } from '@/data/companies';
import type { Lang } from '@/data/companies';
import Logo from './Logo';

type Props = {
  lang: Lang;
  onContact?: () => void;
};

export default function HomeIntro({ lang, onContact }: Props) {
  return (
    <div className="flex h-full flex-col justify-end pb-6 lg:pb-10">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col"
      >
        <h1 className="font-display text-[36px] font-extralight leading-[0.95] tracking-[-0.02em] text-[#141414] sm:text-[52px] lg:text-[64px] xl:text-[80px]">
          {holdingInfo.holdingName[lang]}
        </h1>

        <div className="mt-5 flex max-w-[760px] items-stretch gap-5 overflow-y-auto sm:mt-6 sm:gap-8">
          <p className="font-display text-[13px] font-light leading-[1.55] text-[#2a2a2a] sm:text-[15px] lg:text-[16px] xl:text-[17px]">
            {holdingInfo.description[lang]}
          </p>
          <div className="hidden w-px shrink-0 bg-[#d4d4d4] sm:block" aria-hidden="true" />
        </div>

        <motion.a
          href={holdingInfo.contactUrl}
          onClick={(e) => {
            if (onContact) {
              e.preventDefault();
              onContact();
            }
          }}
          className="focus-ring group mt-6 inline-flex items-center gap-3 self-start sm:mt-8"
          whileHover="hover"
        >
          <span className="font-display text-[13px] font-semibold tracking-[0.18em] text-[#141414] uppercase sm:text-[15px]">
            {holdingInfo.contactTitle[lang]}
          </span>
          <motion.span
            variants={{ hover: { x: 8 } }}
            transition={{ type: 'spring', stiffness: 350, damping: 28 }}
            className="inline-flex"
          >
            <ArrowRight className="h-5 w-5 text-[#141414] strokeWidth={1.5}" />
          </motion.span>
        </motion.a>
      </motion.div>

      <div className="mt-8 hidden lg:block">
        <Logo lang={lang} />
      </div>
    </div>
  );
}
