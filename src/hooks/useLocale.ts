import fa from '@/locale/fa.json';
import en from '@/locale/en.json';
import { useRouter } from 'next/router';

export default function useLocale() {
  const { locale, locales } = useRouter();
  const t = locale === 'fa' ? fa : en;
  const dir = locale === 'fa' ? 'rtl' : 'ltr';

  return { t, locale, locales, dir };
}
