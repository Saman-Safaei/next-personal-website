import type { FC } from 'react';
import { useAppDispatch, useSelect } from '@/store';
import { actions as uiActions } from '@/store/ui-slice';
import { Josefin_Sans } from 'next/font/google';
import SidebarLink from '@/components/layout/sidebar/SidebarLink';
import useLocale from '@/hooks/useLocale';

const josefin = Josefin_Sans({ subsets: ['latin'] });

export interface SidebarProps {}

const Sidebar: FC<SidebarProps> = () => {
  const { t, dir } = useLocale();
  const isSidebarOpen = useSelect(state => state.ui.isSidebarOpen);
  const classes = isSidebarOpen ? 'translate-y-0' : '-translate-y-full';

  const dispatch = useAppDispatch();

  return (
    <div
      className={`flex flex-col items-stretch w-full lg:hidden fixed top-0 bottom-0 right-0 z-20 bg-gray-800/80 backdrop-blur-lg transition-all duration-500 ${classes}`}>
      <div className='flex flex-row justify-between items-center shrink-0 h-navbar px-6 border-solid border-b-gray-600 border-b'>
        <button
          className='w-8 h-8'
          onClick={() => dispatch(uiActions.closeSidebar())}>
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
              d='M6 18L18 6M6 6l12 12'
            />
          </svg>
        </button>
        <p className={`${josefin.className} font-bold text-lg`}>Saman Safaei</p>
      </div>
      <div
        dir={dir}
        className='flex flex-col items-center grow justify-center overflow-y-auto overflow-x-hidden gap-4'>
        <SidebarLink href='/'>{t.navbarMainPageBtn}</SidebarLink>
        <SidebarLink href='/blog'>{t.navbarBlogBtn}</SidebarLink>
      </div>
    </div>
  );
};

export default Sidebar;
