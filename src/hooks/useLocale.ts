import fa from '@/locale/fa.json';
import en from '@/locale/en.json';
import { useRouter } from 'next/router';

export default function useLocale() {
  const router = useRouter();
  const { locale, locales, asPath, pathname, query } = router;
  const t = locale === 'fa' ? fa : en;
  const dir = locale === 'fa' ? 'rtl' : 'ltr';

  const changeLocaleHandler = (locale: 'fa' | 'en') => {
    router.push({ query, pathname }, asPath, { locale: locale }).then();
  };

  return { t, locale, locales, dir, changeLocale: changeLocaleHandler };
}
