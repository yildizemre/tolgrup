import type { Lang } from '@/data/companies';
import Logo from './Logo';
import LanguageSelector from './LanguageSelector';

type Props = {
  lang: Lang;
  setLang: (l: Lang) => void;
};

export default function Header({ lang, setLang }: Props) {
  return (
    <>
      {/* 2px dark line on top */}
      <div className="h-[2px] w-full bg-[#141414]" />
      <header className="flex h-[64px] w-full items-center justify-between bg-white px-5 sm:h-[80px] sm:px-10 lg:h-[88px] lg:px-14">
        <Logo lang={lang} />
        <LanguageSelector lang={lang} setLang={setLang} />
      </header>
    </>
  );
}
