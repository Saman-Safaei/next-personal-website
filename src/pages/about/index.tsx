import type { GetStaticProps } from 'next';
import type { NextPageWithLayout } from '@/pages/_app';
import DefaultLayout from '@/components/layout/DefaultLayout';
import useLocale from '@/hooks/useLocale';
import Image from "next/image";
import devImage from "~/public/images/ab-img.png";

const About: NextPageWithLayout = () => {
  const { t, dir } = useLocale();

  return <div className='min-h-screen flex items-center justify-center'>
    <section
      dir={dir}
      className='bg-gray-900 box mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-6 py-4'>
      <div>
        <Image
          className='w-3/4 mx-auto lg:w-full'
          src={devImage}
          alt='developer-image'></Image>
      </div>
      <div className='flex flex-col items-center lg:items-start gap-4'>
        <h3 className='text-3xl font-bold text-center lg:text-justify'>
          {t.homeAboutTitle}
        </h3>
        <p className='font-light leading-8 text-center lg:text-justify'>
          {t.homeAboutDescription}
        </p>
        <a download className='btn' href='/react-cv.pdf'>
          {t.homeAboutDownloadResume}
        </a>
      </div>
    </section>
  </div>;
};

About.getLayout = page => (
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

export default About;
