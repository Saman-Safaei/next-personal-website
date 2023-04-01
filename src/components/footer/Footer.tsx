import bg from '~/public/images/map-color-overlay.png';
import type { FC } from 'react';
import Image from 'next/image';

export interface FooterProps {}

const Footer: FC<FooterProps> = () => {
  return (
    <footer className='z-0 relative py-20 px-6 overflow-hidden'>
      <Image
        className='absolute top-0 right-1/2 translate-x-1/2 w-full min-w-[200%] md:min-w-[150%] lg:min-w-full -z-[1]'
        src={bg}
        alt='footer-background'></Image>
      <h3 className='text-center text-3xl font-bold mb-4 lg:mb-6'>
        تماس با من
      </h3>
      <ul className='box mx-auto flex flex-col md:flex-row justify-center items-center gap-4 mb-6'>
        <li className='w-full max-w-xs bg-gray-800/80 rounded-md p-4 text-gray-300'>
          <span className='block mx-auto w-fit p-4 border-solid border-2 border-current rounded-full mb-4'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='currentColor'
              className='w-8 h-8'>
              <path
                fillRule='evenodd'
                d='M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z'
                clipRule='evenodd'
              />
            </svg>
          </span>
          <h4 className='text-center mb-1 text-xl font-bold'>شماره تماس</h4>
          <p className='text-center text-sm text-gray-400'>09196043787</p>
        </li>
        <li className='w-full max-w-xs bg-gray-800/80 rounded-md p-4 text-gray-300'>
          <span className='block mx-auto w-fit p-4 border-solid border-2 border-current rounded-full mb-4'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='currentColor'
              className='w-8 h-8'>
              <path d='M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z' />
              <path d='M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z' />
            </svg>
          </span>
          <h4 className='text-center mb-1 text-xl font-bold'>ایمیل</h4>
          <p className='text-center text-sm text-gray-400'>
            xsamansafaeix@gmail.com
          </p>
        </li>
        <li className='w-full max-w-xs bg-gray-800/80 rounded-md p-4 text-gray-300'>
          <span className='block mx-auto w-fit p-4 border-solid border-2 border-current rounded-full mb-4'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='currentColor'
              className='w-8 h-8'>
              <path d='M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z' />
            </svg>
          </span>
          <h4 className='text-center mb-1 text-xl font-bold'>تلگرام</h4>
          <p className='text-center text-sm text-gray-400'>saman_safaei_ir</p>
        </li>
      </ul>
      <p className='text-center text-gray-400'>طراحی و توسعه توسط سامان صفائی</p>
    </footer>
  );
};

export default Footer;
