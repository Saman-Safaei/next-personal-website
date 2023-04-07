import type { FC } from 'react';
import { Fragment, useRef } from 'react';
import { Josefin_Sans } from 'next/font/google';
import NavbarLink from '@/components/layout/navbar/NavbarLink';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import useScrollData from '@/hooks/useScrollData';
import { useAppDispatch } from '@/store';
import { actions as uiActions } from '@/store/ui-slice';
import useLocale from '@/hooks/useLocale';

const josefin = Josefin_Sans({ subsets: ['latin'] });

const Navbar: FC = () => {
  const { t, dir } = useLocale();
  const navbarRef = useRef(null);
  const [fixed] = useScrollData(300);

  const dispatch = useAppDispatch();

  const dynamicClasses = fixed
    ? 'fixed top-0 right-0 bg-gray-700/50'
    : '-mt-navbar border-solid border-b border-b-gray-700/70';

  return (
    <Fragment>
      <div className='h-navbar bg-gray-700/50'></div>
      <SwitchTransition mode='out-in'>
        <CSSTransition
          nodeRef={navbarRef}
          in={fixed}
          key={fixed ? 'fixed' : 'no-fix'}
          classNames='slide'
          timeout={300}>
          <div
            dir={dir}
            ref={navbarRef}
            className={`${dynamicClasses} w-full h-navbar z-20 backdrop-blur-lg`}>
            <nav className='flex justify-between items-center h-full box mx-auto px-6'>
              <ul className='hidden lg:flex flex-row gap-6'>
                <NavbarLink url='/'>{t.navbarMainPageBtn}</NavbarLink>
                <NavbarLink url='/blog'>{t.navbarBlogBtn}</NavbarLink>
              </ul>
              <button
                onClick={() => dispatch(uiActions.openSidebar())}
                className='block lg:hidden w-8 h-8'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-full h-full'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25'
                  />
                </svg>
              </button>
              <p className={`${josefin.className} font-bold text-lg`}>
                Saman Safaei
              </p>
            </nav>
          </div>
        </CSSTransition>
      </SwitchTransition>
    </Fragment>
  );
};

export default Navbar;
