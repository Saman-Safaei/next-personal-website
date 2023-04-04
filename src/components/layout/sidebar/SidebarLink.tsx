import type { FC, ReactNode } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useAppDispatch } from '@/store';
import { actions as uiActions } from '@/store/ui-slice';

export interface SidebarLinkProps {
  children?: ReactNode;
  href: string;
}

const SidebarLink: FC<SidebarLinkProps> = ({ children, href = '/' }) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const isActive = router.asPath === href;

  const classes = isActive ? 'text-primary-light font-bold' : '';
  
  const linkClickHandler = () => {
    dispatch(uiActions.closeSidebar());
  }
  
  return (
    <Link href={href} className={classes} onClick={linkClickHandler}>
      {children}
    </Link>
  );
};

export default SidebarLink;
