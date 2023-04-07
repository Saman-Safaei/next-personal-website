import type { NextPageWithLayout } from '@/pages/_app';
import DefaultLayout from '@/components/layout/DefaultLayout';
import type { GetStaticProps } from 'next';
import useLocale from '@/hooks/useLocale';

const Blog: NextPageWithLayout = () => {
  const { t } = useLocale();
  return (
    <div className='py-20'>
      <p className='text-center w-fit mx-auto text-2xl mb-3 animated-text'>
        {t.comingSoon}
      </p>
      <p className='text-lg text-center text-gray-400'>{t.pageInDevelop}</p>
    </div>
  );
};

Blog.getLayout = page => (
  <DefaultLayout navbar footer>
    {page}
  </DefaultLayout>
);

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {},
    revalidate: 7200,
  };
};

export default Blog;
