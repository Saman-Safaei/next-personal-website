import type { GetStaticProps } from 'next';
import type { NextPageWithLayout } from '@/pages/_app';
import DefaultLayout from '@/components/layout/DefaultLayout';
import Skill from '@/components/pages/index/skill/Skill';
import SkillContainer from '@/components/pages/index/skill/SkillContainer';
import Projects from '@/components/pages/index/project/Projects';
import Project from '@/components/pages/index/project/Project';

import parsAcademyScreenShot from '~/public/images/parsacademy-screenshot.png';
import rSpotifyScreenShot from '~/public/images/r-spotify-screenshot.png';
import useLocale from '@/hooks/useLocale';

export interface HomeProps {
  locale: string;
}

const Home: NextPageWithLayout<HomeProps> = () => {
  const { t } = useLocale();

  return (
    <div className='relative flex flex-col items-stretch gap-56 py-8 px-6 z-0'>
      <span className='absolute top-8 bottom-8 right-1/2 translate-x-1/2 border-dashed border-r-4 border-r-gray-400 -z-[1]' />

      <section className='bg-gray-900 box mx-auto py-4'>
        <h3 className='text-3xl text-center font-bold mb-6'>
          {t.homeSkillsTitle}
        </h3>
        <SkillContainer>
          <Skill rate={2} title={'Next.js'} />
          <Skill rate={2} title={'React'} />
          <Skill rate={2} title={'React Router'} />
          <Skill rate={3} title={'Javascript'} />
          <Skill rate={2} title={'Typescript'} />
          <Skill rate={3} title={'HTML & CSS'} />
          <Skill rate={3} title={'Tailwindcss'} />
          <Skill rate={2} title={'React Transition Group'} />
          <Skill rate={1} title={'Formik + Yup'} />
          <Skill rate={1} title={'React Query'} />
          <Skill rate={3} title={'Axios'} />
          <Skill rate={2} title={'Redux + Redux Toolkit'} />
          <Skill rate={1} title={'MSW.js'} />
          <Skill rate={2} title={'React DevTools'} />
          <Skill rate={2} title={'Redux DevTools'} />
          <Skill rate={2} title={'Git + GitHub'} />
        </SkillContainer>
      </section>
      <section className='bg-gray-900 box mx-auto py-4'>
        <h3 className='text-3xl font-bold text-center mb-6'>
          {t.homePortfolioTitle}
        </h3>
        <Projects>
          <Project
            imageCover={parsAcademyScreenShot}
            imageAlt={'Pars Academy'}
            title='سایت ParsAcademy'
            previewLink='https://parsacademy.xyz'
            techStack={['Splide Js', 'Prism Js']}>
            ساخت لندینگ و داشبورد کاربران سایت پارس آکادمی. استفاده از Browser
            History Api برای ساخت SPA با Javascript.
          </Project>
          <Project
            imageCover={rSpotifyScreenShot}
            imageAlt='R-Spotify'
            title='سایت R-Spotify'
            gitHubLink='https://github.com/saman-safaei/r-spotify'
            techStack={[
              'TypeScript',
              'React',
              'Axios',
              'Formik',
              'React Transition Group',
              'Tailwindcss',
              'ReactQuery',
              'ReduxToolkit',
              'HeroIcons',
            ]}>
            ساخت یک کلون ساده از سایت Spotify، دارای قابلیت کش کردن ریکوئست های
            انجام شده در فرانت اند. نوشتن اصولی کد ها و بهینه سازی سایت.
          </Project>
        </Projects>
      </section>
    </div>
  );
};

Home.getLayout = page => (
  <DefaultLayout navbar header footer>
    {page}
  </DefaultLayout>
);

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {},
    revalidate: 7200,
  };
};

export default Home;
