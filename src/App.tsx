import { useLanguage } from '@/hooks/useLanguage';
import Header from '@/components/Header';
import CompaniesAccordion from '@/components/CompaniesAccordion';

export default function App() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="flex h-[100dvh] w-screen flex-col overflow-hidden bg-white">
      <Header lang={lang} setLang={setLang} />
      <main className="relative flex flex-1 overflow-hidden">
        <CompaniesAccordion lang={lang} />
      </main>
    </div>
  );
}
