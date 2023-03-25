import type { FC } from 'react';
import { Fragment, useCallback, useEffect, useRef, useState } from 'react';
import { Josefin_Sans } from 'next/font/google';
import NavbarLink from '@/components/navbar/NavbarLink';
import { CSSTransition, SwitchTransition } from 'react-transition-group';

const josefin = Josefin_Sans({ subsets: ['latin'] });

const Navbar: FC = () => {
  const [fixed, setFixed] = useState(false);
  const navbarRef = useRef(null);

  const onScrollHandler = useCallback(() => {
    const scroll = 200;
    if (window.scrollY > scroll && !fixed) setFixed(true);
    else if (window.scrollY <= scroll && fixed) setFixed(false);
  }, [fixed]);

  useEffect(() => {
    document.addEventListener('scroll', onScrollHandler);
    return () => document.removeEventListener('scroll', onScrollHandler);
  }, [onScrollHandler]);

  const dynamicClasses = fixed ? 'fixed top-0 right-0 bg-gray-700/50' : '-mt-navbar border-solid border-b border-b-gray-700/70';

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
            ref={navbarRef}
            className={`${dynamicClasses} w-full h-navbar z-20 backdrop-blur`}>
            <nav className='flex justify-between items-center h-full box mx-auto px-6'>
              <ul className='hidden lg:flex flex-row gap-6'>
                <NavbarLink url='/'>صفحه اصلی</NavbarLink>
                <NavbarLink url='/blog'>وبلاگ</NavbarLink>
                <NavbarLink url='/about-me'>درباره من</NavbarLink>
                <NavbarLink url='/contact-me'>تماس با من</NavbarLink>
              </ul>
              <button className="block lg:hidden bg-black w-4 h-4">
              
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
