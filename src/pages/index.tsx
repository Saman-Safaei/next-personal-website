import type { NextPageWithLayout } from '@/pages/_app';
import DefaultLayout from '@/components/layout/DefaultLayout';
import Image from 'next/image';
import devImage from '~/public/images/ab-img.png';
import Skill from '@/components/skill/Skill';
import SkillContainer from '@/components/skill/SkillContainer';

const Home: NextPageWithLayout = () => {
  return (
    <div className='relative flex flex-col items-stretch gap-40 py-8 px-6 z-0'>
      <span className='absolute top-8 bottom-8 right-1/2 translate-x-1/2 border-dashed border-r-4 border-r-gray-400 -z-[1]' />
      <section className='bg-gray-900 box mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-6 py-4'>
        <div>
          <Image
            className='w-3/4 mx-auto lg:w-full'
            src={devImage}
            alt='developer-image'></Image>
        </div>
        <div className='flex flex-col items-center lg:items-start gap-4'>
          <h3 className='text-3xl font-bold text-center lg:text-justify'>
            درباره من
          </h3>
          <p className='font-light leading-8 text-center lg:text-justify'>
            من سامان صفائی هستم و به مدت یکسال هست که ریکت و جاوا اسکریپت کار می
            کنم. به زبان تایپ اسکریپت تقریبا مسلط هستم و این زبان رو به جاوا
            اسکریپت ترجیح می دم.
          </p>
          <a download className='btn' href='/images/ab-img.png'>
            دانلود رزومه
          </a>
        </div>
      </section>

      <section className='bg-gray-900 box mx-auto py-4'>
        <h3 className='text-3xl text-center font-bold mb-6'>مهارت ها</h3>
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
        </SkillContainer>
      </section>
      <section className='bg-gray-900 box mx-auto py-4'></section>
    </div>
  );
};

Home.getLayout = page => (
  <DefaultLayout navbar header footer>
    {page}
  </DefaultLayout>
);

export default Home;
