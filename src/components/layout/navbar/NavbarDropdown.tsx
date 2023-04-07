import type { FC, ReactNode } from 'react';
import { useCallback, useEffect, useRef, useState } from 'react';
import useLocale from '@/hooks/useLocale';

export interface NavbarDropdownProps {
  children?: ReactNode;
  title: string;
  contentClassName?: string;
}

const NavbarDropdown: FC<NavbarDropdownProps> = ({
  children,
  title,
  contentClassName = '',
}) => {
  const { dir } = useLocale();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);

  const toggleOpenHandler = () => {
    setOpen(prevValue => !prevValue);
  };

  const clickOutsideHandler = useCallback((ev: MouseEvent) => {
    const x = ev.clientX;
    const y = ev.clientY;
    const clickedElement = document.elementFromPoint(x, y);

    if (
      !dropdownRef.current?.contains(clickedElement) &&
      !dropdownRef.current?.isEqualNode(clickedElement)
    )
      setOpen(false);
  }, []);

  useEffect(() => {
    document.addEventListener('click', clickOutsideHandler);
    return () => document.removeEventListener('click', clickOutsideHandler);
  }, [clickOutsideHandler]);

  const btnBorderClass = open
    ? 'border-b-primary-light'
    : 'border-b-transparent';
  const dropdownContentClasses = dir === 'rtl' ? '-right-0' : '-left-0';
  const dropdownContentShow = open ? 'block' : 'hidden';

  return (
    <li ref={dropdownRef} className='relative inline-block'>
      <button
        onClick={toggleOpenHandler}
        className={`peer w-fit flex flex-row items-center py-1 gap-1 border-solid border-b ${btnBorderClass} transition-colors duration-300`}>
        <span>{title}</span>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='w-4 h-4'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M19.5 8.25l-7.5 7.5-7.5-7.5'
          />
        </svg>
      </button>
      <div
        onClick={toggleOpenHandler}
        className={`${dropdownContentShow} absolute top-[125%] ${dropdownContentClasses} px-4 py-2 bg-gray-700/90 w-max max-w-sm rounded-md ${contentClassName}`}>
        {children}
      </div>
    </li>
  );
};

export default NavbarDropdown;