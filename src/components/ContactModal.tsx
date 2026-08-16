import { motion } from 'framer-motion';
import { X, Mail, Phone } from 'lucide-react';
import type { Lang } from '@/data/companies';

type Props = {
  lang: Lang;
  onClose: () => void;
};

const contactText = {
  title: { tr: 'İletişim', en: 'Contact', de: 'Kontakt' },
  phoneLabel: { tr: 'Telefon', en: 'Phone', de: 'Telefon' },
  emailLabel: { tr: 'E-posta', en: 'Email', de: 'E-Mail' },
  email: 'info@tolgrup.com.tr',
  phone: '+90 850 000 00 00',
};

export default function ContactModal({ lang, onClose }: Props) {
  return (
    <>
      <motion.div
        className="fixed inset-0 z-40 bg-black/50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        onClick={onClose}
      />
      <motion.div
        className="fixed left-1/2 top-1/2 z-50 w-[calc(100%-2rem)] max-w-md -translate-x-1/2 -translate-y-1/2 bg-white"
        initial={{ opacity: 0, scale: 0.92, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 10 }}
        transition={{ type: 'spring', stiffness: 320, damping: 28 }}
      >
        {/* header */}
        <div className="flex items-center justify-between border-b border-[#e6e6e6] px-6 py-5">
          <h3 className="font-display text-[18px] font-semibold tracking-[0.02em] text-[#141414]">
            {contactText.title[lang]}
          </h3>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="focus-ring flex h-9 w-9 items-center justify-center text-[#141414] transition-opacity hover:opacity-60"
          >
            <X className="h-5 w-5" strokeWidth={1.5} />
          </button>
        </div>

        {/* body */}
        <div className="flex flex-col gap-5 px-6 py-6">
          <a
            href={`mailto:${contactText.email}`}
            className="focus-ring group flex items-center gap-4 border border-[#e6e6e6] px-4 py-4 transition-colors hover:bg-[#f7f7f7]"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#141414]">
              <Mail className="h-5 w-5 text-white" strokeWidth={1.5} />
            </span>
            <span className="flex flex-col">
              <span className="font-display text-[11px] font-semibold uppercase tracking-[0.18em] text-[#999]">
                {contactText.emailLabel[lang]}
              </span>
              <span className="font-display text-[15px] font-medium text-[#141414]">
                {contactText.email}
              </span>
            </span>
          </a>

          <a
            href={`tel:${contactText.phone.replace(/\s/g, '')}`}
            className="focus-ring group flex items-center gap-4 border border-[#e6e6e6] px-4 py-4 transition-colors hover:bg-[#f7f7f7]"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#141414]">
              <Phone className="h-5 w-5 text-white" strokeWidth={1.5} />
            </span>
            <span className="flex flex-col">
              <span className="font-display text-[11px] font-semibold uppercase tracking-[0.18em] text-[#999]">
                {contactText.phoneLabel[lang]}
              </span>
              <span className="font-display text-[15px] font-medium text-[#141414]">
                {contactText.phone}
              </span>
            </span>
          </a>
        </div>
      </motion.div>
    </>
  );
}
