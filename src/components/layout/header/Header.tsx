import { FC } from 'react';
import Image from 'next/image';
import HeaderIcons from '@/components/layout/header/HeaderIcons';
import HeaderIconItem from '@/components/layout/header/HeaderIconItem';
import reactLogo from '~/public/images/react-icon.svg';
import instagramLogo from '~/public/images/instagram-logo.svg';
import telegramLogo from '~/public/images/telegram-icon.svg';
import githubLogo from '~/public/images/github-icon.svg';
import useLocale from '@/hooks/useLocale';

export interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  const { t, dir } = useLocale();

  return (
    <header className='w-full bg-gradient-to-b from-gray-700/50 to-transparent'>
      <div
        dir={dir}
        className='flex flex-col-reverse lg:flex-row items-center gap-6 px-6 py-10 box mx-auto min-h-[86vh]'>
        <div className='grow flex flex-col items-center lg:items-start'>
          <h2 className='text-3xl text-center font-bold mb-3'>
            {t.layoutHeaderName}
          </h2>
          <h1 className='text-5xl text-center font-bold animated-text mb-5'>
            {t.layoutHeaderTitle}
          </h1>
          <HeaderIcons>
            <HeaderIconItem
              link='https://t.me/saman_safaei_ir'
              logo={telegramLogo}
              alt='telegram'
            />
            <HeaderIconItem
              className='w-9 h-9'
              link='https://www.instagram.com/saman_safaei_ir/'
              logo={instagramLogo}
              alt='instagram'
            />
            <HeaderIconItem
              className='w-9 h-9'
              link='https://github.com/Saman-Safaei'
              logo={githubLogo}
              alt='github'
            />
          </HeaderIcons>
        </div>
        <div className='w-full sm:w-[70%] md:w-1/2 lg:w-1/3 shrink-0'>
          <div className='w-full bg-gradient-to-br from-gray-300/5 to-gray-300/10 rounded-full p-6 overflow-hidden border-dashed border-4 border-gray-700'>
            <Image
              className='block w-full aspect-square rounded-full animate-spin-slow'
              src={reactLogo}
              alt='react-logo'
              priority
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
